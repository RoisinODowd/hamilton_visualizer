import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class Fixer {
	
	public static String fix(String s) {
//		s = s.replaceAll("\"", "");
//		s = s.replaceAll("\\,", "");
		s = s.replaceAll("“", "");
		s = s.replaceAll("”", "");
		s = s.replaceAll("’", "\'");
		s = s.replaceAll("\\.", "");
		s = s.replaceAll("!", "");
		s = s.replaceAll("\\[", "");
		s = s.replaceAll("\\]", "");
		
		return s;
	}
	
	private static void main(String[] args) throws IOException {
		String fileName = "test";
		BufferedReader reader = new BufferedReader(new FileReader(new File(fileName + ".txt")));

		String line;
		ArrayList<String> currentSpeakers = new ArrayList<String>();

		ArrayList<String> output = new ArrayList<String>();

		String outputLine = "";
		boolean inBackslash = false;
		while ((line = reader.readLine()) != null) {
			if (line.startsWith("[")) {
				currentSpeakers.clear();
				if(!inBackslash) {
					String currentSpeaker = line.substring(1, line.indexOf("]"));
					currentSpeaker = currentSpeaker.replaceAll(" ", "_");
					currentSpeakers.add(currentSpeaker);
				}else {
					String[] tokens = line.split(", ");
					for (String s : tokens) {
						currentSpeakers.add(fix(s));
					}
				}
			} else if (line.length() == 0) {
				continue;
			} else {
				if (inBackslash) {
					outputLine += "\n  {\n";
					if (line.endsWith("\\")) {
						inBackslash = false;
					}
					for (String speaker : currentSpeakers) {
						outputLine += "    " + speaker;
						outputLine += ": \"";
						outputLine += line.substring(0, line.length() - (inBackslash ? 0 : 1));
						outputLine += "\",\n";
					}
					outputLine = outputLine.substring(0, outputLine.length() - 2) + "\n"; 
					outputLine += "  },";
					if (!inBackslash) {
						outputLine = outputLine.substring(0, outputLine.length() - 1);
						outputLine += "\n},";
						output.add(fix(outputLine));
					}
				} else {
					if (line.endsWith("\\")) {
						inBackslash = true;
						outputLine = "{\n  ";
						if (line.length() != 1) {
							outputLine+= "{\n    ";
							outputLine+= currentSpeakers.get(0);
							outputLine += ": \"";
							outputLine += line.substring(0, line.length() - 1);
							outputLine += "\"\n  },";
						}
						continue;
					}
					outputLine = "{\n  {\n    ";
					outputLine += currentSpeakers.get(0);
					outputLine += ": \"";
					outputLine += line;
					outputLine += "\"\n  }\n}";
					outputLine = fix(outputLine);
					outputLine += ",";
					output.add(outputLine);
				}


			}

		}

		File file = new File(fileName + "_fixed.txt");
		if (!file.exists()) {
			file.createNewFile();
		}

		BufferedWriter writer = new BufferedWriter(new FileWriter(file));
		for (int i = 0; i < output.size(); i++) {
			String s = output.get(i);
			if (i != output.size() - 1) {
				writer.write(s);
				writer.newLine();
			} else {
				s = s.substring(0, s.length() - 1);
				writer.write(s);
			}
		}
		reader.close();
		writer.close();

	}
}
