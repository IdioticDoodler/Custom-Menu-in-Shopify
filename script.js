//If you want dropdown the child
<script>
    $(document).ready(function() {
    $("ul.sub-menu").hide(); /*hides the submenus*/
    $(".ctm-has-child a").click(function() {
        $(this).next("ul.sub-menu").slideToggle(400) /*opens the child submenu*/
        .siblings('ul.sub-menu:visible').slideUp(400); /*closes any opened ones*/
      
       	$(".down").hide();
        });
    });
  </script>
