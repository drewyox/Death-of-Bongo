//Haiku constructor
export class Haiku {
  constructor (line1, line2, line3) {
    this.first = line1;
    this.second = line2;
    this.third = line3;
    this.vowels1 = 0;
    this.vowels2 = 0;
    this.vowels3 = 0;
  }

  findWords(line) {
    const wordsArr = [];
    wordsArr.push(line.split(' '));
    return wordsArr
  }

  findSilents(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let silentCount = 0;

    for (let i = 0; i < word.length; i++) {
      if(vowels.includes(word[i]) && vowels.includes(word[i + 1])){
        silentCount++;
      }
    }

    if(word[word.length -1] === 'e') {
      silentCount++;
    }

    return silentCount
  }

  findVowels(word) {
    //finds number of vowels in a word
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const splitWord = word.split('');
    let vowelCount = 0;
    let silentCount = 0;
    //find all vowels
    for (let i = 0; i < splitWord.length; i++) {
      if(vowels.includes(splitWord[i])) {
        vowelCount++;
      }
    }
    //remove the silent vowels from total vowels
    return vowelCount;
  }




}
