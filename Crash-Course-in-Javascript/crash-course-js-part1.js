person1 = {
    name: 'John',
    age: '32'
};

//person2 = person1;

//person2.name= 'Tom'


console.log(person1.name);

person3 = Object.assign({}, person1) //takes all of the properties of person1 to person3
person3.name = 'Jill'

console.log(person1.name) //john will be printed

husband={
    name: 'Danial',
    child: {
        name: 'Ruth',
        sex: 'Female',
        age: 1
    }
}
//shallow copy 
//wife = Object.assign({}, husband);
wife.name = 'Shea';
wife.child.name = 'George';
console.log(husband.child.name);//prints george
//sallow copies only copy referneces to nested objects

//deep copy
wife = JSON.parse(JSON.stringify(husband)) //prints ruth 


superClass = {
    language: 'Javascript',
    version: 2.1,
}

subClass = {
    fork : 'UVAscript',
}
Object.setPrototypeOf(subClass, superClass);
//all of properties of superClass avaiable to subClass
console.log(subClass.language) //prints javascript
console.log(subClass.fork + ' ' + subClass.language)//prints uvaScript Javascript

oneUp = Object.getPrototypeOf(subClass) //returns superClass
oneUpList = Object.getOwnPropertyNames(oneUp);
console.log(oneUpList) // language , version 

twoUp = Object.getPrototypeOf(oneUp) //prototype that super class inhertes from 
twoUpList = Object.getOwnPropertyNames(twoUp) //root, shows contructor for root class


delete subClass.fork //deletes property
delete subClass.language //no errors but wont delete from superclass


for(prop in subClass){
    console.log(prop)
} //shows all properties of subclass(language, version, fork)


superClass = {
    language: 'Javascript',
    version: 2.1,
}

subClass = {
    fork : 'UVAscript',
}
subSubClass - {
    fork: 'UVAsubscript',
}

//subSubClass -> subClass -> superClass
Object.setPrototypeOf(subClass, superClass);
Object.setPrototypeOf(subSubClass, subClass);
//console.log(subSubClass.fork) //UVAsubscript

delete subSubClass.fork
console.log(subSubClass.fork) //UVAscript

var APP = {} //empty object

APP.nestClass={
    prop1: 'nestedClass'
}
APP.nestClass2={
    prop1: 'NestedClass'
}

var APP2  = {} 

APP2.nestClass = {
    prop1: 'nestedClass' //wont interact with APP1 because nested in this APP2
}

