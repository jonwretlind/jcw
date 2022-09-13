/*  CUSTOM JAVASCRIPT LOADER */
import React from "react";
import $ from "jquery";

const JCW = ({ state }) => {
  React.useEffect(() => {
    $(document).ready(function() {
      console.log("jcw.js jQuery loaded.");

      // Home Page Animations
      var wordList = [
        "winners",
        "makers",
        "doers",
        "lovers",
        "carpenters",
        "roofers",
        "painters",
        "builders",
        "plumbers",
        "janitors",
        "doctors",
        "lawyers",
        "rock-n-rollers",
        "bakers",
        "gamers",
        "developers",
        "realtors",
        "contractors",
        "movers",
        "shakers",
        "humans"
      ]
      var head = $('h1[class*="HomePageTitle"]');
      var word = $('#HomeAnimatedHead');
      var mark = $('#Mark');
      var n = -1;
      const headAnim = setInterval(function() {
          n++;
          if (n >= wordList.length - 1)
          {
            word.addClass('last');
            mark.addClass('period').text('.');
          }
          if (n >= wordList.length) {
            clearInterval(headAnim);
            return true;
          }
          var w = wordList[n];
          word.hide();
          word.html("<div>"+w+"</div>");
          if (n >= wordList.length - 1) {
              word.fadeIn(3000);
          } else {
            word.fadeIn();
          }
        }, 800);

        function addPageType() {
          // Add page type to main element

          // short menus on everything but home page
          $('#site-header').addClass("scroll");

          if ( $('article').length ) {
            $('#root').removeClass().addClass('archive');
          } else {
            $('#root').removeClass().addClass('page');
          }
          $('main').ready(function() {
            if ( $('content').attr('data-ishome') ) {
              $('#root').addClass('home');
              $('#site-header').removeClass("scroll");
            }
            if ( $('main > div').attr('data-isportfolio') ) {
              $('#root').addClass('portfolio');
            }
            if ( $('main > div').attr('data-isblog') ) {
              $('#root').addClass('blog');
            }
          });
        };
        addPageType();

        function addArrowAction() {
          //for portfolio and sliders
          var idx = 0;
          var numArticles = $('article').length;
          $('.arrow.right').click(function() {
              $('article').removeClass('active')
              idx++;
              if (idx >= numArticles) idx = 0;
              $('.idx-' + idx).addClass('active');
          });

          $('.arrow.left').click(function() {
              $('article').removeClass('active')
              idx--;
              if (idx <= 0) idx = numArticles-1;
              $('.idx-' + idx).addClass('active');
          });
      };
      addArrowAction();

        // set the first blog or portfolio item to active
        $('.idx-0').addClass('active');

        //portfolio slider observer
        let observer = new MutationObserver(
          checkArticles => {
            var idx = 0,
            numArticles = $('article').length;
            $('.idx-' + idx).addClass('active');
            if ( $('content').attr('data-ishome') ) {
              $('#root').addClass('home');
            };
            $('img').ready(function(){
              $('figure').addClass("loaded").fadeIn();
            });
            addPageType();
            addArrowAction();
            console.log("Number of Articles: ", numArticles);
          }
        );
        observer.observe(main, {
          childList: true,
          characterDataOldValue: true, // pass old data to callback
        });

        // Scroll effects on home page
        $(document).scroll(function() {
          if ( $('#root').hasClass('home')  ) {
            if ( $(this).scrollTop() > 80 ) {
              $('#site-header').addClass("scroll");
            } else {
              $('#site-header').removeClass("scroll");
            };
          };
        });


  });//document.ready

  $(window).ready(function() {
      //stuff to do when everything is loaded
      $('img').ready(function(){
        $('figure').addClass("loaded").fadeIn();
      });
      $('.loader *').ready(function() {
        setTimeout(function() {
          console.log("Page Loaded!");
          $('.loader').fadeOut();
         }, 1000);
      });
      // PAGE adjustments and modifications
      $('div[class*="EntryContent"]').addClass('entry-content');

    });//window.ready

})

  return (
    <>

    </>
  )
};

export default JCW;
