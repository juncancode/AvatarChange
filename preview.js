/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/
// 5a
//var num = 0;
function createFace() {
    
    var newDiv = document.createElement("div");
    //num++;
    //newDiv.id = "newDiv" + num;
    newDiv.style.backgroundColor = preview.style.backgroundColor;
    newDiv.id = "newDiv";
    newDiv.style.width = 100 + "px";
    newDiv.style.height = 100 + "px";
    newDiv.style.position= "relative";
    newDiv.style.display = "inline-block";
    newDiv.style.bo
    disP.appendChild(newDiv);
    
    var newHair = document.createElement("img");
    newHair.src = hair.src;
    newHair.style.position = "absolute";
    newHair.className = "items";
    newHair.style.width = 60 + "%";
    newHair.style.top = 0 + "%";
    newDiv.appendChild(newHair);
    
    var newEyes = document.createElement("img");
    newEyes.src =  eyes.src;
    newEyes.className = "items";
    newEyes.style.width = 20 + "%";
    newEyes.style.top = 40 + "%";
    newDiv.appendChild(newEyes);
    
    var newNose = document.createElement("img");
    newNose.src = nose.src;
    newNose.className = "items";
    newNose.style.width = 20 + "%";
    newNose.style.top = 55 + "%";
    newDiv.appendChild(newNose);
    
    var newMouth = document.createElement("img");
    newMouth.src = mouth.src;
    newMouth.className = "items";
    newMouth.style.width = 20 + "%";
    newMouth.style.top = 75 + "%";
    newDiv.appendChild(newMouth);

}
// 5a
function randomFace() {
     // Random Images
    var ImgNum1 = Math.round(Math.random() * 2) + 1;
    var ImgNum2= Math.round(Math.random() * 2) + 1;
    var ImgNum3 = Math.round(Math.random() * 2) + 1;
    var ImgNum4 = Math.round(Math.random() * 2) + 1;
    
    hair.src = "img/hair"+ImgNum1+".png"; 
    eyes.src = "img/eyes"+ImgNum2+".png";
    nose.src = "img/nose"+ImgNum3+".png";    
    mouth.src = "img/mouth"+ImgNum4+".png";
    
    // Random BackgroundColor
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    
    preview.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    
    // Range/Number Value
    Range1 = document.getElementById("range1");
    Range2 = document.getElementById("range2");
    Range3 = document.getElementById("range3");
    Range4 = document.getElementById("range4");
    
    var rnValue1 = Math.round(Math.random() * 70);
    var rnValue2 = Math.round(Math.random() * 40);
    var rnValue3 = Math.round(Math.random() * 30);
    var rnValue4 = Math.round(Math.random() * 35);
    
    hair.style.width= rnValue1 + "px";
    eyes.style.width= rnValue2 + "px";
    nose.style.width= rnValue3 + "px";
    mouth.style.width= rnValue4 + "px";
    
    Range1.value = rnValue1;
    Range2.value = rnValue2;
    Range3.value = rnValue3;
    Range4.value = rnValue4;
}

