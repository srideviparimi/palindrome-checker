function myCheckFunction(){
  let input=document.getElementById("text-input");
  let result=document.getElementById("result");
  let initialValue=input.value;

  if(initialValue==="")
    alert("Please input a value");

  let filteredString=initialValue.replace(/[^a-zA-Z0-9]/gi,"");
  let lowerString=filteredString.toLowerCase();
  let revString=[...lowerString].reverse().join("");
  
  if(lowerString===revString)
  result.innerHTML=`${initialValue} is a palindrome`;
  else
  result.innerHTML=`${initialValue} is not a palindrome`;
  }