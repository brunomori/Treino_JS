const turnOn=document.getElementById('turnOn');
const turnOff=document.getElementById('turnOff');
const lamp=document.getElementById('lamp');


function LampOn(){
    document.getElementById("lamp").src="img/ligada.jpg"
  
}

function LampOff(){
    document.getElementById("lamp").src="img/desligada.jpg"
}


function LampQuebra(){
    document.getElementById("lamp").src="img/quebrada.jpg"

}

function nova(){
    document.getElementById("lamp").src="img/desligada.jpg"
    
}