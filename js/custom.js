  /* ==========================================================================
       LOADER SPIN LOADING PAGE
       ========================================================================== */
    
    $(window).load(function() {
        "use stric";
      $(".spinner").delay(500).fadeOut();
        $("#loader-wrapper").delay(350).fadeOut("fast");
    });
    


/* ==========================================================================
   Header Shrink Fixed 
   ========================================================================== */

function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 750,
            header = document.querySelector(".header");
        if (distanceY > shrinkOn) {
            classie.add(header,"smaller");
        } else {
            if (classie.has(header,"smaller")) {
                classie.remove(header,"smaller");
            }
        }
    });
}
window.onload = init();

/* ==========================================================================
   Type writer opener
   ========================================================================== */

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 1000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 150 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.02em solid #fff}";
        document.body.appendChild(css);
    };


     $(document).ready(function() {
			    Tipped.create('.simple-tooltip');
			  });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* smoothscroll */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
   $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* scrollreveal */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..
    }

    else{
        window.scrollReveal = new scrollReveal();
    }
    

/* ==========================================================================
   FLEX NAV
   ========================================================================== */
  jQuery(document).ready(function($){
    $(".flexnav").flexNav();
  });

