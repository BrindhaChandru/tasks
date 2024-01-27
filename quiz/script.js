var paris = document.getElementById("paris")
var marss = document.getElementById("marss")
var bluewhale = document.getElementById("bluewhale")
var btn = document.getElementById("btn")
var scoree = document.getElementById("scoree")
var container = document.querySelectorAll("container")
var score = 0;
var paris1 = "Paris";
var marss1 = "Mars";
var bluewhale1 = "BlueWhale"

btn.addEventListener("click",function(){
    if(paris.value == paris1){
        score = score + 1;
        scoree.textContent = "The score is :" +score;
    }
    else{
        score = score - 1;
        scoree.textContent = "The score is :" +score;
    }
    con
})
