// init Masonry
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  
  // layout Masonry after each image loads
  
  $('.grid').imagesLoaded( function() {
    $grid.masonry('layout');
  });
    
    