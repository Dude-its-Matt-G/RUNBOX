(function() {
    var $root, $sections,;
    $root = $('.UBER-container-div');
  
    $sections = $('.APP');
  
    $('a').on('click', function() {
      var $next;
    $next = $sections.find($(this).attr('href'));
      $root.animate({scrollLeft: $next.offset().left}, 500);
      return false;
    });
  
  }).call(this);