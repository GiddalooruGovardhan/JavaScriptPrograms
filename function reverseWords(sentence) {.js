function reverseWords(sentence) {
    // Split the sentence into words using whitespace as the delimiter
    const words = sentence.split(/\s+/);

    // Reverse each word in the array
    const reversedWords = words.map(reverseWord);

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    // Handle trailing punctuation
    let trailingPunctuation = '';
    while (word.length > 0 && !word[word.length - 1].match(/[a-zA-Z0-9]/)) {
        trailingPunctuation = word[word.length - 1] + trailingPunctuation;
        word = word.slice(0, -1);
    }

    // Reverse the characters in the word
    const reversedWord = word.split('').reverse().join('');

    // Combine the reversed word with the trailing punctuation
    return reversedWord + trailingPunctuation;
}

// Example usage
const inputSentence = 'This is a sunny day in javascript';
const reversedResult = reverseWords(inputSentence);
console.log('Reversed Sentence:', reversedResult);
