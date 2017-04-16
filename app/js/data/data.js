var data = {
  init: function(){},
  set: function(property, data){
    data.model[property] = data;
    //refresh view
  },
  get: function(property){
    return data.model[property];
  },
  model:{
    users: [
      {
        name: 'John Doe',
        desc: 'blah blah blah',
        id: '111-111-111'
      }
    ],
    groups: [],
    articles: []
  },
  view: {}
}
