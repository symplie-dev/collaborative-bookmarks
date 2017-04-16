var services = {};

services.users = {
  update: function(){
    return data.users;
  },
  getAll: function(){
    network.get({
      url: '/users',
      callbacks: {
        success: function(data){
          console.log(data);
        },
        error: function(){
          console.error('error loading');
        }
      }
    });
  },
  get: function(id){
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
};

services.groups = {
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
};

services.articles = {
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
};
