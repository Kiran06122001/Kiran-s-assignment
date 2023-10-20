public class PangramChecker {
    public static void main(String[] args) {
        String sentence = "The quick brown fox jumps over the lazy dog"; // Change this to the input sentence
        boolean isPangram = isPangram(sentence);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
        // Create an array to mark the presence of each letter
        boolean[] alphabet = new boolean[26];

        // Convert the input sentence to lowercase
        sentence = sentence.toLowerCase();

        for (int i = 0; i < sentence.length(); i++) {
            char c = sentence.charAt(i);

            if (c >= 'a' && c <= 'z') {
                int index = c - 'a';
                alphabet[index] = true;
            }
        }

        // Check if all letters from 'a' to 'z' are present
        for (boolean letterPresent : alphabet) {
            if (!letterPresent) {
                return false;
            }
        }

        return true;
    }
}
