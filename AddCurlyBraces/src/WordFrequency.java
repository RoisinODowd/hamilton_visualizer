import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Set;
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

		ArrayList<String> words = new ArrayList<String>();

		String fileName = "test";
		BufferedReader reader = new BufferedReader(new FileReader(new File(fileName+".txt")));
		String line;

		while ((line = reader.readLine()) != null) {
			if (line.length() == 0) {
				continue;
			}
			String[] tokens = line.split(" ");
			for (String s : tokens) {
				words.add(fixString(s));
			}
		}
		reader.close();

		Set<String> unique = new TreeSet<String>(words);
		File file = new File(fileName+"_counted.txt");
		if(!file.exists()) {
			file.createNewFile();
		}
		BufferedWriter writer = new BufferedWriter(new FileWriter(file));
		for (String key : unique) {
			writer.write(key + ": " + Collections.frequency(words, key));
			writer.newLine();
		}
		
		writer.close();
	}
}
