construct.views.bookmarkCard = function(o){
  return '<div uuid="' + o.uuid + '" class="panel panel-default">' +
    '<div class="panel-body">' +
      '<div>' +
        '<b>' + o.name + '</b>' +
        '<span class="pull-right glyphicon glyphicon-remove clickable_space" data-toggle="collapse" data-parent="#the_items" data-target="#n_1">' +
      '</div>' +
      '<div>' +
        '<a href="' + o.linkRef + '">' + o.linkText + '</a>' +
      '</div>' +
    '</div>' +
  '</div>';

  // return s;
}
