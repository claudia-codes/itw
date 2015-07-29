$(function() {
    $('.main-container').on('scroll', function() {
        var test = $("[class~='animate-left']");
        for(var i = 0; i < test.length; i++) {
          var top = test.offset().top;
          if (top !== 0 && test[i].hasClass('left-to-right') === false) {
              test[i].addClass('left-to-right');
          }
        };
    });
});