import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import './backEnd.js';
import $ from 'jquery';
import {Tamagotchi} from "./backEnd.js";


$(document).ready(function() {

  const bongo = new Tamagotchi();
  let hungryIntervalId = bongo.hungry();
  let sleepIntervalId = bongo.sleepy();
  let boredIntervalId = bongo.bored();
  // let deathIntervalId = bongo.death();
  bongo.death(hungryIntervalId, sleepIntervalId, boredIntervalId);
  // bongo.trueDeath(deathIntervalId);
  bongo.checkNumbers();
  // sleepBar(bongo);
  bongo.sleepBar();
  bongo.foodBar();
  bongo.funBar();

  $('#feedBut').click(function() {
    bongo.feed();
    console.log(bongo.food)
  });
  $('#playBut').click(function() {
    bongo.play();
    console.log(bongo.attention)
  });
  $('#sleepBut').click(function() {
    bongo.rest();
    console.log(bongo.sleep);
  });
  $('#pickOn').click(function(){
    bongo.pickOn();
  })
  $('#inject').click(function(){
    bongo.inject();
  })


  // bongo.endIt(hungryIntervalId);
  // bongo.endIt(sleepIntervalId);
  // bongo.endIt(boredIntervalId);
  // bongo.endIt(deathIntervalId);


});







// $(document).ready(function() {
//   $('#ping-pong-form').submit(function(event) {
//     event.preventDefault();
//     var goal = $('#goal').val();
//     var output = pingPong(goal);
//     output.forEach(function(element) {
//       $('#solution').append("<li>" + element + "</li>");
//     });
//   });
// });
