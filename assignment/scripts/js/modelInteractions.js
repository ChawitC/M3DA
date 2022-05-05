//adapted from example code 'benskitchen.com'

var spinning = false;
var speed = 1;

function spin(speed) {
   
    if (spinning) {  // The animation needs to be stopped first before changing to another animation
    spinning = false;
    document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
    document.getElementById('model__RotationTimer2').setAttribute('enabled', spinning.toString());
    document.getElementById('model__RotationTimer3').setAttribute('enabled', spinning.toString());
    }
    spinning = true;
    document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
    document.getElementById('model__RotationTimer').setAttribute('cycleInterval', speed);
    document.getElementById('model__RotationTimer2').setAttribute('enabled', spinning.toString());
    document.getElementById('model__RotationTimer2').setAttribute('cycleInterval', speed);
    document.getElementById('model__RotationTimer3').setAttribute('enabled', spinning.toString());
    document.getElementById('model__RotationTimer3').setAttribute('cycleInterval', speed);
}


function stopRotation() {
    spinning = false;
    document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
    document.getElementById('model__RotationTimer2').setAttribute('enabled', spinning.toString());
    document.getElementById('model__RotationTimer3').setAttribute('enabled', spinning.toString());
}
//simple counter logic that will allow manual switching between modes
//Poly = 0
//Wireframe = 1
//Vertex = 2
var currentmode = 0;

function poly() {
    var e = document.getElementById('model');
    var f = document.getElementById('model2');
    var g = document.getElementById('model3');

    if (currentmode == 0) { }
    else if (currentmode == 1) { //each toggles 4 times
        for (var i = 0; i<4; i++){
        e.runtime.togglePoints(true);
        f.runtime.togglePoints(true);
        g.runtime.togglePoints(true);
        }
    }
    else if (currentmode == 2) { //each toggles 2 times
        for (var i = 0; i<2; i++){
        e.runtime.togglePoints(true);
        f.runtime.togglePoints(true);
        g.runtime.togglePoints(true);
        }
    }
    currentmode = 0;
}

function wireframe() {
    var e = document.getElementById('model');
    var f = document.getElementById('model2');
    var g = document.getElementById('model3');

    if (currentmode == 1) { }
    else if (currentmode == 2) { //each toggles 4 times
        for (var i = 0; i<4; i++){
        e.runtime.togglePoints(true);
        f.runtime.togglePoints(true);
        g.runtime.togglePoints(true);
        }
    }
    else if (currentmode == 0) { //each toggles 2 times
        for (var i = 0; i<2; i++){
        e.runtime.togglePoints(true);
        f.runtime.togglePoints(true);
        g.runtime.togglePoints(true);
        }
    }
    currentmode = 1;
}

function vertex() {
    var e = document.getElementById('model');
    var f = document.getElementById('model2');
    var g = document.getElementById('model3');

    if (currentmode == 2) { }
    else if (currentmode == 0) { //each toggles 4 times
        for (var i = 0; i<4; i++){
        e.runtime.togglePoints(true);
        f.runtime.togglePoints(true);
        g.runtime.togglePoints(true);
        }
    }
    else if (currentmode == 1) { //each toggles 2 times
        for (var i = 0; i<2; i++){
        e.runtime.togglePoints(true);
        f.runtime.togglePoints(true);
        g.runtime.togglePoints(true);
        }
    }
    currentmode = 2;
}

var lightOn = true;

function headlight() {
    lightOn = !lightOn;
    document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
    document.getElementById('model__headlight2').setAttribute('headlight', lightOn.toString());
    document.getElementById('model__headlight3').setAttribute('headlight', lightOn.toString());
}

function cameraFront() {
    document.getElementById('model__CameraFront').setAttribute('bind', 'true');
    document.getElementById('model__CameraFront2').setAttribute('bind', 'true');
    document.getElementById('model__CameraFront3').setAttribute('bind', 'true');
}

function cameraBack() {
    document.getElementById('model__CameraBack').setAttribute('bind', 'true');
    document.getElementById('model__CameraBack2').setAttribute('bind', 'true');
    document.getElementById('model__CameraBack3').setAttribute('bind', 'true');
}

function cameraLeft() {
    document.getElementById('model__CameraLeft').setAttribute('bind', 'true');
    document.getElementById('model__CameraLeft2').setAttribute('bind', 'true');
    document.getElementById('model__CameraLeft3').setAttribute('bind', 'true');
}

function cameraRight() {
    document.getElementById('model__CameraRight').setAttribute('bind', 'true');
    document.getElementById('model__CameraRight2').setAttribute('bind', 'true');
    document.getElementById('model__CameraRight3').setAttribute('bind', 'true');
}

function cameraTop() {
    document.getElementById('model__CameraTop').setAttribute('bind', 'true');
    document.getElementById('model__CameraTop2').setAttribute('bind', 'true');
    document.getElementById('model__CameraTop3').setAttribute('bind', 'true');
}

function cameraBottom() {
    document.getElementById('model__CameraBottom').setAttribute('bind', 'true');
    document.getElementById('model__CameraBottom2').setAttribute('bind', 'true');
    document.getElementById('model__CameraBottom3').setAttribute('bind', 'true');
}