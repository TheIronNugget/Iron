
(function(html) {

    "use strict";
    
    html.className = html.className.replace(/\bno-js\b/g, '') + ' js ';


   
    const cploader2 = function() {

        const ploader2 = document.querySelector('#ploader2');
        if (!ploader2) return;

        window.addEventListener('load', function() {
            
            document.querySelector('body').classList.remove('ss-preload');
            document.querySelector('body').classList.add('ss-loaded');

            ploader2.addEventListener('transitionend', function(i) {
                if (i.target.matches("#ploader2")) {
                    this.style.display = 'none';
                }
            });

        });

      

    }; 


    const Parallax = function() { 

        const rellax = new Rellax('.rlax');

    }; 
   
   
 
    const MoveHeader = function () {

        const hdr = document.querySelector('.header');
        const hero = document.querySelector('#hero');
        let triggerHeight;

        if (!(hdr && hero)) return;

        setTimeout(function(){
            triggerHeight = hero.offsetHeight - 170;
        }, 300);

        window.addEventListener('scroll', function () {

            let loc = window.scrollY;
           

            if (loc > triggerHeight) {
                hdr.classList.add('sticky');
            } else {
                hdr.classList.remove('sticky');
            }

            if (loc > triggerHeight + 20) {
                hdr.classList.add('offset');
            } else {
                hdr.classList.remove('offset');
            }

            if (loc > triggerHeight + 150) {
                hdr.classList.add('scrolling');
            } else {
                hdr.classList.remove('scrolling');
            }

        });

    }; 
    const MobileMenu = function() {

        const toggleButton = document.querySelector('.htog');
        const headerNavWrap = document.querySelector('.navWrapper');
        const siteBody = document.querySelector("body");

        if (!(toggleButton && headerNavWrap)) return;

        toggleButton.addEventListener('click', function(event){
            event.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        headerNavWrap.querySelectorAll('.navy a').forEach(function(link) {
            link.addEventListener("click", function(evt) {

             
                if (window.matchMedia('(max-width: 800px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {


            if (window.matchMedia('(min-width: 801px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains("is-clicked")) toggleButton.classList.remove("is-clicked");
            }
        });

    }; 


    const rollSpy = function() {

        const sections = document.querySelectorAll(".targ");

      
        window.addEventListener("scroll", navHighlight);

        function navHighlight() {
        
           
            let scrollY = window.pageYOffset;
        
            sections.forEach(function(acts) {
                const sectionHeight = acts.offsetHeight;
                const sectionTop = acts.offsetTop - 50;
                const sectionId = acts.getAttribute("id");
            
             
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(".navy a[href*=" + sectionId + "]").parentNode.classList.add("act");
                } else {
                    document.querySelector(".navy a[href*=" + sectionId + "]").parentNode.classList.remove("act");
                }
            });
        }

    }; 



    


    const lbox = function() {

        const folioLinks = document.querySelectorAll('.porties a');
        const modals = [];

        folioLinks.forEach(function(link) {
            let modalbox = link.getAttribute('href');
            let instance = basicLightbox.create(
                document.querySelector(modalbox),
                {
                    onShow: function(instance) {
                   
                        document.addEventListener("keydown", function(evt) {
                            evt = evt || window.event;
                            if(evt.keyCode === 27){
                            instance.close();
                            }
                        });
                    }
                }
            )
            modals.push(instance);
        });

        folioLinks.forEach(function(link, index) {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                modals[index].show();
            });
        });

    };  

 
      
  



    const smoother = function () {
        
        const triggers = document.querySelectorAll(".sms");

        triggers.forEach(function(trigger) {
            trigger.addEventListener("click", function() {
                const target = trigger.getAttribute("href");

                Jump(target, {
                    duration: 1200,
                });
            });
        });

    }; 


   


    (function ssInit() {

        cploader2();
        smoother();
        Parallax();
        rollSpy();
        MoveHeader();
        lbox();
        MobileMenu();
        
        
        
    

    })();

})
(document.documentElement);


  
  
  
  
  