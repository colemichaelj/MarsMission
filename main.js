'use strict';

let assert = require('assert');

let jobTypes = {
pilot: 'DOE',
mechanic: 'Repair Ship',
commander: 'Main Ship',
programmer: 'Any Ship!'
};
// need tp craete a Crewmember class with name, job, specialSkill, ship to == null
class CrewMember {
constructor(name, job, specialSkill){
this.name = name;
this.job = job;
this.specialSkill = specialSkill;
this.ship = null;
}

enterShip(ship)
{
this.ship = ship;
ship.crew.push(this);
}
}
//create a ship class with a name, type and ability as well as a empty crew.
class Ship { 
constructor(name, type, ability){
    this.name = name;
    this.type = type;
    this.ability = ability;
    this.crew = [];
    
}

missionStatement(){
    //if crew. length == 0 it must return it cannot perform mission
    if( this.crew.length == 0){
    return "Can't perform a mission yet";
      //if the crew is greater than 0 is will return the ships abillity.
    } else {
      //Im guessing this is the part that is broken in the code. not sure why??
    return this.ability;
    }

}
}
//need to create a ship for mav as well as hermes
let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
//need to create two crewmembers 
 let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
 let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
 // utilizing the entership()method for both crew members into different ships
crewMember1.enterShip(mav);
crewMember2.enterShip(hermes);
//making sure the entership() method was successful
console.log(mav);
console.log(hermes);

//tests
if (typeof describe === 'function'){
describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
    var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
    assert.equal(crewMember1.name, 'Rick Martinez');
    assert.equal(crewMember1.job, 'pilot');
    assert.equal(crewMember1.specialSkill, 'chemistry');
    assert.equal(crewMember1.ship, null);
    });

    it('can enter a ship', function(){
    let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
    let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
    crewMember1.enterShip(mav);
    assert.equal(crewMember1.ship, mav);
    assert.equal(mav.crew.length, 1);
    assert.equal(mav.crew[0], crewMember1);
    });
});

describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
    let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
    assert.equal(mav.name, 'Mars Ascent Vehicle');
    assert.equal(mav.type, 'MAV');
    assert.equal(mav.ability, 'Ascend into low orbit');
    assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
    let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
    let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
    let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
    let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
    assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
    assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

    crewMember1.enterShip(mav);
    assert.equal(mav.missionStatement(), "Ascend into low orbit");

    crewMember2.enterShip(hermes);
    assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}