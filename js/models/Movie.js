MovieApp.Models.Movies = Backbone.Model.extend({

 initialize: function(options){
   if (options.title)
     this.title = options.title;
 },

 url: function(){
   return "http://www.omdbapi.com/?t=" + this.title;
 },

 parse: function(response){
  // console.log(response.Title)
   return response;
 }

});