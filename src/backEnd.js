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
    }, 8000);
    return sleepyId;
  }
  bored() {
  var boredId = setInterval(() => {
      this.attention--;
    }, 1000);
    return boredId;
  }
  death(hungryId, sleepyId, boredId, dethId) {
    let dead = false;
    var intervalId = setInterval(() => {
      if (this.food <= 0 || this.sleep <= 0 || this.attention <= 0) {
        if (!dead) {
          alert("Your Tamagotchi is dead, my condolences");
          this.endIt(hungryId);
          this.endIt(sleepyId);
          this.endIt(boredId);
          this.endIt(dethId);
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


}
