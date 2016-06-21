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
    // console.log("start getMovies");
    if (!this.$el.find('#new-search').val().trim()){
      return;
    }
    else {
      var title = this.$el.find('input').val();
    }

    var movies = new MovieApp.Models.Movies({title: title})
    movies.fetch({success: this.renderMovies.bind(this)});

    // console.log("Ending getMovies");
  },

  newSearch: function(e){
    // console.log("start newSearch");
    if (e.which !== 13 || !this.$el.find('#new-search').val().trim()){
      return;
    }
    this.getMovies();
    // console.log("newSearch ending")

  },

  renderMovies: function(movies){
    // console.log('renderMovies hit');
    // console.log(this.input)
    var movieview;

    movieview = new MovieApp.Views.MovieView({model: movies});
    this.$el.find('#movie-list').html(movieview.render().el);
    this.$el.find('#new-search').val('');
    // console.log('Ending renderMovies hit');

  },

  events: {
    'click button' : 'getMovies',
    'keypress #new-search' : 'newSearch'
  }
});