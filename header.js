<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-60159227-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-60159227-1');
</script>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 <script>
   $(document).ready(function () {
       $(window).scroll(function () {
           if ($(this).scrollTop() > 100) {
               $('.scrollup').fadeIn();
           } else {
               $('.scrollup').fadeOut();
           }
       });
       $('.scrollup').click(function () {
           $("html, body").animate({
               scrollTop: 0
           }, 600);
           return false;
       });
   });
 </script>


<meta name="viewport" content="width=device-width, user-scalable=yes">

<script>
$( document ).ready(function() {
    $(".Header-nav--primary .Header-nav-item--folder:last-child .Header-nav-folder ").append( $( "#footerBlocksTop" ));
  });
  
</script>
