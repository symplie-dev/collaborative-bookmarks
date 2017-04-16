services.groups: {
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
}
