import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;

public class WordFrequency {

	public static String fixString(String in) {
		String out = "";
		in = in.toLowerCase();
		for (char c : in.toCharArray()) {
			int aAscii = (int) 'a';
			int zAscii = (int) 'z';
			int cAscii = (int) c;

			if (aAscii <= cAscii && cAscii <= zAscii || c == '\'') {
				out += c;
			}

			if (c == '’')
				out += '\'';

		}
		return out;
	}

	public static void main(String[] args) throws IOException {

		TreeMap<String, ArrayList<String>> words = new TreeMap<String, ArrayList<String>>();

		String fileName = "test";
		BufferedReader reader = new BufferedReader(new FileReader(new File(fileName + ".txt")));
		String line;

		String currentSpeaker = "";
		while ((line = reader.readLine()) != null) {
			if (line.length() == 0) {
				continue;
			}
			if (line.startsWith("[")) {
				currentSpeaker = fixString(line);
				continue;
			}
			String[] tokens = line.split(" ");
			ArrayList<String> list;
			if (words.containsKey(currentSpeaker)) {
				list = words.get(currentSpeaker);
				words.remove(currentSpeaker);
			} else {
				list = new ArrayList<>();
			}
			for (String s : tokens) {
				list.add(fixString(s));
			}
			words.put(currentSpeaker, list);

		}
		
		reader.close();
		File file = new File(fileName + "_counted.txt");
		if (!file.exists()) {
			file.createNewFile();
		}
		BufferedWriter writer = new BufferedWriter(new FileWriter(file));
		
		for (String character : words.keySet()) {
			ArrayList<String> list = words.get(character);
			Set<String> unique = new TreeSet<String>(list);
			
			writer.write("//" + character);
			writer.newLine();
			
			for (String key : unique) {
				writer.write(key + ": " + Collections.frequency(list, key));
				writer.newLine();
			}
		}
		writer.close();
	}
}
