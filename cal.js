function dis(val){
    const display=document.getElementById('chiffre')
    display.innerText += val
}

function sol(){
    const display=document.getElementById('chiffre')
    let x = display.innerText
    let y=eval(x)
    display.innerText=y
}

function clr(){
    const display=document.getElementById('chiffre')
    display.innerText = ""
}

function m(){
    const display=document.getElementById('chiffre')
    const display1=document.getElementById('chiffre1')
    display1.innerText = display.innerText
}

function rm(){
    const display=document.getElementById('chiffre')
    const display1=document.getElementById('chiffre1')
    display.innerText += display1.innerText
}

function cm(){
    const display1=document.getElementById('chiffre1')
    display1.innerText="0"
}

function del(){
    const display=document.getElementById('chiffre')
    display.innerText=display.innerText.slice(0,-1)
}

function x2(){
    const display=document.getElementById('chiffre')
    display.innerText=Math.pow(display.innerText,2)
}

const themeBtn=document.querySelector('.dark')
const principale=document.querySelector('.principale')
const affichage=document.querySelector('.affichage')
const line2=document.querySelector('.line2')

let noir = true
themeBtn.onclick=()=>{
    principale.classList.toggle('noir')
    themeBtn.classList.toggle('active')
    affichage.classList.toggle('noir')
    line2.classList.toggle('bas')
    noir= !noir
}
