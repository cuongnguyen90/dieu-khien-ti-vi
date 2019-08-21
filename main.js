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
        return television.status = false;
        return "ON";
    }else{
        return television.status = true;
        return "OFF";
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
        return "OFF";
    }else {
        this.status = true;
        return "ON";
    }
}

let remote = new Remote();
remote.code = Array([1,'a'],[2,'b'],[3,'c'],[4,'d'],[5,'e'],[6,'g']);

let tivi = new Television();
tivi.status = "ON";
tivi.volume = 1;

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
    _control.style.marginTop = "200px";
    _remote.appendChild(_control);

    let _power = document.createElement('input');
        _power.style.width = "40px";
        _power.style.height = "40px";
        _power.style.backgroundColor = "red";
        _power.setAttribute('type','button');
        _power.style.borderRadius = "8px";
        _power.setAttribute('value',tivi.status);
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
    _volumedown.addEventListener('click',remoteVolumDown);
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

function remoteVolumeUp() {
    remote.volumeUp(tivi);
}
function remoteVolumDown() {
    remote.volumeDown(tivi);
}
function turnOnTv() {

}
function init() {
    initRemote();
    console.log(remote.code.length);
}