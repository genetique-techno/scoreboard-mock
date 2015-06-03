
var Game = Backbone.Model.extend({
	// Creates constructor for Model
	defaults: {
		Game_Date: '',
		Game_Time: '',
		Status: '',
		HomeTeam: '',
		HScore: '',
		AScore: '',
		AwayTeam: ''
	}
});

var Games = Backbone.Collection.extend({
	// Creates constructor for Collection
	url: '/schedule/week/1',
	model: Game,
	parse: function (data) {
		return data.map( function (item, idx) {
			var date = util.friendlyDate(item.Game_Date);
			return {
				Game_Date: date,
				Game_Time: item.Game_Time,
				Status: item.Status,
				HomeTeam: item.HomeTeam._,
				HScore: item.HScore,
				AScore: item.AScore,
				AwayTeam: item.AwayTeam._
			};
		});
	},
});

var View = Backbone.View.extend({
	// Creates constructor for View
	el: $('#container'),
	initialize: function () {
		var tmplText = $('#game-thing-tmpl').html();
		this.tmpl = _.template(tmplText);		
		this.listenTo(this.collection, 'sync change', this.render);
		this.collection.fetch();
	},
	render: function () {
		this.$el.empty();
		if (this.collection.length == 0) {
			this.$el.append('<p class=\"thing_header\">No Games for this week</p>');
		} else {
			this.collection.forEach( function (item) {
				var r = this.tmpl(item.attributes);
				this.$el.append(r);
			}, this);
			return this;  // allows for chained calls
		};
	}

});

var games = new Games();  // instance of Games collection
var view = new View({ collection: games });  // instance of View
window.setInterval(function () {games.fetch()}, 10000);
