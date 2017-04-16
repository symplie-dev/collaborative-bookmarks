controllers.users = {
  update: function(){
    service.users.update();
  },
  get: function(){
    // return services.users.getUsers();
  },
  getAll: function(){
    return data.users || [];
  },
  getFromServer: function(){
    // return services.users.getUsers();
  },
  getAllFromServer: function(){
    return services.users.getAll() || [];
  }
}
