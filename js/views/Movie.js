MovieApp.Views.MovieView = Backbone.View.extend({




  initialize: function(options) {
    if (options.model)
      this.model = options.model;
  },

  render: function(){
    console.log(this) //movie object
    var poster = $.ajax({
      type: 'GET',
      url: this.model.attributes.Poster,
      success: function(result){
        i = new Image();
        i.src = result;


        console.log(result);
      }
    });
    // var parsed_data = JSON.parse(poster);
    // console.log(parsed_data)
    // console.log(poster);
    this.$el.html(this.model.attributes.Title+"("+this.model.attributes.Year+")" + this.model.attributes.Plot);
    return this;
  }
});