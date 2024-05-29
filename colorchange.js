let changeBG = document.getElementById('btn')
changeBG.addEventListener('click' , (e)=>{
    let n = prompt("Enter your fevorate color = ")
    document.body.style.background = n
    if(n == ''){
        alert("please enter any color")
        let n = prompt("Enter your fevorate color = ")
    }
    else{
        confirm("are you sourse to change bg")
    }
})