(function ($) {
  'use strict';

  $('#contact-form').on('submit', function (event) {
    console.log('OK!');
    event.preventDefault();

    var $this = $(this);
    var data  = {};

    $this.find('[data-input="required"]').each(function () {
      var $this = $(this);

      var name = $this.attr('data-name');
      var val  = $this.val();

      data[name] = val;
    });

    $.post('//docs.google.com/forms/d/e/1FAIpQLSck8RtG8qlqHq5Zf7fmCNx8WH1xJ1BsuTAkRp4ImHJjHWwRwA/formResponse', data)
      .done(function () {
        alert('Enviado!');
      })
      .fail(function () {
        alert('Enviado!');
      })
    ;
  });

  console.log('JS Load.', (new Date()).getTime());
}(jQuery));
