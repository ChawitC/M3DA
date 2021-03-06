<!--
These web pages are submitted as part requirements for the degree of Computing with Digital Media MSc at the University of Sussex.
They are the product of my own labour except where indicated in the web page content.
These web pages or contents may be freely copied and distributed provided the source is acknowledged.

These Web application is done as a Module assignment
part of 920G5 Mobile 3D Applications (Spring Semester 21/22)

By Chawit Chiwarattanaphan
Candidate number: 244152
Email: cc841@sussex.ac.uk
-->
<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <link rel="stylesheet" href="css/bootstrap.css" />

    <link rel='stylesheet' type='text/css' href='css/x3dom.css' />
    <!--<link rel="stylesheet" href="http://www.x3dom.org/x3dom/release/x3dom.css">-->
    <!-- Use a light box to view images in the gallery -->
    <link rel="stylesheet" type="text/css" href="css/jquery.fancybox.min.css">

    <link rel="stylesheet" href="css/custom.css" />
    <link href="css/gallery.css" rel="stylesheet" type="text/css">

    <title>Coca Cola Story</title>
</head>
<body id="body">
    <!-- Logo and navigation bar -->
    <nav class="navbar sticky-top navbar-expand-sm navbar_coca_cola" id="header">
        <!-- Brand -->
        <div class="logo">
            <a class="navbar-brand" href="index.html">
                <h1>1</h1>
                <h1>oca</h1>
                <h2>Cola</h2>
                <h3>Journey</h3>
                <p>Refreshing the world, one story at a time</p>
            </a>
        </div>

        <!-- Collapsable Navbar Menu Icon -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Line Menu item button to the links class navbar-collapse selector -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Link -->
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a id="navHome" class="nav-link" href="#" data-toggle="popover" data-trigger="hover" data-placement="bottom" title="Home Page">Home</a>
                </li>
                <li class="nav-item">
                    <a id="navAbout" class="nav-link" href="#" data-toggle="popover" data-trigger="hover" data-placement="bottom" title="About Web 3D Applications" data-content="3D Apps is a final year and postgraduate module ...">About</a>
                </li>
                <li class="nav-item">
                    <a id="navModels" class="nav-link" href="#" data-toggle="popover" data-trigger="hover" data-placement="bottom" title="X3D Models" data-content="There are three X3D models: Coke, Sprite and Pepper">Models</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target = "_blank" href="https://github.com/ChawitC/M3DA">GitHub</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="modal" data-target="#contactModal">Contact</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Main content block -->
    <!-- Start 3D App SPA Contents -->
    <div class="container-fluid main_contents">
        <!-- Start SPA Contents -->
        <!-- Home page block element -->
        <div id="home">
            <div class="row">
                <!-- Main_3D Image -->
                <div class="col-sm-12">
                    <div id="main_3d_image" style="">
                        <div id="main_text" class="col-xs-12 col-sm-8">
                            <div id="title_home"></div>
                            <div id="subTitle_home"></div>
                            <div id="description_home"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- End of Main_3D Image -->
            <!-- Carousel -->
            <div id="productCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#productCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#productCarousel" data-slide-to="1"></li>
                    <li data-target="#productCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-interval="3000">
                        <img id="carouimg1" src="#" class="d-block w-100 h-50" alt="Coca Cola">
                        <div id="caroutext1" class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item" data-interval="3000">
                        <img id="carouimg2" src="#" class="d-block w-100" alt="Sprite">
                        <div id="caroutext2" class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item" data-interval="3000">
                        <img id="carouimg3" src="#" class="d-block w-100" alt="Dr Pepper">
                        <div id="caroutext3" class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <!-- End of Carousel -->
            <!-- Row of cards on the grid -->
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <a id="cokeRAddr1" href="#" data-fancybox data-caption="My 3D Coke Can Render">
                            <img id="siteImg1" class="card-img-top img-fluid img-thumbnail" src="#" alt="Coca Cola">
                        </a>
                        <div class="card-body">
                            <div id="title_left" class="card-title drinksText"></div>
                            <div id="subTitle_left" class="card-subtitle drinksText"></div>
                            <div id="description_left" class="card-text drinksText"></div>
                            <a id="navModels2" href="#" class="btn btn-dark btn-responsive">X3D Can Model</a>
                            <a target = "_blank" href="http://www.coca-cola.co.uk/drinks/coca-cola/coca-cola" class="btn btn-dark btn-responsive">Find out more ...</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="card">
                        <a id="spriteRAddr1" href="#" data-fancybox data-caption="My 3D Sprite Bottle Render">
                            <img id="siteImg2" class="card-img-top img-fluid img-thumbnail" src="#" alt="Sprite">
                        </a>
                        <div class="card-body">
                            <div id="title_centre" class="card-title drinksText"></div>
                            <div id="subTitle_centre" class="card-subtitle drinksText"></div>
                            <div id="description_centre" class="card-text drinksText"></div>
                            <a id="navModels3" href="#" class="btn btn-dark btn-responsive">X3D Bottle Model</a>
                            <a target = "_blank" href="http://www.coca-cola.co.uk/drinks/sprite/sprite" class="btn btn-dark btn-responsive">Find out more ...</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="card">
                        <a id="pepperRAddr1" href="#" data-fancybox data-caption="My 3D Dr Pepper Cup Render">
                            <img id="siteImg3" class="card-img-top img-fluid img-thumbnail" src="#" alt="Dr Pepper">
                        </a>
                        <div class="card-body">
                            <div id="title_right" class="card-title drinksText"></div>
                            <div id="subTitle_right" class="card-subtitle drinksText"></div>
                            <div id="description_right" class="card-text drinksText"></div>
                            <a id="navModels4" href="#" class="btn btn-dark btn-responsive">X3D Cup Model</a>
                            <a target = "_blank" href="http://www.coca-cola.co.uk/drinks/dr-pepper/dr-pepper" class="btn btn-dark btn-responsive">Find out more ...</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End home page -->
        <!-- About page block element -->
        <div id="about">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div id="aboutPageHead" class="card-text drinksText"></div>
                            <div id="aboutPageText" class="card-text drinksText"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div id="aboutUnderstandingHead" class="card-title drinksText"></div>
                            <div id="aboutUnderstandingText" class="card-text drinksText"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <div id="aboutReferenceHead" class="card-title drinksText"></div>
                            <div id="aboutReferenceText1" class="card-text drinksText"></div>
                            <div id="aboutReferenceText2" class="card-text drinksText"></div>
                            <div id="aboutReferenceText3" class="card-text drinksText"></div>
                            <div id="aboutReferenceText4" class="card-text drinksText"></div>
                            <div id="aboutReferenceText5" class="card-text drinksText"></div>
                            <div id="aboutReferenceText6" class="card-text drinksText"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End About page block element -->
        <!-- Start X3D models and 3D Interaction Panels -->
        <div id="models">
            <!-- Row to hold two cards to hold 1) the X3D model, and 2) the gallery-->
            <div class="row">
                <!-- X3D Models — Place 4 models in here for the assignment -->
                <div class="col-sm-7">
                    <div class="card text-left">
                        <div class="card-header">
                            <ul class="nav nav-tabs card-header-tabs">
                                <li class="nav-item">
                                    <a id="navCoke" class="nav-link" href="#">Coke</a>
                                </li>
                                <li class="nav-item">
                                    <a id="navSprite" class="nav-link" href="#">Sprite</a>
                                </li>
                                <li class="nav-item">
                                    <a id="navPepper" class="nav-link" href="#">Pepper</a>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <!-- Coke X3D model -->
                            <div id="coke">
                                <div id="x3dModelTitle_coke" class="card-title drinksText"></div>
                                <!-- Place the X3D code here -->
                                <div id="model3D1" class="model3D">
                                    <x3d id="model">
                                        <scene>
                                            <inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();" url="assets/x3d/StudentCoke.x3d"> </inline>
                                        </scene>
                                    </x3d>
                                </div>
                                <div id="x3dCreationMethod_coke" class="card-text drinksText"></div>
                            </div>
                            <!-- Sprite X3D model -->
                            <div id="sprite" style="display:none;">
                                <div id="x3dModelTitle_sprite" class="card-title drinksText"></div>
                                <!-- Place the X3D code here -->
                                <div id="model3D2" class="model3D">
                                    <x3d id="model2">
                                        <scene>
                                            <inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();" url="assets/x3d/spritehp.x3d"> </inline>
                                        </scene>
                                    </x3d>
                                </div>
                                <div id="x3dCreationMethod_sprite" class="card-text drinksText"></div>
                            </div>
                            <!-- Pepper X3D model -->
                            <div id="pepper" style="display:none;">
                                <div id="x3dModelTitle_pepper" class="card-title drinksText"></div>
                                <!-- Place the X3D code here -->
                                <div id="model3D3" class="model3D">
                                    <x3d id="model3">
                                        <scene>
                                            <inline nameSpaceName="model" mapDEFToID="true" onclick="animateModel();" url="assets/x3d/newcup.x3d"> </inline>
                                        </scene>
                                    </x3d>
                                </div>
                                <div id="x3dCreationMethod_pepper" class="card-text drinksText"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Start of Interaction tab -->
                <div class="col-sm-5">
                    <div class="card text-left">
                        <div class="card-header">
                            <ul class="nav nav-tabs card-header-tabs">
                                <!-- Dropdown nav-tab -->
                                <li class="nav-item dropdown">
                                    <a class="nav-link active dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Cameras</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" onclick="cameraFront();">Front</a>
                                        <a class="dropdown-item" href="#" onclick="cameraBack();">Back</a>
                                        <a class="dropdown-item" href="#" onclick="cameraLeft();">Left</a>
                                        <a class="dropdown-item" href="#" onclick="cameraRight();">Right</a>
                                        <a class="dropdown-item" href="#" onclick="cameraTop();">Top</a>
                                        <a class="dropdown-item" href="#" onclick="cameraBottom();">Bottom</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Animation</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" onclick="spin(8);">Slow</a>
                                        <a class="dropdown-item" href="#" onclick="spin(4);">Medium</a>
                                        <a class="dropdown-item" href="#" onclick="spin(1);">Fast</a>
                                        <a class="dropdown-item" href="#" onclick="stopRotation();">Stop</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Render Mode</a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" onclick="poly();">Polygon</a>
                                        <a class="dropdown-item" href="#" onclick="wireframe();">Wireframe</a>
                                        <a class="dropdown-item" href="#" onclick="vertex();">Vertex</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <div id="buttontitle1" class="card-Title x3dCamera_Subtitle drinksText"></div>
                            <a href="#" class="btn btn-dark btn-responsive" onclick="cameraFront();">Default</a>
                            <a href="#" class="btn btn-light btn-responsive" onclick="cameraBack();">Back</a>
                            <a href="#" class="btn btn-light btn-responsive" onclick="cameraLeft();">Left</a>
                            <a href="#" class="btn btn-light btn-responsive" onclick="cameraRight();">Right</a>
                            <a href="#" class="btn btn-light btn-responsive" onclick="cameraTop();">Top</a>
                            <a href="#" class="btn btn-light btn-responsive" onclick="cameraBottom();">Bottom</a>

                            <div id="buttontext1" class="card-text x3dCameraDescription drinksText"> </div>

                            <div id="buttontitle2" class="card-Title x3dAnimationSubtitle drinksText"></div>
                            <a href="#" class="btn btn-light btn-responsive" onclick="spin(8);">Slow Spinning</a>
                            <a href="#" class="btn btn-light btn-responsive" onclick="spin(4);">Medium Spinning</a>
                            <a href="#" class="btn btn-light btn-responsive" onclick="spin(1);">Fast Spinning</a>
                            <a href="#" class="btn btn-dark btn-responsive" onclick="stopRotation();">Stop</a>
                            <div id="buttontext2" class="card-text x3dAnimationDescription drinksText"></div>

                            <div id="buttontitle3" class="card-Title x3dRendersubtitle drinksText"></div>
                            <a href="#" class="btn btn-light btn-responsive" onclick="poly();">Poly</a>
                            <a href="#" class="btn btn-light btn-responsive" onclick="wireframe();">Wire</a>
                            <a href="#" class="btn btn-light btn-responsive" onclick="vertex();">Vertex</a>
                            <a href="#" class="btn btn-dark btn-responsive" onclick="headlight();">Toggle Headlight</a>
                            <div id="buttontext3" class="card-text x3dRenderDescription drinksText"></div>

                            <div id="buttontitle4" class="card-Title x3dRendersubtitle drinksText"></div>
                            <a href="#" class="btn btn-light btn-responsive" onclick="change3Dbg(1);">Coke Theme</a>
                            <a href="#" class="btn btn-light btn-responsive" onclick="change3Dbg(2);">Sprite Theme</a>
                            <a href="#" class="btn btn-light btn-responsive" onclick="change3Dbg(3);">Dr Pepper Theme</a>
                            <a href="#" class="btn btn-dark btn-responsive" onclick="change3Dbg(0);">None</a>
                            <div id="buttontext4" class="card-text x3dRenderDescription drinksText"></div>
                        </div>
                    </div>
                </div> <!-- End column for interaction panels -->
            </div> <!-- End the row for X3D Model and interaction panels -->
        </div> <!-- End of div id = models -->
        <!-- 3D image gallery -->
        <div id="galleryrow" class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title title_gallery drinksText"></div>
                        <div class="gallery" id="gallery"></div>
                        <br>
                        <div class="card-text description_gallery drinksText"></div>
                    </div>
                </div> <!-- End gallery card -->
            </div> <!-- End gallery column -->
        </div> <!-- End gallery row -->
        <!-- Row to hold one card to hold the coke descriptive text, etc.-->
        <div id="cokeDescription" class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div id="title_coke" class="card-title drinksText"></div>
                        <div id="subTitle_coke" class="card-subtitle drinksText"></div>
                        <div id="description_coke" class="card-text drinksText"></div>
                        <a href="http://www.coca-cola.co.uk/drinks/coca-cola/coca-cola" target = "_blank" class="btn btn-dark btn-responsive">Visit Coke</a>
                    </div>
                </div>
            </div>
        </div> <!-- End coke description contents -->
        <!-- Row to hold one card to hold the sprite descriptive text, etc.-->
        <div id="spriteDescription" class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div id="title_sprite" class="card-title drinksText"></div>
                        <div id="subTitle_sprite" class="card-subtitle drinksText"></div>
                        <div id="description_sprite" class="card-text drinksText"></div>
                        <a href="http://www.coca-cola.co.uk/drinks/sprite/sprite" target = "_blank" class="btn btn-dark btn-responsive">Visit Sprite</a>
                    </div>
                </div>
            </div>
        </div> <!-- End sprite description contents -->
        <!-- Row to hold one card to hold the pepper descriptive text, etc.-->
        <div id="pepperDescription" class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div id="title_pepper" class="card-title drinksText"></div>
                        <div id="subTitle_pepper" class="card-subtitle drinksText"></div>
                        <div id="description_pepper" class="card-text drinksText"></div>
                        <a href="http://www.coca-cola.co.uk/drinks/dr-pepper/dr-pepper" target = "_blank" class="btn btn-dark btn-responisve">Visit Dr Pepper</a>
                    </div>
                </div>
            </div>
        </div> <!-- End pepper description contents -->
    </div>
    <!-- End 3D App SPA Contents -->
    <!--Your 3D App footer-->
    <nav class="navbar navbar-expand-sm footer" id="footer">
        <div class="container">
            <div class="navbar-text float-left copyright">
                <p>
                    <span class="align-baseline">&copy 2022 Mobile Web 3D Applications </span> / <a href='javascript:changeLook()'>Restyle</a> / <a href='javascript:changeBack()'>Reset</a>
                </p>
            </div>
            <div class="navbar-text social">
                <a id="modelpagelink" target = "_blank" href="https://github.com/ChawitC/M3DA/tree/main/3D%20models" class="btn btn-light btn-responsive">3D Models</a>
                <a target = "_blank" href="https://github.com/ChawitC/M3DA"><i class="fab fa-github-square fa-2x fa-pull-right"></i></a>
                <a target = "_blank" href="https://twitter.com/CocaCola"><i class="fab fa-twitter-square fa-2x fa-pull-right"></i></a>
                <a target = "_blank" href="https://en-gb.facebook.com/Coca-Cola/"><i class="fab fa-facebook-square fa-2x fa-pull-right"></i></a>
            </div>
        </div>
    </nav>

    <!--My 3D App modals-->
    <!--Contact modal-->
    <!--The Modal-->
    <div class="modal fade" id="contactModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header">
                    <h4 class="modal-title">3D App Contact Details</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    <p>Chawit Chiwarattanaphan, Email: cc841@sussex.ac.uk</p>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="scripts/js/jquery-3.6.0.js"></script>
    <script src="scripts/js/popper.min.js"></script>
    <script src="scripts/js/bootstrap.js"></script>
    <script src="scripts/js/swapper.js"></script>
    <script src="https://kit.fontawesome.com/ceb742868d.js" crossorigin="anonymous"></script>
    <script type='text/javascript' src='scripts/js/x3dom.js'></script>

    <!-- JavaScript and PHP based Gallery generator  -->
    <script src="scripts/js/gallery_generator.js"></script>

    <!--fancyBox3 => http://fancyapps.com/fancybox/3/ -->
    <script src="scripts/js/jquery.fancybox.min.js"></script>

    <!-- JavaScript model interactions -->
    <script src="scripts/js/modelInteractions.js"></script>
    <!-- JavaScript JSON parser -->
    <script src="scripts/js/getJsonData.js"></script>
</body>
</html>