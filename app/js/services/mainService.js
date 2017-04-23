var service = {};

service.users = {
  update: function(callback){
    network.get({
      url: '/users',
      callbacks: {
        success: function(d){
          data.users = d;

          if(callback){
            callback();
          }
        },
        error: function(){
          console.error('error loading');
        }
      }
    });
  }
};

service.bookmarks = {
  update: function(callback){
    network.get({
      url: '/bookmarks',
      callbacks: {
        success: function(d){
          data.bookmarks = d;

          if(callback){
            callback();
          }
        },
        error: function(){
          console.error('error loading');
        }
      }
    });
  }
};

service.groups = {
  update: function(callback){
    network.get({
      url: '/groups',
      callbacks: {
        success: function(d){
          data.groups = d;

          if(callback){
            callback();
          }
        },
        error: function(){
          console.error('error loading');
        }
      }
    });
  }
};
