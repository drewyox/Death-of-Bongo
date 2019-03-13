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

  // findSilents(word) {
  //   const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  //   let silents = 0;
  //   //increment for trailing silent 'e'
  //   if(word[word.length - 1] === 'e') {
  //     silents++;
  //   }
  //
  //   //increment for back to back vowels
  //   for(let i = 0; i < word.length; i++) {
  //     for(let x = 0; i < vowels.length; i++) {
  //       if(word[i].includes(vowels[x])) {
  //
  //       }
  //     }
  //   }
  // }

  findVowels(word) {
    //finds number of vowels in a word
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    const splitWord = word.split('');
    let vowelCount = 0;
    let silentCount = 0;
    for (let i = 0; i < splitWord.length; i++) {
      if(vowels.includes(splitWord[i])) {
        vowelCount++;
      }
      if(vowels.includes(splitWord[i]) && vowels.includes(splitWord[i + 1])) {
        silentCount++;
      }
      if(splitWord[splitWord.length - 1] === 'e') {
        silentCount++;
      }
    }
    return vowelCount - silentCount;
  }




}
