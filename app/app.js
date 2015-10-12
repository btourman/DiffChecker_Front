$(document).ready(function() {
  function AppViewModel() {
    var self = this;
    this.url1 = ko.observable();
    this.url2 = ko.observable();

    this.sendUrl = function() {
      var jqxhr = $.get("http://127.0.0.1:3000/test?url1=" + self.url1() + "&url2=" + self.url2(), function(tree) {
          alert("success");
          $('#tree1').treeview({
            data: tree[0].name === self.url1() ? tree[0].children : tree[1].children
          });
          $('#tree2').treeview({
            data: tree[0].name === self.url2() ? tree[0].children : tree[1].children
          });
        })
        .fail(function() {
          alert("error");
        });
    }
  }

  // Activates knockout.js
  ko.applyBindings(new AppViewModel());

});