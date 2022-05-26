const { writeFile } = require('./file-system');
const { checkChain } = require('./checkChain');

const notChainedWords = ['chair', 'racket', 'touch', 'height', 'tunic', 'cor'];
const chainedWords = ['chair', 'racket', 'touch', 'height', 'tunic'];

const result = checkChain(chainedWords);

if (result) {
  writeFile('./output/result.txt', result);
} else {
  console.log('Not able to chain');
}
