const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

// function areSentencesSimilar(sentence1, sentence2) {
//   const tokenizedSentence1 = tokenizer.tokenize('Kshitij is a handsome boy');
//   const tokenizedSentence2 = tokenizer.tokenize('Sainath is a handsome boy');
  
//   const vector1 = new natural.TfIdf().addDocument(tokenizedSentence1).idf;
//   const vector2 = new natural.TfIdf().addDocument(tokenizedSentence2).idf;
  
//   const similarityScore = new natural.Similarity(vector1, vector2).cosineSimilarity;
  
//   return similarityScore > 0.6; // you can adjust the threshold as per your requirements
// }

const tokenizedSentence1 = tokenizer.tokenize('Kshitij is a handsome boy');
const tokenizedSentence2 = tokenizer.tokenize('Sainath is a handsome boy');

const vector1 = new natural.TfIdf().addDocument(tokenizedSentence1).idf;
const vector2 = new natural.TfIdf().addDocument(tokenizedSentence2).idf;

const similarityScore = new natural.Similarity(vector1, vector2).cosineSimilarity;

//  similarityScore > 0.6; // you can adjust the threshold as per your requirements
console.log(similarityScore);