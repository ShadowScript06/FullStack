function add (a,b){
    return a+b;
}

console.log(add(2,3));

// curred 
function add2(a){
    return function (b){
        return a+b;
    }
}

console.log(add2(2)(3));


function add3(a){
    return function(b){
        return function (c){
            return a+b+c;
        }
    }
}

console.log(add3(1)(2)(3));

function add4(a) {
  console.log("a:", a);

  return function (b) {
    console.log("b:", b);

    return function (c) {
      console.log("c:", c);
      return a + b + c;
    };
  };
}

console.log( add4(1)(2)(3));

const add5 = a => b => c => a + b + c;
console.log(add5(1)(2)(3));


function mutiply(a){
    return function (b){
        return a*b;
    }
}

console.log(mutiply(2)(4));


function sum(a,b,c){
    return a+b+c;
}

console.log(sum.length); // lentgh =no of args


