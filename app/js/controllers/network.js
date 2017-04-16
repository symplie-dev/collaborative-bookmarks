var network = {
  init: function(){

  },
  users: {
    getUsers: function(){
      network.get({
        url: '/users/',
        callbacks: {
          success: function(data){
            data.set('users', data)
          },
          error: function(){
            console.error('error loading');
          }
        }
      });
    },
    getUser: function(id){
      network.get({
        url: '/user/' + id,
        callbacks: {
          success: function(data){
            // data.set('users', data)
          },
          error: function(){
            console.error('error loading');
          }
        }
      });
    }
  },
  groups: {
    getGroups: function(){
      network.get({
        url: '/groups/' + id,
        callbacks: {
          success: function(data){
            data.set('groups', data)
          },
          error: function(){
            console.error('error loading');
          }
        }
      });
    },
    getGroup: function(id){
      network.get({
        url: '/groups/' + id,
        callbacks: {
          success: function(data){
            // data.set('groups', data)
          },
          error: function(){
            console.error('error loading');
          }
        }
      });
    }
  },
  articles: {
    getArticles: function(){
      network.get({
        url: '/articles/',
        callbacks: {
          success: function(data){
            data.set('articles', data)
          },
          error: function(){
            console.error('error loading');
          }
        }
      });
    },
    getArticle: function(id){
      network.get({
        url: '/articles/' + id,
        callbacks: {
          success: function(data){
            // data.set('users', data)
          },
          error: function(){
            console.error('error loading');
          }
        }
      });
    }
  },

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

    xhttp.open("GET", config.urls[config.env].network + options.url, true);
    xhttp.send();
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

    client.open("POST", config.urls[config.env].network + options.url, false); // third parameter indicates sync xhr. :(
    client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhttp.send();
  }
}
