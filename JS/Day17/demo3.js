
function onAddition(){
  let inputnum1=document.getElementById("num1");
  let inputnum2=document.getElementById("num2")

  let num1=parseInt( inputnum1.value);
  let num2=parseInt(inputnum2.value);

  let res=num1+num2;
  console.log(res)

  let divtag=document.getElementById("mydiv");

  divtag.innerHTML="<h2> Addition is "+res+"</h2>";


}