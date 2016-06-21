MovieApp.Views.MovieView = Backbone.View.extend({

  initialize: function(options) {
    if (options.model)
      this.model = options.model;
  },

  render: function(){
    this.$el.html("<div class = 'row'><div class = 'col s5'><h2>" + this.model.attributes.Title + "</h2>" + "<h5>Released: "+this.model.attributes.Year+"</h5>" + this.model.attributes.Plot + "</div>" + "<img class = 'col s7' src=" + this.model.attributes.Poster + "/></div>");
    // this.$el.append("<div><img src=" + this.model.attributes.Poster + "/></div>");
    return this;
  }
});