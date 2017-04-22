var network = {
  get: function(options){
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function(e) {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var response = JSON.parse(xhttp.response);

        if(response.status === 'SUCCESS'){
          console.log(response.data);
          options.callbacks ? options.callbacks.success(response.data) : console.log('no success callback');
        }else{
          console.error(response);
          options.callbacks ? options.callbacks.error() : console.log('no error callback');
        }
      }
    };

    xhttp.onerror = function (e) {
      console.error(xhr.statusText);
      options.callbacks ? options.callbacks.error() : console.log('no error callback');
    };

    if(config.offline){
      xhttp.open("GET", '/js/data/offline' + options.url + '.json', true);
      xhttp.send();
    }else{
      xhttp.open("GET", config.urls[config.env].network + options.url, true);
      xhttp.send();
    }
  },
  set: function(options){
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function(e) {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var response = JSON.parse(xhttp.response);

          if(response.status === 'SUCCESS'){
            options.callbacks.success(response.data);
          }else{
            console.error(response);
            options.callbacks ? options.callbacks.error() : console.log('no error callback');
          }
        }
    };

    xhttp.onerror = function (e) {
      console.error(xhr.statusText);
      options.callbacks ? options.callbacks.error() : console.log('no error callback');
    };

    if(config.offline){
      xhttp.open("POST", options.url, false); // third parameter indicates sync xhr. :(
      xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhttp.send();
    }else{
      xhttp.open("POST", config.urls[config.env].network + options.url, false); // third parameter indicates sync xhr. :(
      xhttp.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhttp.send();
    }

  }
}
