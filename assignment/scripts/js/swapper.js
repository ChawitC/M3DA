var counter = 0;
var bgcode = 0;

$(document).ready(function () {

    selectPage();
    selectModel();

    function selectPage() {

        $('#home').show();
        $('#about').hide();
        $('#models').hide();
        $('#galleryrow').hide();
        $('#cokeDescription').hide();
        $('#spriteDescription').hide();
        $('#pepperDescription').hide();


        $('#navHome').click(function () {
            $('#home').show();
            $('#about').hide();
            $('#models').hide();
            $('#galleryrow').hide();
            $('#cokeDescription').hide();
            $('#spriteDescription').hide();
            $('#pepperDescription').hide();
        });

        $('#navAbout').click(function () {
            $('#home').hide();
            $('#about').show();
            $('#models').hide();
            $('#galleryrow').hide();
            $('#cokeDescription').hide();
            $('#spriteDescription').hide();
            $('#pepperDescription').hide();
        });

        $('#navModels').click(function () {
            $('#home').hide();
            $('#about').hide();
            $('#models').show();
            $('#galleryrow').show();
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
            $('#galleryrow').show();
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
            $('#galleryrow').show();
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
            $('#galleryrow').show();
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
            $('#galleryrow').show();
            $('#cokeDescription').show();
            $('#spriteDescription').hide();
            $('#pepperDescription').hide();
        });

        $('#navSprite').click(function () {
            $('#coke').hide();
            $('#sprite').show();
            $('#pepper').hide();
            $('#galleryrow').show();
            $('#cokeDescription').hide();
            $('#spriteDescription').show();
            $('#pepperDescription').hide();
        });

        $('#navPepper').click(function () {
            $('#coke').hide();
            $('#sprite').hide();
            $('#pepper').show();
            $('#galleryrow').show();
            $('#cokeDescription').hide();
            $('#spriteDescription').hide();
            $('#pepperDescription').show();
        });
    }

});

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
            document.getElementById('body').style.backgroundColor = 'lightgrey';
            document.getElementById('header').style.backgroundColor = 'darkgrey';
            document.getElementById('footer').style.backgroundColor = 'darkgrey';
            counter = 0;
            break;

    }
}
function changeBack() {
    document.getElementById('body').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    document.getElementById('header').style.backgroundColor = 'rgba(175,0,0,1)';
    document.getElementById('footer').style.backgroundColor = 'rgba(175,0,0,1)';
}

//swapping background 3D image
function change3Dbg(bgcode) {
    if (bgcode == 0) {
        //document.getElementsByClassName('model3D').style.backgroundImage = "none"; 
        // targeting class doesn't work, so I had to seperate instances to different IDs
        document.getElementById('model3D1').style.backgroundImage = 'none';
        document.getElementById('model3D2').style.backgroundImage = "none";
        document.getElementById('model3D3').style.backgroundImage = "none";
    }
    else if (bgcode == 1) {
        document.getElementById('model3D1').style.backgroundImage = 'url(assets/images/site_images/blur_coke.png)';
        document.getElementById('model3D2').style.backgroundImage = 'url(assets/images/site_images/blur_coke.png)';
        document.getElementById('model3D3').style.backgroundImage = 'url(assets/images/site_images/blur_coke.png)';
    }
    else if (bgcode == 2) {
        document.getElementById('model3D1').style.backgroundImage = 'url(assets/images/site_images/blur_sprite.png)';
        document.getElementById('model3D2').style.backgroundImage = 'url(assets/images/site_images/blur_sprite.png)';
        document.getElementById('model3D3').style.backgroundImage = 'url(assets/images/site_images/blur_sprite.png)';
    }
    else if (bgcode == 3) {
        document.getElementById('model3D1').style.backgroundImage = 'url(assets/images/site_images/blur_pepper.png)';
        document.getElementById('model3D2').style.backgroundImage = 'url(assets/images/site_images/blur_pepper.png)';
        document.getElementById('model3D3').style.backgroundImage = 'url(assets/images/site_images/blur_pepper.png)';
    }
}