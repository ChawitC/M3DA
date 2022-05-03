var counter = 0;

$(document).ready(function () {

    selectPage();
    selectModel();

    function selectPage() {

        $('#home').show();
        $('#about').hide();
        $('#models').hide();
        $('#interaction').hide();
        $('#cokeDescription').hide();
        $('#spriteDescription').hide();
        $('#pepperDescription').hide();


        $('#navHome').click(function () {
            $('#home').show();
            $('#about').hide();
            $('#models').hide();
            $('#interaction').hide();
            $('#cokeDescription').hide();
            $('#spriteDescription').hide();
            $('#pepperDescription').hide();
        });

        $('#navAbout').click(function () {
            $('#home').hide();
            $('#about').show();
            $('#models').hide();
            $('#interaction').hide();
            $('#cokeDescription').hide();
            $('#spriteDescription').hide();
            $('#pepperDescription').hide();
        });

        $('#navModels').click(function () {
            $('#home').hide();
            $('#about').hide();
            $('#models').show();
            $('#interaction').show();
            $('#cokeDescription').show();
            $('#spriteDescription').hide();
            $('#pepperDescription').hide();
        });
        $('#navModels2').click(function () {
            $('#home').hide();
            $('#about').hide();
            $('#models').show();
            $('#coke').show();
            $('#sprite').hide();
            $('#pepper').hide();
            $('#interaction').show();
            $('#cokeDescription').show();
            $('#spriteDescription').hide();
            $('#pepperDescription').hide();
        });
        $('#navModels3').click(function () {
            $('#home').hide();
            $('#about').hide();
            $('#models').show();
            $('#coke').hide();
            $('#sprite').show();
            $('#pepper').hide();
            $('#interaction').show();
            $('#cokeDescription').hide();
            $('#spriteDescription').show();
            $('#pepperDescription').hide();
        });
        $('#navModels4').click(function () {
            $('#home').hide();
            $('#about').hide();
            $('#models').show();
            $('#coke').hide();
            $('#sprite').hide();
            $('#pepper').show();
            $('#interaction').show();
            $('#cokeDescription').hide();
            $('#spriteDescription').hide();
            $('#pepperDescription').show();
        });
    }

    function selectModel() {

        $('#navCoke').click(function () {
            $('#coke').show();
            $('#sprite').hide();
            $('#pepper').hide();
            $('#interaction').show();
            $('#cokeDescription').show();
            $('#spriteDescription').hide();
            $('#pepperDescription').hide();
        });

        $('#navSprite').click(function () {
            $('#coke').hide();
            $('#sprite').show();
            $('#pepper').hide();
            $('#interaction').show();
            $('#cokeDescription').hide();
            $('#spriteDescription').show();
            $('#pepperDescription').hide();
        });

        $('#navPepper').click(function () {
            $('#coke').hide();
            $('#sprite').hide();
            $('#pepper').show();
            $('#interaction').show();
            $('#cokeDescription').hide();
            $('#spriteDescription').hide();
            $('#pepperDescription').show();
        });
    }

});


/*function swap(selected) {
   //initialize, dont display all-->
    document.getElementById('home').style.display = 'none';
    document.getElementById('coke').style.display = 'none';
    document.getElementById('sprite').style.display = 'none';
    document.getElementById('pepper').style.display = 'none';
    //<!--initialize, dont display all-- >
    document.getElementById(selected).style.display = 'block';
}*/

// stylings are based on Brand's colour scheme
function changeLook() {
    counter += 1;
    switch (counter) {
        case 1:
            document.getElementById('body').style.backgroundColor = 'rgba(0,152,71,1)';
            document.getElementById('header').style.backgroundColor = 'rgba(23,85,141,1)';
            document.getElementById('footer').style.backgroundColor = 'rgba(23,85,141,1)';
            break;
        case 2:
            document.getElementById('body').style.backgroundColor = 'rgba(207,64,55,1)';
            document.getElementById('header').style.backgroundColor = 'rgba(123,0,43,1)';
            document.getElementById('footer').style.backgroundColor = 'rgba(123,0,43,1)';
            break;

        case 3:
            document.getElementById('body').style.backgroundColor = 'grey';
            document.getElementById('header').style.backgroundColor = 'black';
            document.getElementById('footer').style.backgroundColor = 'black';
            counter = 0;
            break;

    }
}
function changeBack() {
    document.getElementById('body').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    document.getElementById('header').style.backgroundColor = 'rgba(175,0,0,1)';
    document.getElementById('footer').style.backgroundColor = 'rgba(175,0,0,1)';
}