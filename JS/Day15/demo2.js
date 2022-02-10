
//Array 

// array is growable & shrinkable
let a1=[2,3,5,6];
let a2=[2.5,'sumit',true,9];
let a3=[];

// for(let i=0;i<a1.length;i++){
//   console.log("Value of a1 is "+a1[i])
// }

// console.log("value of array is "+a1);
// console.log("value of array is "+a1.join('$'));
// console.log("value of array is "+a1.join(' # '));

//Foreach


a1.forEach((kuchbhi,j,temp)=>{
  console.log("value is "+kuchbhi+" Index is "+j)
  console.log(temp);
})