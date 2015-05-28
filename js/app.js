
function friendlyDate(date) {
	// given input string 'MM/DD/YYYY', returns string 'Day, Month Date, Year'
	var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var exp = /(\d+)\/(\d+)\/(\d+)/g;
	var result = exp.exec(date);
	var parsed = new Date(result[3], result[1], result[2]);

	return pretty_date = day[parsed.getDay()] + ', ' + month[parsed.getMonth()] + ' ' + parsed.getDate() + ', ' + result[3];
}

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
	/*parse: function (response) {
		var result;
		for (var i = 0; i < response.length; i++) {
			result[i] = response.models[i].attributes;
		}
		return result;
	}
	*/

});

var View = Backbone.View.extend({
	// Creates constructor for View
	el: $('#container'),
	initialize: function () {
		this.listenTo(this.collection, 'sync change', this.render);
		this.collection.fetch();
		var tmplText = $('#game-thing-tmpl').html();
		var tmpl = _.template(tmplText);
	},
	render: function () {
		this.$el.empty();
		for (var i = 0; i < this.collection.length; i++) {
			/* var Game_Date = friendlyDate(this.collection.at(i).attributes.Game_Date);
			var Game_Time = this.collection.at(i).attributes.Game_Time;
			var Status = this.collection.at(i).attributes.Status;
			var HomeTeam = this.collection.at(i).attributes.HomeTeam._;
			var HScore = this.collection.at(i).attributes.HScore;
			var AScore = this.collection.at(i).attributes.AScore;
			var AwayTeam = this.collection.at(i).attributes.AwayTeam._;
			this.tmpl
			*/

			
			var html = '<div class=\"thing_header\"><div class=\"date\">';
			html += friendlyDate(this.collection.at(i).attributes.Game_Date) + ' at ';
			html += this.collection.at(i).attributes.Game_Time + '</div><div class=\"status\">';
			html += this.collection.at(i).attributes.Status + '</div></div><div class=\"thing\"><div class=\"hteam">';
			html += this.collection.at(i).attributes.HomeTeam._ + '</div><div class=\"hscore\">';
			html += this.collection.at(i).attributes.HScore + '</div><div class=\"ascore\">';
			html += this.collection.at(i).attributes.AScore + '</div><div class=\"ateam\">';
			html += this.collection.at(i).attributes.AwayTeam._ + '</div></div>';
			this.$el.append(html);
			
		};
		return this;  // allows for chained calls
	}

});

var games = new Games();  // instance of Games collection
var view = new View({ collection: games });  // instance of View
var fetch = function () {
	// fetching function expression
	games.fetch();
};
window.setInterval(fetch, 10000);  // fetches every 10 seconds
