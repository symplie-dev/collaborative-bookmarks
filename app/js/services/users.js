services.users = {
  update: function(){
    return data.users;
  },
  getAll: function(){
    network.get({
      url: '/users/',
      callbacks: {
        success: function(data){
          data.set('users', data);
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
