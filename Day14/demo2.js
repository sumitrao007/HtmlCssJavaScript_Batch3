// add1();
// Basic user defined function type
// 1 function without parameter & without Return type
// 2 function with parameter & without Return type
// 3 function without parameter & with Return type
// 4 function with parameter & with Return type

// 1 function without parameter & without Return type
function add1(){
  console.log("U r in Function type 1 ");
}

// 2 function with parameter & without Return type
  function add2(a,b){
    console.log("Addition is "+(a+b))
  }

  // add2(2,3)
  // 3 function without parameter & with Return type
  function add3(){
    return (5+5);
  }

  let temp=add3();
  // console.log("Temp value is "+temp)


  // 4 function with parameter & with Return type

  function add4(a,b){
    return (a+b);
  }

  let res=add4(6,6);
  console.log("Result is "+res);




