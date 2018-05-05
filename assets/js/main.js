(function($) {
  'use strict';

  var date  = new Date();
  var day   = date.getDate();
  var month = date.getMonth() + 1;
  var year  = date.getFullYear();

  $('#date').attr('value', [day, month, year].join('/'));

  $('#contact-form').on('submit', function(event) {
    event.preventDefault();
    var $alert = $('body').find('.alert');

    var $this = $(this);
    var data  = $this.serialize();
    console.log(data);

    var showAlert = function() {
      $alert.slideDown();

      $('input, textarea').not('[type="submit"]').val('').attr('placeholder', '');
    };

    $.post('//docs.google.com/forms/d/e/1FAIpQLSck8RtG8qlqHq5Zf7fmCNx8WH1xJ1BsuTAkRp4ImHJjHWwRwA/formResponse', data)
      .done(showAlert)
      .fail(showAlert);
  });
})(jQuery);
