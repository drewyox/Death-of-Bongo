import { Haiku } from "../src/backEnd.js";

describe('Haiku', function() {

  it('should count the number of vowels in a word', function() {
    //Test content will go here.
    const haiku = new Haiku('tiim', 'he', 'did');
    expect(haiku.findVowels(haiku.first)).toEqual(2);
  });

  it('should subtract any silent vowels', function() {
    //Test content will go here.
    const haiku = new Haiku('tiim', 'he', 'did');
    expect(haiku.findSilents(haiku.first)).toEqual(1);
  });
  //
  // it('should check if its a dipthong', function() {
  //   //Test content will go here.
  // });
  //
  // it('should check if remaing vowels are equal to sylables', function() {
  //   //Test content will go here.
  // });
  //
  //
  // it('should check if first entry has 5 syllables', function() {
  //   //Test content will go here.
  // });
  //
  // it('should check if second entry has 7 syllables', function() {
  //   //Test content will go here.
  // });
  //
  // it('should check if third entry has 5 syllables', function() {
  //   //Test content will go here.
  // });


});
