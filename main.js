// const l = console.log

// const a = 1;
// const b = 'dog'

// // l('a -->', a)

// const func1 = function () {
//     l('arguments --> ', arguments)
// }

// func1(a)


// const func2 = function () {
//     l('arguments --> ', arguments)
//     l('arguments.callee --> ', arguments.callee)
//     l('arguments.callee.caller --> ', arguments.callee.caller)
// }

// func2();


// let x=3
// let y=5
// la()        // y --> dog

// let a = x*y
// la()        //x --> 3 ; y --> 5 ; a --> 15



function la(){
    //do something...
}


var x = 12;

function l(input) {
    //input = 'x'
    console.log( input + ' --> ' + eval(input))
    console.log(`${input} --> ${eval(input)}`);
    // console.log('typeof --> ', typeof(console.trace()))
    // console.log('trace --> ', console.trace())
}

function br() {
    console.log('**********')
}

l('x');
br();


