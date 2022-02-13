/**
 * Promise.all()
 * returns a single Promise that resolves when all of the promises passed as an 
 * iterable have resolved or when the iterable contains no promises
 * it rejects with the reason if the first promise that rejects
 * 
 * 
 * looks through array finds the 1st that rejects then returns that promise
 * 
 * clear terminal --> cls
 * run js file --> node filename.js
 */

var p1 = Promise.resolve(3)

var p2 = 1337

var p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('foo')
    },100)
})

Promise.all([p1,p2,p3]).then(values =>{
    console.log(values)//prints values 3,1337,foo
})  

//arrays in JS

students =[
    {grade:93, name:'DeShea'},
    {grade:96, name:'Devin'},
    {grade: 90, name: "Phylicia"}
]

/*for (let i = 0; i<=students.length; i++){
    grades.push(students[i].grade)
} //instead use map

grades = []
*/
/**
 * 
 * MAP
 * 
 * applies some fuction to every value in the array in parallel
 * 
 * then get a new array with the function applied
 * 
 * 
 */


/*mapFunction = (student) => {
    return student.grade
}


grades = students.map(mapFunction) 
*/


//can slim this down to 

grades = students.map((student)=>{
    return student.grade * 1.01 //1% boost
})
console.log(grades) //prints 93,96,90


/**
 * 
 * FILTER
 * 
 * applied some function to every values in the array only 
 * keep values where function is true
 */
//example

filter91orAbove = (student) =>{
    if (student.grade >= 91){
        return true
    } else {
        return false
    }
}
topStudents = students.filter(filter91orAbove)//only returns objects with grade >= 91
/**
 * 
 * REDUCE
 * 
 * takes 2 parametes 
 * result is store bace in first parameter 
 * 
 * reduce to single
 * 
 * D +1
 * D + 1 + 2
 * final sum
 */

grades = students.map((student) => student.grade) //returns student.grade

/*reducer = (sum,grade) => {
    return sum+=grade
}*/
reducer = (highscorer,student) =>{
    if(highscorer.grade > student.grade){
        return highscorer
    }
    else {
        return student 
    }

}

//average= grades.reduce(reducer,0) / students.length
//average= grades.reduce((sum,grade)=> sum+=grade,0) / students.length
highscorer = students.reduce(reducer,0)
console.log(highscorer)
//console.log(average)

