
var packrat = {
  url: 'http://localhost:3000',


  ajax: function (config, cb) {
    $.ajaxSetup({
      xhrFields: {
        withCredentials: true
      }
    });
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });

  },

  register: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/signup',
      contentType: 'application/json',
      data: JSON.stringify(credentials)
      // dataType: 'text'
    }, callback);
    console.log("success");
  },

  login: function (credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json',
      data: JSON.stringify(credentials)
      // dataType: 'json'
    }, callback);
    console.log(credentials);
  },

  showfiles: function(images, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/images',
      contentType: 'application/json',
      data: JSON.stringify(images)
    }, callback);
  },

  delete: function(image, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/images',
      contentType: 'application/json',
      data: JSON.stringify(image)
    }, callback);
  },

  logout: function (callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/logout',
      contentType: 'application/json',
      // dataType: 'json'
    }, callback);
    console.log("success");
  }
};