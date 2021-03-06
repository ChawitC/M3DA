$(document).ready(function (){
    $.getJSON('./model/data.json', function (jsonObj) {
        console.log(jsonObj);

        //Get the home page main text data
        $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '</h2>');
        $('#subTitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
        $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');

        //Get the home page left column text data
        $('#title_left').html('<h2>' + jsonObj.pageTextData[1].title + '</h2>');
        $('#subTitle_left').html('<h3>' + jsonObj.pageTextData[1].subTitle + '</h3>');
        $('#description_left').html('<p>' + jsonObj.pageTextData[1].description + '</p>');

        //Get the home page centre column text data
        $('#title_centre').html('<h2>' + jsonObj.pageTextData[2].title + '</h2>');
        $('#subTitle_centre').html('<h3>' + jsonObj.pageTextData[2].subTitle + '</h3>');
        $('#description_centre').html('<p>' + jsonObj.pageTextData[2].description + '</p>');

        //Get the home page right column text data
        $('#title_right').html('<h2>' + jsonObj.pageTextData[3].title + '</h2>');
        $('#subTitle_right').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
        $('#description_right').html('<p>' + jsonObj.pageTextData[3].description + '</p>');	

        //Get the coke main text data
        $('#x3dModelTitle_coke').html('<h2>' + jsonObj.pageTextData[4].x3dModelTitle + '<h2>');
        $('#x3dCreationMethod_coke').html('<p>' + jsonObj.pageTextData[4].x3dCreationMethod + '<p>');
        $('#title_coke').html('<h2>' + jsonObj.pageTextData[4].title + '<h2>');
        $('#subTitle_coke').html('<h3>' + jsonObj.pageTextData[4].subTitle + '</h3>');
        $('#description_coke').html('<p>' + jsonObj.pageTextData[4].description + '</p>');

        //Get the sprite main text data
        $('#x3dModelTitle_sprite').html('<h2>' + jsonObj.pageTextData[5].x3dModelTitle + '<h2>');
        $('#x3dCreationMethod_sprite').html('<p>' + jsonObj.pageTextData[5].x3dCreationMethod + '<p>');
        $('#title_sprite').html('<h2>' + jsonObj.pageTextData[5].title + '<h2>');
        $('#subTitle_sprite').html('<h3>' + jsonObj.pageTextData[5].subTitle + '</h3>');
        $('#description_sprite').html('<p>' + jsonObj.pageTextData[5].description + '</p>');

        //Get the pepper main text data
        $('#x3dModelTitle_pepper').html('<h2>' + jsonObj.pageTextData[6].x3dModelTitle + '<h2>');
        $('#x3dCreationMethod_pepper').html('<p>' + jsonObj.pageTextData[6].x3dCreationMethod + '<p>');
        $('#title_pepper').html('<h2>' + jsonObj.pageTextData[6].title + '<h2>');
        $('#subTitle_pepper').html('<h3>' + jsonObj.pageTextData[6].subTitle + '</h3>');
        $('#description_pepper').html('<p>' + jsonObj.pageTextData[6].description + '</p>');

        //Get the gallery contents data
        $('.title_gallery').html('<h2>' + jsonObj.pageTextData[7].galleryTitle + '<h2>');
        $('.description_gallery').html('<p>' + jsonObj.pageTextData[7].galleryDescription + '</p>');

        //Get camera contents data
        $('.x3dCameraTitle').html('<h2>' + jsonObj.pageTextData[8].CameraTitle + '<h2>');
        $('.x3dCameraSubtitle').html('<p>' + jsonObj.pageTextData[8].CameraSubtitle + '</p>');

        //Get "About" page text and parse link addresses to Buttons
        $('#aboutPageHead').html('<h1>' + jsonObj.pageTextData[9].AboutHead + '</h1>');
        $('#aboutPageText').html('<p>' + jsonObj.pageTextData[9].AboutText + '</p>');
        $('#aboutUnderstandingHead').html('<h1>' + jsonObj.pageTextData[9].AboutUnderstandHead + '</h1>');
        $('#aboutUnderstandingText').html('<p>' + jsonObj.pageTextData[9].AboutUnderstandText + '</p>');
        $('#aboutReferenceHead').html('<h1>' + jsonObj.pageTextData[9].AboutRefHead + '</h1>');
        $('#aboutReferenceText1').html('<p>' + jsonObj.pageTextData[9].AboutRefText1 + '<a href="https://www.youtube.com/watch?v=U4SVY75bJN8&ab_channel=AbuwaqarIkhwan" target = "_blank" class="btn btn-dark btn-responsive">Via this YouTube video</a></p>');
        $('#aboutReferenceText2').html('<p>' + jsonObj.pageTextData[9].AboutRefText2 + '<a href="https://getbootstrap.com/docs/4.0/components/buttons/" target = "_blank" class="btn btn-dark btn-responsive">Via this Page</a><br></p>');
        $('#aboutReferenceText3').html('<p>' + jsonObj.pageTextData[9].AboutRefText3 + '<a href="https://getbootstrap.com/docs/4.0/components/carousel/" target = "_blank" class="btn btn-dark btn-responsive">Via this Page</a><br></p>');
        $('#aboutReferenceText4').html('<p>' + jsonObj.pageTextData[9].AboutRefText4 + '<a href="https://www.w3schools.com/css/css3_mediaqueries_ex.asp" target = "_blank" class="btn btn-dark btn-responsive">Via this Page</a><br><br></p>');
        $('#aboutReferenceText5').html('<p>' + jsonObj.pageTextData[9].AboutRefText5 + '<a href="https://www.w3schools.com/jsref/met_document_getelementbyid.asp" target = "_blank" class="btn btn-dark btn-responsive">Via this Page</a><br></p>');
        $('#aboutReferenceText6').html('<p>' + jsonObj.pageTextData[9].AboutRefText6 + '<a href="https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp" target = "_blank" class="btn btn-dark btn-responsive">Via this Page</a><br></p>');
        
        //Get Render images addresses (commented out lines are unused addresses, since the rest of the image is fetched by gallery_generator.js)
        document.getElementById("cokeRAddr1").setAttribute("href",jsonObj.pageTextData[10].cokeRender1Addr);
        //document.getElementById("cokeRAddr2").setAttribute("href",jsonObj.pageTextData[10].cokeRender2Addr);
        document.getElementById("spriteRAddr1").setAttribute("href",jsonObj.pageTextData[10].spriteRender1Addr);
        //document.getElementById("spriteRAddr2").setAttribute("href",jsonObj.pageTextData[10].spriteRender2Addr);
        document.getElementById("pepperRAddr1").setAttribute("href",jsonObj.pageTextData[10].pepperRender1Addr);
        //document.getElementById("pepperRAddr2").setAttribute("href",jsonObj.pageTextData[10].pepperRender2Addr);

        //Get Site images addresses
        document.getElementById("siteImg1").setAttribute("src", jsonObj.pageTextData[11].siteImg1Addr);
        document.getElementById("siteImg2").setAttribute("src", jsonObj.pageTextData[11].siteImg2Addr);
        document.getElementById("siteImg3").setAttribute("src", jsonObj.pageTextData[11].siteImg3Addr);
        document.getElementById("main_3d_image").setAttribute("style", jsonObj.pageTextData[11].siteImgBannerAddr);
        document.getElementById("carouimg1").setAttribute("src", jsonObj.pageTextData[11].siteCarou1Addr);
        document.getElementById("carouimg2").setAttribute("src", jsonObj.pageTextData[11].siteCarou2Addr);
        document.getElementById("carouimg3").setAttribute("src", jsonObj.pageTextData[11].siteCarou3Addr);

        //Get Carousel Description Text
        $('#caroutext1').html('<h5>' + jsonObj.pageTextData[12].textCarou1 + '</h5>');
        $('#caroutext2').html('<h5>' + jsonObj.pageTextData[12].textCarou2 + '</h5>');
        $('#caroutext3').html('<h5>' + jsonObj.pageTextData[12].textCarou3 + '</h5>');

        //Get Interaction Button Titles and Description Text
        $('#buttontitle1').html('<h3>' + jsonObj.pageTextData[13].buttonTitle1 + '</h3>');
        $('#buttontitle2').html('<h3>' + jsonObj.pageTextData[13].buttonTitle2 + '</h3>');
        $('#buttontitle3').html('<h3>' + jsonObj.pageTextData[13].buttonTitle3 + '</h3>');
        $('#buttontitle4').html('<h3>' + jsonObj.pageTextData[13].buttonTitle4 + '</h3>');
        $('#buttontext1').html('<p>' + jsonObj.pageTextData[13].buttonText1 + '</p>');
        $('#buttontext2').html('<p>' + jsonObj.pageTextData[13].buttonText2 + '</p>');
        $('#buttontext3').html('<p>' + jsonObj.pageTextData[13].buttonText3 + '</p>');
        $('#buttontext4').html('<p>' + jsonObj.pageTextData[13].buttonText4 + '</p>');

    });
});