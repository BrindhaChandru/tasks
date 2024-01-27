        var para1 = document.getElementById("para")
        var input = document.getElementById("inputBox")
        var btn = document.getElementById("btn")
            
        console.log(input.value)
        btn.addEventListener("click",function(){
            if(para1.textContent == input.value){
                alert("Captcha verified successfully..!")
            }
            else{
                alert ("captcha verification failed,Please Try Again Later..")
            }
        })