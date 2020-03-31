   
   $(document).ready(function()
   {
      $("a[href*='#welcome']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_welcome').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#about']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_about').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#links']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_links').offset().top }, 600, 'easeOutSine');
      });
      $(document).on('click','.headerMenu-navbar-collapse.in',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('#preloader').remove();}
   });
   $(window).on('load', function()
   {
      $('#preloader').remove();
   });
       xSearch("id=my-search-26764196"); 
      