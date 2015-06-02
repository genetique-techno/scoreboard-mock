
var Game = Backbone.Model.extend({
	// Creates constructor for Model
	defaults: {
		id: '',
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
		console.log(data);
		return data.map( function (item, idx) {
			return {
				Game_Date: this.friendlyDate(item.Game_Date),
				Game_Time: item.Game_Time,
				Status: item.Status,
				HomeTeam: item.HomeTeam._,
				HScore: item.HScore,
				AScore: item.AScore,
				AwayTeam: item.AwayTeam._
			};
		}, this);
	},
	friendlyDate: function (date) {
		// given input string 'MM/DD/YYYY', returns string 'Day, Month Date, Year'
		var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var exp = /(\d+)\/(\d+)\/(\d+)/g;
		var result = exp.exec(date);
		var parsed = new Date(result[3], result[1], result[2]);
		return pretty_date = day[parsed.getDay()] + ', ' + month[parsed.getMonth()] + ' ' + parsed.getDate() + ', ' + result[3];
	}
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
		this.collection.forEach( function (item) {
			var r = this.tmpl(item.attributes);
			this.$el.append(r);
		}, this);

		return this;  // allows for chained calls
	}

});

var games = new Games();  // instance of Games collection
var view = new View({ collection: games });  // instance of View
window.setInterval(function () {view.collection.fetch()}, 10000);
