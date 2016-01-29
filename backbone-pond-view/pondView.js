var PondView = Backbone.View.extend({
	/* Fill out your solution here */
  tagName: 'table',

  initialize:function() {
    this.render();
    this.collection.on("change:name", function() {
      this.render();
    }.bind(this));
  },



  _template: _.template("<tr><td><%=name%></td><td>" + "<image src='<%=image%>'></td></tr"),


  render:function() {
    this.$el.empty();
    var self = this;
    this.collection.map(function(fish) {

      // var fishHtml = "<div>fdsfsd"+ fish.get("name") + "</div";
      var fishHtml = self._template(fish.attributes);
      self.$el.append(fishHtml);
    });
  }

});
