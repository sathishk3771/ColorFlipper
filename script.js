const Code=document.getElementById("Hex-code")
const Button=document.getElementById("btn-click")
const contain=document.getElementById("container")
const HexCode=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


Button.addEventListener('click',changeBackgroundColor)


function changeBackgroundColor(){
let Hex='#'
for(let i=1;i<=6;i++){
    Hex=Hex+ChangingColor()
}
contain.style.backgroundColor=Hex
Code.innerHTML=Hex;

}

function ChangingColor(){
    let RandomColor=Math.floor(Math.random()*16)
    return HexCode[RandomColor]
}
