MovieApp.Views.MovieView = Backbone.View.extend({




  initialize: function(options) {
    if (options.model)
      this.model = options.model;
  },

  render: function(){
    this.$el.html("<h1>" + this.model.attributes.Title + "</h1>" + "<p>"+this.model.attributes.Year+"</p>" + "<div class = 'plot'>" + this.model.attributes.Plot) + "</div>" + this.$el.append("<div><img src=" + this.model.attributes.Poster + "/></div>");
    // this.$el.append("<div><img src=" + this.model.attributes.Poster + "/></div>");
    return this;
  }
});