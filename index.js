let form = document.querySelector("#onepiece")
let result = document.querySelector("#result")

form.addEventListener('submit',funcsubmit) 




function funcsubmit(e){
    e.preventDefault()
    let luffy = document.getElementById('luffy')
    let zoro = document.getElementById('zoro')
    let shanks = document.getElementById('shanks')

    if(luffy.checked){
        result.innerHTML = `<h1>Wow Luffy I,m Shocked :)</h1>`
    }else if(zoro.checked){
        result.innerHTML = `<h1>You Know This Job</h1>`
    }else if(shanks.checked){
        result.innerHTML = `<h1>I know I'm in love, I should have opened the button :D</h1>`
    }
    
   
}