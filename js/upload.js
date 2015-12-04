$(document).ready(function(){


$('#upload').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);

    formData.append('name', $("#filename").val());

    $.ajax({
       xhrFields: {
        withCredentials: true
      },
      url: 'http://localhost:3000/images',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData
    }).done(function(data) {
      console.log((JSON.stringify(data, null, 2)));

      $(".files").append('<li>' + data.url + '</li>');
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });

  });
});
