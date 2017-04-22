construct.views.groupsList = function(o){
  return '<li class="list-group-item">' +
    '<span class="badge">' + o.newCount + '</span>' +
    o.name +
  '</li>';
}
