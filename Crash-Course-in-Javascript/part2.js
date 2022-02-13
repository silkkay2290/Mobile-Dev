class wahoo{
    constructor(leadership, grit){// overrrides default constructor
        this.leadership = leadership;
        this.grit = grit
    }
}

jil = new wahoo(0.7, 0.9)
console.log(jill.grit) //prints 0.9

console.log(jill.toString()) //Object Obeject


tribe =class {
    constructor(creativity, community){
        this.creativity = creativity;
        this.community = community;
    }
    //Getter
    get average() {
        return this.calAverage();
    }


    //Method
    calAverage() {
        return((this.creativity + this.community)/ 2); 
    }
}
griffin = new tribe(0.9, 0.7)
console.log(griffin.community) //0.7

console.log(griffin.calAverage) //prints function calAverage
console.log(griffin.average)//prints average 

class wahoo {
    constructor(leadership, grit){
        this.leadership = leadership;
        this.grit = grit;
    }
    static compareLeadershio(wahoo1, wahoo2){
        return wahoo1.leadership === wahoo2.leadership
    }
}
jill = new wahoo(0.8, 1)
john = new wahoo(0.8,0.4)

console.log(wahoo.compareLeadershio(jill, john))//true
//cannot do jill.compareLeader

class Animal {
    constructor(name,age){
        this.name =name 
        this.age = age
    }

    getOlder(years, factor){
        this.age += years*factor
    }
}

class Dogs extends Animal {
    constructor(name,age,species){
        super(name,age) //have to call super since it extends animal 
        this.species = species
    }
    getOlder(years){
        super.getOlder(years, 7)
    }
}

rex = new Dogs('rex', 0)
rex = new Dogs('rex', 0, 'german shepherd')
rex.getOlder(1)
console.log(rex.age) //7
console.log(rex.species) //prints german shepherd

class Person{
    speak() {
        console.log('Hello World')
    }
}
class Father extends Person{
    constructor(name){
        super()
        this.name = name
    }
}

daniel - new Father('Daniel')
console.log(daniel.speak) //hello world

career = function(last, increase){
    return last*(1+increase)
}

wahoo = {
    skill: 0,
    grow: function() {
        console.log('growing')
    }
}

console.log(wahoo.grow) //Function: grow
console.log(wahoo.grow()) //growing


sum = function() {
    let i, sum = 0
    for(i = 0; i < arguments.length; i++){ //arguements is whatever is passed in and any amount
        sum += arguments[i];
    }
    return sum
}
result - sum(1,2,3)
console.log(result)
result2- sum(2,3,4,5)
console.log(result2)

wahoo = {
    skill: 0,
    grow: function() {
        console.log('growing')
        skill = 12
        return(this.skill) //return 0 
    }
}

console.log(wahoo.grow()) //0 referes to top level

grow = function() {
    console.log('growing')
    skill = 12
    return(this.skill)
}

console.log(grow()) //growing 12
