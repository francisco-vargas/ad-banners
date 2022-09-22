/*
8b    d8 88    db    8b    d8 88      dP"Yb  88        db        8888b.  888888 Yb    dP     888888 888888    db    8b    d8
88b  d88 88   dPYb   88b  d88 88     dP   Yb 88       dPYb        8I  Yb 88__    Yb  dP        88   88__     dPYb   88b  d88
88YbdP88 88  dP__Yb  88YbdP88 88     Yb   dP 88  .o  dP__Yb       8I  dY 88""     YbdP         88   88""    dP__Yb  88YbdP88
88 YY 88 88 dP""""Yb 88 YY 88 88      YbodP  88ood8 dP""""Yb     8888Y"  888888    YP          88   888888 dP""""Yb 88 YY 88
*/

(function(){
    //Load Enabler
    function init(){
        loadTweenEngine();
    }

    function loadTweenEngine(){
        head.load("sapient_util.js","https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenLite.min.js",
                    "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TimelineLite.min.js",
                    "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/easing/EasePack.min.js",
                    "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/plugins/CSSPlugin.min.js",
                    "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/plugins/AttrPlugin.min.js",
                     initDynamicContent);
    }


    function initDynamicContent(){

        console.log("DYNAMIC CONTENT INITIALIZED");

        var devDynamicContent = {};

        devDynamicContent.content= [{}];
        devDynamicContent.content[0]._id = 0;
        devDynamicContent.content[0].dynamic_properties = '{"retina":false}';
        devDynamicContent.content[0].fonts = '{"c":"Roboto+Condensed:700"}'; //,{"c":"EB+Garamond:700"};
        devDynamicContent.content[0].dependencies = '{"c":"skin1.js"}';
        devDynamicContent.content[0].unit_css = ''; //{"t":"logoContainer", "c":""};
        devDynamicContent.content[0].extra_content = '';
        // devDynamicContent.content[0].txt_end = "For just<br><span class='highlight'>$2<br>a day</span>";
        // devDynamicContent.content[0].txt_copy3 = "Earn Up To";
        

        // devDynamicContent.content[0].txt_cta1 = "BUY NOW";
        devDynamicContent.content[0].txt_replay = "Replay";

        devDynamicContent.content[0].img_bg1 = {};
        devDynamicContent.content[0].img_bg1.Url = "img_bg1.jpg";
        devDynamicContent.content[0].img_copy1_1 = {};
        devDynamicContent.content[0].img_copy1_1.Url = "img_copy1_1.png";
        devDynamicContent.content[0].img_copy1_2 = {};
        devDynamicContent.content[0].img_copy1_2.Url = "img_copy1_2.png";
        
        devDynamicContent.content[0].img_end_1 = {};
        devDynamicContent.content[0].img_end_1.Url = "img_end_1.png";
        devDynamicContent.content[0].img_end_2 = {};
        devDynamicContent.content[0].img_end_2.Url = "img_end_2.png";
        devDynamicContent.content[0].img_end_3 = {};
        devDynamicContent.content[0].img_end_3.Url = "img_end_3.png";

        // devDynamicContent.content[0].img_num_sequence = {};
        // devDynamicContent.content[0].img_num_sequence.Url = "img_num_sequence.png";

        devDynamicContent.content[0].img_replay = {};
        devDynamicContent.content[0].img_replay.Url = "img_replay.png";

        devDynamicContent.content[0].img_cta1Text = {};
        devDynamicContent.content[0].img_cta1Text.Url = "img_cta_text.png";
        devDynamicContent.content[0].img_legal = {};
        devDynamicContent.content[0].img_legal.Url = "img_legal.png";


        SapientUtil.dContent = devDynamicContent.content[0];
        SapientUtil.dProp = JSON.parse(SapientUtil.dContent.dynamic_properties);
        SapientUtil.dLibrary.fontContent = SapientUtil.getTXTContent();
        SapientUtil.dLibrary.fontExceptions = ["%","&",":","/","?","#","@","®","=","!",";","’","'"];
        SapientUtil.init();



        // loadFonts();
        loadDependecies();
    }

    function loadFonts(){
        var rawData = "["+SapientUtil.dContent.fonts+"]";
        var arrData = JSON.parse(rawData);
        var charEmbed = SapientUtil.getFontCharacters();

        var arrFonts = arrData.map(function (element) {
            if (charEmbed != "") var fonts = element.c += "&display=swap&text=" + charEmbed;
            return fonts;  
        });
        
        SapientUtil.loadFonts(arrFonts,loadDependecies);
    }

    function loadDependecies(){

        console.log("LOADING DEPENDENCIES");
        var rawData = "["+SapientUtil.dContent.dependencies+"]";
        var arrData = JSON.parse(rawData);

        var arrDependencies = arrData.map(function (element) {
            return element.c;  
        });
        
        head.load(arrDependencies, initSkin);
    }

    function initSkin(){
        SapientUtil.dModule.skin.init();
    }

    init();
}());
