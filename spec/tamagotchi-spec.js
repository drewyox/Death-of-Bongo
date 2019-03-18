import {Tamagotchi} from "../src/backEnd.js";

describe (Tamagotchi, function() {
  let bingo =  new Tamagotchi();


  beforeEach(function() {
    jasmine.clock().install();
    bingo.hungry();
    bingo.sleepy();
    bingo.bored();
    bingo.death();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should count down by one every 6 seconds', function(){
    jasmine.clock().tick(6001);
    bingo.hungry();
    bingo.sleepy();
    bingo.bored();
    expect(bingo.food, bingo.sleep, bingo.attention).toEqual(9, 10, 8);
  });

  it('should display death message when any stat gets to 0', function(){
    bingo.attention = 0;
    expect(bingo.death()).toEqual(true);
  })

});

















//
// describe('HungryBear', function() {
//   let fuzzy = new HungryBear("Fuzzy");
//
//   beforeEach(function() {
//     jasmine.clock().install();
//   });
//
//   afterEach(function() {
//     jasmine.clock().uninstall();
//   });
//
//   it('should have a name and a food level of 10 when it is created', function() {
//     expect(fuzzy.name).toEqual("Fuzzy");
//     expect(fuzzy.foodLevel).toEqual(10);
//   });
//
//
//   it('should have a food level of 7 after 3001 milliseconds', function() {
//     jasmine.clock().tick(3001);
//     expect(fuzzy.foodLevel).toEqual(7);
//   });
// });





// describe('Haiku', function() {
//
//   it('should count the number of vowels in a word', function() {
//     //Test content will go here.
//     const haiku = new Haiku('tiim', 'he', 'did');
//     expect(haiku.findVowels(haiku.first)).toEqual(2);
// });
