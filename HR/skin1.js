/*
8b    d8 88    db    8b    d8 88      dP"Yb  88        db        8888b.  888888 Yb    dP     888888 888888    db    8b    d8
88b  d88 88   dPYb   88b  d88 88     dP   Yb 88       dPYb        8I  Yb 88__    Yb  dP        88   88__     dPYb   88b  d88
88YbdP88 88  dP__Yb  88YbdP88 88     Yb   dP 88  .o  dP__Yb       8I  dY 88""     YbdP         88   88""    dP__Yb  88YbdP88
88 YY 88 88 dP""""Yb 88 YY 88 88      YbodP  88ood8 dP""""Yb     8888Y"  888888    YP          88   888888 dP""""Yb 88 YY 88
*/

//Skin - Animation and Content for Unit
SapientUtil.dModule.skin = (function(){
    var name = "Skin1"
    var pub = {};
    //TWEENER
    var tE = TweenLite;
    var tL = new TimelineLite({paused:true});
    var gleamTL = new TimelineLite()
    var elements, assets = [];
    var bolExtraContent = false;

    var bannerWidth = SapientUtil.getCSSValue('.bannerWidth', 'width');
    var bannerHeight = SapientUtil.getCSSValue('.bannerHeight', 'height');

    //Dynamic content
    var dContent = SapientUtil.dContent;
    var dProp = SapientUtil.dProp;

    // add &timeline=lockdown to URL to see lockdown
    dContent.lockdown = function (){ tL.progress(1, false); }


    //FUNCTIONS
    pub.init = function(){
        console.log(name + " Init");
        setElements();
        loadImages();

    };


    function loadImages(){
        var arrAssets = [
                          {t:"legal", c:"img_legal", d: ""},
                          {t:"copy1_1", c:"img_copy1_1", d: ""},
                          {t:"copy1_2", c:"img_copy1_2", d: ""},

                          {t:"end_1", c:"img_end_1", d: ""},
                          {t:"end_2", c:"img_end_2", d: ""},
                          {t:"end_3", c:"img_end_3", d: ""},

                        //   {t:"end_num_0_1", c:"img_num_sequence", d: ""},
                        //   {t:"end_num_0_2", c:"img_num_sequence", d: ""},
                        //   {t:"end_num_0_3", c:"img_num_sequence", d: ""},
                        //   {t:"end_num_1", c:"img_num_sequence", d: ""},
                        //   {t:"end_num_comma", c:"img_num_sequence", d: ""},
                        //   {t:"end_num_dollar", c:"img_num_sequence", d: ""},

                          {t:"replayBtn", c:"img_replay", d: ""},
                          {t:"cta1Text", c:"img_cta1Text", d: ""},

                         ];

        //Load images
        SapientUtil.compileAssetLibrary(arrAssets, setup);
    }

    function setup(){
        console.log(name + " Setup")
        setLayout();
        setActions();
        setDynamicCSS();
        setAnimations();
    }



    function setElements(){
        var els = document.getElementsByTagName("*")
        var temp = Array.prototype.slice.call(els, 0);

        var temp2 = temp.map(function (element) {
            if (element.hasAttribute('id')) return element.id;
        }).filter(function (element) {
            if (element !== null) return element;
        });

        elements = SapientUtil.bindAssets(pub, temp2);
    };

    function setLayout(){
        // pub.cta1Text.innerHTML = dContent.txt_cta1;
   };

    function setActions(){

        //MAIN CTA
        // SapientUtil.addEvent(pub.cta1,'mouseup',onCTAExit);
        // SapientUtil.addEvent(pub.cta1,'mouseover',onCTAOver);
        // SapientUtil.addEvent(pub.cta1,'mouseout',onCTAOut);

        // SapientUtil.addEvent(pub.bgExit,'mouseup',onBGExit);
        // SapientUtil.addEvent(pub.bgExit,'mouseover',onCTAOver);

        // REPLAY
        SapientUtil.addEvent(pub.replayBtn,'mouseup',reset);

    };


    function setDynamicCSS(){
        SapientUtil.applyDynamicProperties(dContent.unit_css);
    };


    //CUSTOM ANIMATION
    function setAnimations(){

        tL.set(elements, {autoAlpha:0});
        tL.set([pub.mainContainer, pub.bannerContainer, pub.bg1, pub.bgExit, pub.cta1Text, pub.cta1, pub.img_logo, pub.img_logo_src, pub.frame01, pub.copy1_1, pub.copy1_2, pub.end_1, pub.end_2, pub.end_3, pub.end_num_0_1, pub.end_num_0_2, pub.end_num_0_3, pub.end_num_1, pub.end_num_comma, pub.end_num_dollar, pub.ctaBG, pub.calendar, pub.circle, pub.masks, pub.svg_container], {autoAlpha:1}); //pub.end_num_tilde, pub.cta1, pub.legal, pub.lockdown

        tL.set([pub.calendar, pub.svg_container], {rotation:-14})
        // tL.set(pub.svg_container, {rotation:-15})

        tL.add("frame01", "+=0")
        tL.add("frame02", "+=1.6")
        tL.add("lockdown", "+=3.4")

        tL.staggerFrom([pub.copy1_1, pub.copy1_2], .6, {y:"-=70", ease:Quint.easeInOut}, .3, "frame01")

        tL.to([pub.frame01], .3, {autoAlpha:0, ease:Quad.easeInOut}, "frame02")
        tL.to([pub.frame02], .3, {autoAlpha:1, ease:Quad.easeInOut}, "frame02")
        tL.from([pub.calendar], 1, {y:bannerHeight, ease:Quint.easeInOut}, "frame02-=.2")
        tL.to('.st1', 2, {attr:{"stroke-dashoffset":0}, ease:Quint.easeInOut}, "frame02+=.2");


        tL.to([pub.frame02], 1, {x:-bannerWidth, ease:Quint.easeInOut}, "lockdown")
        tL.to([pub.lockdown], .5, {autoAlpha:1, ease:Quad.easeInOut}, "lockdown")
        tL.staggerFrom([pub.end_1], .6, {y:"-=70", ease:Quint.easeInOut}, .4, "lockdown+=.3")
        tL.staggerTo([pub.end_1], .6, {autoAlpha:1, ease:Quint.easeInOut}, .4, "lockdown+=.37")

        tL.staggerTo([pub.end_num_0_1, pub.end_num_0_2], 1, {y:-822, ease:Quint.easeInOut}, .05, "lockdown+=.45")
        tL.from([pub.end_num_tilde], 1, {y:"+=70", ease:Quint.easeInOut}, "lockdown+=.55")
        tL.to([pub.end_num_0_3], 1, {y:-1270, ease:Quint.easeInOut}, "lockdown+=.65")
        tL.to([pub.end_num_1], 1, {y:-1115, ease:Quint.easeInOut}, "lockdown+=.75")
        tL.staggerFrom([pub.end_num_comma, pub.end_num_dollar], .6, {y:"+=70", ease:Quint.easeInOut}, .05, "lockdown+=.85")
        tL.from([pub.end_2], .6, {y:"-=70", ease:Quint.easeInOut}, "lockdown+=1.1")
        tL.from([pub.end_3], .6, {y:"-=70", ease:Quint.easeInOut}, "lockdown+=1.2")

        tL.staggerFrom([pub.ctaBG, pub.cta1Text], .6, {y:"-=70", ease:Quint.easeInOut}, .07, "lockdown+=1.6")
        tL.from([pub.legal], .6, {y:"-=20", autoAlpha:0, ease:Quint.easeInOut}, "lockdown+=1.9")
        tL.to([pub.cta1Text], .6, {y:34, ease:Quint.easeInOut}, "lockdown+=3.6")


        tL.play();
        // tL.timeScale(.1)
        // tL.seek("frame02");
        // tL.pause("frame01+=.1");
        // tL.seek("lockdown");
        // tL.pause("frame02");
        // tL.pause("lockdown");
    }



    function reset(event){
        tL.restart();
    };

    function triggerCTA(){
        // window.open(cta1,"_blank");
        window.open(window.clickTag, "_blank");
    }

    //////// BUTTON EVENTS ///////////

    function onCTAOver(event){
        gleamTL.restart();
    }
    //
    // function onCTAOut(event){
    //     tE.to ('.cta', .2, {background-color:"#002a54", ease:Quad.easeInOut})
    // }

    function onCTAExit(event){
        if(event.button == 0){ triggerCTA() }
    }

    function onBGExit(event){
         if(event.button == 0){ triggerCTA() }
    }

    return pub;
}());
