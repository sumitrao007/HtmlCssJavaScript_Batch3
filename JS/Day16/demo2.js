
let a=[];
//1 using push & pop method
//2 using splice function

//1 using push & pop method
// It works on LIFO => Last in first out 

// a.push(45);
// console.log(a);
// a.push(5,100,8);
// console.log(a);
// let temp=a.pop();
// console.log("Poped data is "+temp)
// console.log(a);

//2 using splice function

// let a1=[22,3,4,5,77];
// console.log(a1)
// a1.splice(1,0,100);
// console.log(a1);
// a1.splice(3,1);
// console.log(a1);
// a1.splice(1,2);
// console.log(a1);
// a1.splice(1,1,50);
// console.log(a1);

//Slice method
// It is copy a section of data from array 
let a2=[44,55,7,8,9,10,15,20,21,75];
// let res=a2.slice(2,6);
// console.log("Original data "+a2);
// console.log("Copied data "+res);
// let res1=a2.slice(3);
// console.log("Copied data "+res1);

//map function
// element by element operation then u go for map function

let a3=[2,3,4,5,6];

let resdata=a3.map((myvalue)=>{
  return (myvalue*myvalue)
})

console.log("Original data "+a3);
console.log("Resultant array "+resdata)

//filter => Explore yourself

