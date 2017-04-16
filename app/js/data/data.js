var data = {
  init: function(){},
  set: function(property, data){
    data.model[property] = data;
    data.updateView();
  },
  get: function(property){
    return data.model[property];
  },
  updateView: function(){
    for(prop in data.model){
      data.view[prop] = data.model[prop];
    }
  },
  model:{
    users: [],
    groups: [],
    articles: []
  },
  view: {}
}
