function myfunc(){
    var txt = document.getElementById('demo').innerHTML;
    console.log(txt);
    if(txt == "A Paragraph"){
       document.getElementById('demo').innerHTML = "Paragraph changed";   
    }
    else{
        document.getElementById('demo').innerHTML = "A Paragraph";
    }
  
    console.assert("hi")
}