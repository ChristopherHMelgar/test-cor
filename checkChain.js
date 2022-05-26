function checkChain(wordsToChain) {
  const result = [wordsToChain[0]];
  const used = [];
  const canCircle = createCircle(wordsToChain, result, used);

  if (!canCircle) {
    return false;
  }
  return result;
}

function createCircle(wordsToChain, result, used) {
  if (wordsToChain.length === result.length) {
    if (canBeChained(result, wordsToChain[0])) {
      return true;
    }
    return false;
  }

  for (let index = 0; index < wordsToChain.length; index++) {
    if (used[index]) {
      continue;
    }

    if (canBeChained(result, wordsToChain[index])) {
      used[index] = true;
      result.push(wordsToChain[index]);
      const canCircle = createCircle(wordsToChain, result, used);

      if (canCircle) {
        return true;
      }
      used[index] = false;
      result.pop();
    }
  }

  return false;
}

function canBeChained(result, word) {
  const lastWord = result.at(-1);
  return lastWord.charAt(lastWord.length - 1) === word.charAt(0);
}

module.exports = {
  checkChain,
};
