var network = {
  get: function(options, callbacks){
    var xhttp = new XMLHttpRequest();

    xhttp.onload = function(e) {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var response = JSON.parse(xhttp.response);

          if(response.status === 'SUCCESS'){
            console.log(response); //expect json
            callbacks.success(response.data);
          }else{
            console.error(response);
            callbacks.error();
          }
        }
    };

    xhttp.onerror = function (e) {
      console.error(xhr.statusText);
      callbacks.error();
    };

    if(config.offline){
      xhttp.open("GET", options.url, true);
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
            console.log(response); //expect json
            callbacks.success(response.data);
          }else{
            console.error(response);
            callbacks.error();
          }
        }
    };

    xhttp.onerror = function (e) {
      console.error(xhr.statusText);
      callbacks.error();
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
