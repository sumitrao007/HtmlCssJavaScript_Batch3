
function alertdialog(){
  console.log("Alert dialog called...");
  alert("Alert dialog called....")
}

function promptdialog(){
  let strname=prompt("Enter the name..")
  // alert(strname);


  document.write(strname);

}

function confirmdilog(){
  let res=confirm("Do you want install our software/Plugin");
  console.log(res)

    if(res){
      //ur logic
      alert("Thank You....")
    }else{
      alert("Visit again....")
    }


}