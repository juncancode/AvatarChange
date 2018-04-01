// Level 2a
var preview = document.getElementById("preview");
var colorChange = document.getElementById("color");

               
colorChange.addEventListener("change", function(){
    preview.style.backgroundColor = colorChange.value;
})

// Level 2b
document.getElementById("number").addEventListener("click", function(){
    Range1 = document.getElementById("range1");
    Range2 = document.getElementById("range2");
    Range3 = document.getElementById("range3");
    Range4 = document.getElementById("range4");
    
    Range1.type = "number";
    Range2.type = "number";
    Range3.type = "number";
    Range4.type = "number";
});

document.getElementById("range").addEventListener("click", function(){
    Range1 = document.getElementById("range1");
    Range2 = document.getElementById("range2");
    Range3 = document.getElementById("range3");
    Range4 = document.getElementById("range4");
    
    Range1.type = "range";
    Range2.type = "range";
    Range3.type = "range";
    Range4.type = "range";
});

// Level 2c 

document.getElementById("range1").addEventListener("change",function(){
    console.log("working");
    hair.style.width = Range1.value + "%";
    
});

document.getElementById("range2").addEventListener("change",function(){
    //console.log(alert("hi"));
    eyes.style.width = Range2.value + "%";
    
});

document.getElementById("range3").addEventListener("change",function(){
    //console.log(alert("hi"));
    nose.style.width = Range3.value + "%";
    
});

document.getElementById("range4").addEventListener("change",function(){
    //console.log(alert("hi"));
    mouth.style.width = Range4.value + "%";
    
});

// Level 3 
var num = 1;
document.getElementById("hair").addEventListener("click",function(){
    //console.log(alert("hi"));
    num += 1;
    
    if(num >= 4){
        num = 1;
    }
    hair.src = "img/hair"+num+".png";
});

document.getElementById("eyes").addEventListener("click",function(){
    //console.log(alert("hi"));
    num += 1;
    
    if(num >= 4){
        num = 1;
    }
    eyes.src = "img/eyes"+num+".png";
});


document.getElementById("nose").addEventListener("click",function(){
    //console.log(alert("hi"));
    num += 1;
    
    if(num >= 4){
        num = 1;
    }
    nose.src = "img/nose"+num+".png";
});


document.getElementById("mouth").addEventListener("click",function(){
    //console.log(alert("hi"));
    num += 1;
    
    if(num >= 4){
        num = 1;
    }
    mouth.src = "img/mouth"+num+".png";
});


//Level 4a 
var disP = document.getElementById("display");

document.getElementById("plus").addEventListener("click",function(){
  //console.log(alert("hi"));
    createFace();

});

// Level 4b 
document.getElementById("random").addEventListener("click",function(){
    
    randomFace();
});

// Level 6 
var timer1 = null;
var timer2 = null;
document.getElementById("auto").addEventListener("click",function(){
  timer1 = setInterval(createFace, 500); 
  timer2 = setInterval(randomFace, 500);    
    
});

document.getElementById("stop").addEventListener("click",function(){

   clearInterval(timer1);
   clearInterval(timer2);
});

// Bonus 

disP.addEventListener("click", newDiv => {
 if (newDiv.target !== disP) newDiv.target.remove();

  
});