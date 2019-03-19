import $ from 'jquery';
export class Tamagotchi {
  constructor () {
    this.food = 10;
    this.sleep = 10;
    this.attention = 10;
  }


  // existence() {
  //   setInterval(() => {
  //     this.food + 3;
  //     this.sleep - 2;
  //     this.attention--;
  //   }, 1000);
  // }


  endIt(intervalId){
    clearInterval(intervalId);
  }



  hungry() {
  var hungryId = setInterval(() => {
      this.food--;
    }, 6000);
    return hungryId;
  }
  sleepy() {
  var sleepyId = setInterval(() => {
      this.sleep--;
    }, 7000);
    return sleepyId;
  }
  bored() {
  var boredId = setInterval(() => {
      this.attention--;
    }, 4000);
    return boredId;
  }


  sleepBar(){
    setInterval(() => {
      var progress = this.sleep/10;
      if (progress > .7) {
        $(".fullS").css({"height": "100%", "background-color": "green"});
      }
      if (progress <= .7) {
        $(".fullS").css({"height": "75%", "background-color": "lightgreen"});
      }
      if (progress  <= .5) {
        $(".fullS").css({"height": "50%", "background-color": "orange"});
      }
      if (progress  <= .25) {
        $(".fullS").css({"height": "25%", "background-color": "red"});
      }
      if (progress <= 0) {
        $(".fullS").css({"height": "100%", "background-color": "black"});
      }
    },  1000)
  }

  death(hungryId, sleepyId, boredId, dethId) {
    let dead = false;
    var intervalId = setInterval(() => {
      if (this.food <= 0 || this.sleep <= 0 || this.attention <= 0) {
        if (!dead) {
          // alert("Your Tamagotchi is dead, my condolences");
          this.endIt(hungryId);
          this.endIt(sleepyId);
          this.endIt(boredId);
          this.endIt(intervalId);

          dead = true;
        }
        console.log("test");
        return true;

      }
    }, 1000);
    return intervalId;
  };

  // trueDeath(deathInt) {
  //   if (true){
  //     this.endIt(deathInt);
  //   }
  // };

  pickOn() {
    this.attention--;
  }

  inject() {
    this.sleep -= 3;
    this.attention = 3;
    this.food--;
  }

  feed () {
    this.food++;
  };

  rest() {
    this.sleep = 10;
  };

  play () {
    this.attention++;
  };

  checkNumbers() {
    setInterval(() => {
      console.log(this.food, this.sleep, this.attention);


    }, 1000)
  }


  foodBar(){
    setInterval(() => {
     var progress = this.food/10;
       if (progress > .7) {
         $(".fullF").css({"height": "100%", "background-color": "green"});
       }
       if (progress <= .7) {
         $(".fullF").css({"height": "75%", "background-color": "lightgreen"});
       }
       if (progress  <= .5) {
         $(".fullF").css({"height": "50%", "background-color": "orange"});
       }
       if (progress  <= .25) {
         $(".fullF").css({"height": "25%", "background-color": "red"});
       }
       if (progress <= 0) {
         $(".fullF").css({"height": "100%", "background-color": "black"});
       }
   },  1000)
 }

 funBar(){
   setInterval(() => {
    var progress = this.attention/10;
      if (progress > .7) {
        $(".fullA").css({"height": "100%", "background-color": "green"});
      }
      if (progress <= .7) {
        $(".fullA").css({"height": "75%", "background-color": "lightgreen"});
      }
      if (progress  <= .5) {
        $(".fullA").css({"height": "50%", "background-color": "orange"});
      }
      if (progress  <= .25) {
        $(".fullA").css({"height": "25%", "background-color": "red"});
      }
      if (progress <= 0) {
        $(".fullA").css({"height": "100%", "background-color": "black"});
      }
  },  1000)
}





}
