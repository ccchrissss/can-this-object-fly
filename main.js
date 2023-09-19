class Journey {

  constructor(object, crew, balloons) {
    this.object = object
    this.crew = crew
    this.balloons = balloons
  }

  isPossible() { 
    return this.object.weight + (this.crew * 80) < this.balloons * 4.8 / 1000 
    // return (this.balloons*0.0048-(this.object.weight+(this.crew*80)))>=0
  }
  
}

let pirateShip = {'weight': 15000}
let upTheStreet = new Journey(pirateShip, 10, 50000)
console.log(upTheStreet.isPossible())


// parameters: object ("weight": #), crew (# 80 kg crew), balloons (# ballons that lift 4.8 grams each)
// return: boolean
// e.g. let pirateShip = {'weight': 15000}
// let upTheStreet(pirateShip, 10, 50000)
// console.log(upTheStreet.isPossible())
// results in false

// make a method this.isPossible() 
// if the sum of object.weight and (crew times 80) is greater than (balloons times 4.8 divided by 1000) then return false
// if the sum of object.weight and (crew times 80) is less than (balloons times 4.8 divided by 1000) then return true