import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Motif {
	public static void main(String[] args) throws IOException{
		String output = "{\n\t\"motifs\": [";
		BufferedReader reader = new BufferedReader(new FileReader(new File("motifs.txt")));
		String line;
		while((line = reader.readLine()) != null){
			if(line.length() == 0) continue;
			line = line.substring(1, line.length() - 1);
			String[] tokens = line.split(" ");
			String wordOne = tokens[0].substring(1);
			String wordTwo = tokens[1];
			String wordThree = tokens[2].substring(0, tokens[2].length() - 1);
			int freq = Integer.parseInt(tokens[3]);
			
			output += "\t{\n\t\t\"word1\": \"" + wordOne+"\"},\n";
			output += "\t{\n\t\t\"word2\": \"" + wordTwo+"\"},\n";
			output += "\t{\n\t\t\"word3\": \"" + wordThree+"\"},\n";
			output += "\t{\n\t\t\"freq\": " + freq +"},\n";
			output += "\t\n";
		}
		
		output = output.substring(0, output.length() - 2) + "\n";
		output += "]}";
		reader.close();
		BufferedWriter writer = new BufferedWriter(new FileWriter(new File("motifs.json")));
		writer.write(output);
		writer.close();
	}
}
