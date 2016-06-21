MovieApp.Views.Search = Backbone.View.extend({


  template: "<input id = 'new-search' type = 'text' placeholder = 'search'> \
            <button>Search Movie</button> \
            <div id = 'movie-list'></div>",

  initialize: function(options) {},

  render: function()
  {
      this.$el.html(this.template);
      return this;
  },

  getMovies: function(){
    if (!this.$el.find('#new-search').val().trim()){
      return;
    }
    else {
      var title = this.$el.find('input').val();
    }
    // var movies = new MovieApp.Collections.Movies({title: title});
    var movies = new MovieApp.Models.Movies({title: title})
    movies.fetch({success: this.renderMovies.bind(this)});

    // var poster = $.ajax {
    //   url: this.model.attributes.Poster;
    // }
  },

  newSearch: function(e){
    if (e.which !== 13 || !this.$el.find('#new-search').val().trim()){
      return;
    }
    this.getMovies();

  },

  renderMovies: function(movies){
    console.log('renderMovies hit')
    console.log(this.input)
    var movieview;

    movieview = new MovieApp.Views.MovieView({model: movies});
    this.$el.find('#movie-list').html(movieview.render().el);
    this.$el.find('#new-search').val('');
  },

  events: {
    'click button' : 'getMovies',
    'keypress #new-search' : 'newSearch'
  }
});