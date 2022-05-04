var xmlHttp = new XMLHttpRequest();
var htmlCode = "";
var response;
var numberOfColumns = 6;


$(document).ready(function () {
    var send = "scripts/php/hook.php";
    xmlHttp.open("GET", send, true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {

            //alert(xmlHttp.responseText);

            response = xmlHttp.responseText.split("~");
            htmlCode += '<tr>';

            for (var i = 0; i < response.length; i++) {

                //htmlCode += '<a href="' + 'assets/images/gallery_images/cokeposter.jpg' + ' ">';
                //htmlCode += '<img class="card-img-top img-thumbnail" src="' + 'assets/images/gallery_images/cokeposter.jpg' + '"/>';
                //htmlCode += '<a href="assets/images/gallery_images' + response[i] + ' ">';
                //htmlCode += '<img class="card-img-top img-thumbnail" src="assets/images/gallery_images' + response[i] + '"/>';
                //htmlCode += '<a href="gallery_images' + response[i] + ' ">';
                //htmlCode += '<img class="card-img-top img-thumbnail" src="gallery_images' + response[i] + '"/>';
                //htmlCode += '</a>';	
                htmlCode += '<td id="gallery_cell">';
                htmlCode += '<a href="gallery_images' + response[i] + ' " ' + ' data-fancybox data-caption="My X3D model render" > ';
                htmlCode += '<img class="card-img-top img-thumbnail" src="gallery_images' + response[i] + '"/>';
                htmlCode += '</a>';
                htmlCode += '</td>';
                if (((i + 1) % numberOfColumns) == 0) {
                    htmlCode += '</tr><tr>';
                }
            }
            htmlCode += '</tr>';
            document.getElementById('gallery').innerHTML = htmlCode;

        }
    }
});