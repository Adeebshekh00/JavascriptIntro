//stack(primitive) -> copy me change hoga .

// heap(non-primitive)-> reference me change hoga.

// To generate random values in a range 

//const min = 10
//const max = 20

//console.log(Math.floor(Math.random()*(max-min+1) + min))


// use of spread operator is very usefull in concatination of arrays. 

const arr = [1,2,3,[4,5],[6,[7,8]]]

const newarr = arr.flat(Infinity);
//console.log(newarr);


//console.log(Array.from({name: "Adeeb"}));

//Taking symbol as a object and printing it.

const symb = Symbol("key")

const obj = {
    [symb] : "mykey"
}

//console.log(obj);


//to Freeze the object Object.freeze(obj)

// assign multiple obj into a target object 
// const objtarget = Object.assign({},obj1,obj2,obj3)
          //or
// const obj3 = {...obj1,...obj2,...obj3}

//implicit return and explicit return 
// signifinace of single line return and multiline return in arrow function 
//use of curly braces and parenthesis.

// global execution context  and functional executable context lecture 25 is imp for interview perspective.