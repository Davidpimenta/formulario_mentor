var submit = document.getElementById('subscribe')
submit.addEventListener('click', subfunction)
var window1 = document.getElementById('subscribe-email')
var window2 = document.getElementById('subscribe-success')

function subfunction(){
    var email = document.getElementById('email')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1){
        var testetex = document.getElementById('erro-msg')
        testetex.style.display = 'block'
        email.style.borderColor = 'hsl(4, 100%, 67%)'
        email.style.backgroundColor = 'hsl(4, 100%, 67%, 30%)'
        email.style.color = 'hsl(4, 100%, 67%)'
    } else {
        window1.style.display = 'none'
        window2.style.display = 'block'
        var testetex = document.getElementById('erro-msg')
        testetex.style.display = 'none'
        email.style.borderColor = 'rgba(0, 0, 0, 0.425)'
        email.style.backgroundColor = 'white'
        email.style.color = 'hsl(234, 29%, 20%)'
        var msg_success = document.getElementById('msg-success')
        msg_success.innerHTML = " A confirmation email has been sent to " + "<strong>" + email.value + "</strong>" + ". Please open it and click the button inside to confirm your subscription."
    } 

}

 setInterval(function(){
   mudatela()
  }, 900)

function mudatela(){
    var telawidth = window.innerWidth
    var telaheight = window.innerHeight
    var illustratiion = document.getElementById('illustration')

    if(telawidth >= 768 && telaheight >= 600){
        illustratiion.src = 'imagens/illustration-sign-up-desktop.svg'
    } else {
        illustratiion.src = 'imagens/illustration-sign-up-mobile.svg'
    }
    
}
