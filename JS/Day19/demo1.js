
function validation(){
  let gender=document.getElementsByName("gender");
  let genderSpan=document.getElementById("genderid")

  
  var Checkbox=document.getElementsByName("Checkbox");

  var technoSpan=document.getElementById("technoSpan");
  var cnt=0;


  var city=document.getElementById("city").value;

  
  if(gender[0].checked==false && gender[1].checked==false){
    // alert("Please Select Gender");
    genderSpan.innerHTML="** Please Select the Gender!!"
 }else{
   // alert("Thank You For Gender Selection!!!!");
 }

 for(let i=0;i<Checkbox.length;i++){
  if(Checkbox[i].checked==true){
      cnt++;
  }
}

if(cnt==0){
   // alert("Please Select at least one CheckBox!!!");
   technoSpan.innerHTML="**Please Select at least one Technology...."
}




if(city==="selectcity"){
  alert("Please Select one option from drop down box!!!");
}else{
  alert("Thank you form city Selection "+city);
}

}

function OnClick(){
  document.getElementById("genderid").innerHTML='';
}

function Feedbackcount(){
  let textareaHandle=document.getElementById("feedback").value;
  document.getElementById("counttag").innerHTML=textareaHandle.length;


}