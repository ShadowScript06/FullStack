// Higher order function from scratch

function myMap(arr,callback){
    const result=[];

    for(let i=0; i<arr.length; i++){
        result.push(callback(arr[i]));
    }
    return result;

}

function double(number){
    return 2*number;
}

const doubled=myMap([1,2,3,4],double);

console.log(doubled);


// Use map to square array elements.

let arr=[1,2,3,4];

let newArr = arr.map((n)=>{
    return n*n;
})

console.log(newArr);

//Filter odd numbers using filter.
let oddArr=arr.filter((num)=>{
   return num%2==1;
})

console.log(oddArr);

//Sum array using reduce.
let sum= arr.reduce((sum,num)=>{
    return sum+num;
});

console.log(sum);

// Chain filter → map → reduce in one example.

const arr2=[5,10,15,20];

const ans=arr2.map((num)=>{
   return num*2;
}).filter((num)=>{
    return num>10;
}).reduce((sum,num)=>{
    return sum+num;
});

console.log(ans);