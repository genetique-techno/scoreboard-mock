// utility functions
var util = util || {};

( function () {
	
	util.friendlyDate = function (date) {
			// given input string 'MM/DD/YYYY', returns string 'Day, Month Date, Year'
			var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			var exp = /(\d+)\/(\d+)\/(\d+)/g;
			var result = exp.exec(date);
			var parsed = new Date(result[3], result[1], result[2]);
			return pretty_date = day[parsed.getDay()] + ', ' + month[parsed.getMonth()] + ' ' + parsed.getDate() + ', ' + result[3];	
	};
	
})();
	