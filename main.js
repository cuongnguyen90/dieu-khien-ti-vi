let Remote = function () {

    this.code = new Array();
    this.volume = undefined;

}

Remote.prototype.changeChanel = function(){

}
Remote.prototype.volumeDown = function(television){
    if (television.volume == 0){
        alert("Mute !")
    }else {
        television.volume -= 1;
        console.log(television.volume);
    }
}
Remote.prototype.volumeUp = function(television){
    if (television.volume == 20){
        alert("Volume Max !")
    }else {
        television.volume += 1;
        console.log(television.volume);
    }
}
Remote.prototype.turnOnOfTv = function(television){
    if (television.status){
        television.status = false;

    }else{
        television.status = true;

    }
}
let Television = function () {
    this.chanel = undefined;
    this.volume = undefined;
    this.status = undefined;

}

Television.prototype.chanelChange = function () {

}
Television.prototype.changeVolume = function () {
    this.volume += 1
}
Television.prototype.turnOnOfTv = function () {
    if (this.status){
        this.status = false;

    }else {
        this.status = true;
    }
}
Television.prototype.switch = function(){
    if (this.status){
        return "OFF"
    }else {
        return "ON";
    }
}

let remote = new Remote();
remote.code = Array([1,'a'],[2,'b'],[3,'c'],[4,'d'],[5,'e'],[6,'g']);

let tivi = new Television();
tivi.status = false;
tivi.volume = 5;

function initRemote() {

    let _remote = document.createElement('div');
    _remote.id = 'remote';
    _remote.style.width = "200px";
    _remote.style.height = "400px";
    _remote.style.border ="1px solid #ccc";
    _remote.style.margin = "auto";
    document.body.appendChild(_remote);

    let _control = document.createElement('div');
    _control.style.width = "100%";
    _control.style.marginTop = "50px";
    _remote.appendChild(_control);

    let _power = document.createElement('input');
        _power.id = "power";
        _power.style.width = "40px";
        _power.style.height = "40px";
        _power.style.backgroundColor = "red";
        _power.setAttribute('type','button');
        _power.style.borderRadius = "8px";
        _power.setAttribute('value',tivi.switch());
        _power.addEventListener('click',turnOffTv)
        _remote.appendChild(_power);


    let _volumeup = document.createElement('input');
    _volumeup.id ="_volumeup";
    _volumeup.setAttribute('type','button');
    _volumeup.setAttribute('value','UP');
    _volumeup.addEventListener('click',remoteVolumeUp);
    _remote.appendChild(_volumeup);

    let _volumedown = document.createElement('input');
    _volumedown.id ="_volumedown";
    _volumedown.setAttribute('type','button');
    _volumedown.setAttribute('value','DOWN');
    _volumedown.addEventListener('click',remoteVolumeDown);
    _remote.appendChild(_volumedown);



    for (i = 0 ;i < remote.code.length ; i ++){

        let _button = document.createElement('input');
        _button.className ="_chanel";
        _button.setAttribute('type','button');
        _button.setAttribute('value',remote.code[i][0]);
        _button.style.width = "55px";
        _button.style.height = "50px";
        _button.style.borderRadius = "10px";
        _button.style.margin = "5px 5px";
        _button.style.border ="1px solid #ccc";
        _button.style.cssFloat ="left";

        _control.appendChild(_button);

    }


}

function initTv() {
    let _tivi = document.createElement('div');
    _tivi.id = "tivi";
    _tivi.style.width = "600px";
    _tivi.style.height ="300px";
    _tivi.style.border = "1px solid #ccc";
    _tivi.style.margin = "auto";
    _tivi.style.marginBottom = "20px";

    tivi.status ? _tivi.style.backgroundColor = "lime" : _tivi.style.backgroundColor ="red";

    document.body.appendChild(_tivi);


    for (j = 0 ; j < tivi.volume;j++){
        let _volume = document.createElement('div');
        _volume.style.width = "20px";
        _volume.style.height = "10px";
        _volume.style.backgroundColor ="yellow";
        _volume.style.cssFloat = "right";
        _volume.style.border = "1px solid #ccc"
        _tivi.appendChild(_volume);
    }
}

function initVolume() {
    document.getElementById('tivi').innerHTML = "";
    for (j = 0 ; j < tivi.volume;j++){
        let _volume = document.createElement('div');
        _volume.style.width = "20px";
        _volume.style.height = "10px";
        _volume.style.backgroundColor ="yellow";
        _volume.style.cssFloat = "right";
        _volume.style.border = "1px solid #ccc"
        document.getElementById('tivi').appendChild(_volume);
    }
}



function remoteVolumeUp() {
    remote.volumeUp(tivi);
    initVolume();
}
function remoteVolumeDown() {
    remote.volumeDown(tivi);
    initVolume();
}

function turnOffTv() {
    let display = document.getElementById('tivi');
        remote.turnOnOfTv(tivi);
        document.getElementById('power').value = tivi.switch();
        tivi.status ? display.style.backgroundColor = "lime" : display.style.backgroundColor = "red"

}




function init() {

    initTv();
    initRemote();
    //console.log(remote.code.length);
}