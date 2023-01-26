const turnOnOff = document.querySelector('#turnOnOff');
const lamp = document.querySelector('#lamp');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
};

function lampOn (){
    if (!isLampBroken()){
    lamp.src = "IMG/ligada.jpg";
    } turnOnOff.textContent = "Desligar";
};

function lampOff (){
    if (!isLampBroken()){
        lamp.src = "IMG/desligada.jpg";
        } turnOnOff.textContent = "Ligar";
};

function lampBroken (){

    lamp.src = "IMG/quebrada.jpg";

};

function lampOnOff() {
    if (turnOnOff.textContent == "Ligar"){
    lampOn();
    
}else {
    lampOff();
    
}}

turnOnOff.addEventListener('click', lampOnOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
