function reverseWords(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // Initialize an array to store the reversed words
    let reversedWords = [];

    // Reverse each word and add it to the array
    for (let word of words) {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedWords.push(reversedWord);
    }

    // Join the reversed words back into a sentence
    let reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage:
let inputSentence = "This is a sunny day";
let reversedResult = reverseWords(inputSentence);
console.log(reversedResult);
