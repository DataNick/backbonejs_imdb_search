MovieApp.Views.Search = Backbone.View.extend({

  template: "<input type = 'text' placeholder = 'search'> \
            <button>Search Movie</button> \
            <ul id = 'movie-list'></ul>",

  initialize: function(options) {},

  render: function()
  {
      this.$el.html(this.template);
      return this;
  },

  getMovies: function(){

    var title = this.$el.find('input').val();
    var movies = new MovieApp.Collections.Movies({title: title});

    movies.fetch({success: this.renderMovies.bind(this)});
  },

  renderMovies: function(movies){
    var movieview;

    for (var n in movies.models) {
      movieview = new MovieApp.Views.MovieView({model: movies.models[n]});
      this.$el.find('#movie-list').append(movieview.render().el);
    }
  },

  events: {
    'click button' : 'getMovies'
  }
});