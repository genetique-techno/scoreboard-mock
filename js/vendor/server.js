/*
 *
 * Don't modify this file.
 *
 * Configures a mock server at the URL:
 * `schedule/week/1`
 *
 */

(function() {

  $.mockjax({

    // The last slash is optional
    url: /^\/schedule\/week\/1\/?$/,
    responseTime: 500,
    response: function( settings ) {
      var randomIndex = randomInt( 0, 10 );
      var spliceLimit = 15 - randomIndex;
      var spliceAmount = randomInt( 0, spliceLimit );
      var schedules = baseSchedule.splice( randomIndex, spliceAmount );

      schedules.forEach(function(value, index, array) {
        value.AScore = randomInt( 0, 40 );
        value.HScore = randomInt( 0, 40 );
      });
      var responseText = {
        schedule: baseSchedule
      };
      this.responseText = responseText;
    }
  });

  var randomInt = function( min, max ) {
    return Math.floor( Math.random() * (max-min+1) + min );
  };

  var baseSchedule = [
    {"Schedule_id":"4175","Game_Date":"09/05/2013","Game_Time":"08:30 PM","Status":"FINAL","Location":"Sports Authority Field at Mile High Stadium","AScore":"27","HScore":"49","AwayTeam":{"_":"Baltimore","AwayTeamid":"065"},"HomeTeam":{"_":"Denver","HomeTeamid":"067"},"SeasonType":"Regular"},
    {"Schedule_id":"4176","Game_Date":"09/08/2013","Game_Time":"01:00 PM","Status":"FINAL","Location":"Ralph Wilson Stadium","AScore":"23","HScore":"21","AwayTeam":{"_":"New England","AwayTeamid":"077"},"HomeTeam":{"_":"Buffalo","HomeTeamid":"062"},"SeasonType":"Regular"},
    {"Schedule_id":"4177","Game_Date":"09/08/2013","Game_Time":"01:00 PM","Status":"FINAL","Location":"Heinz Field","AScore":"16","HScore":"9","AwayTeam":{"_":"Tennessee","AwayTeamid":"070"},"HomeTeam":{"_":"Pittsburgh","HomeTeamid":"082"},"SeasonType":"Regular"},
    {"Schedule_id":"4179","Game_Date":"09/08/2013","Game_Time":"01:00 PM","Status":"FINAL","Location":"MetLife Stadium","AScore":"17","HScore":"18","AwayTeam":{"_":"Tampa Bay","AwayTeamid":"087"},"HomeTeam":{"_":"NY Jets","HomeTeamid":"080"},"SeasonType":"Regular"},
    {"Schedule_id":"4180","Game_Date":"09/08/2013","Game_Time":"01:00 PM","Status":"FINAL","Location":"EverBank Field","AScore":"28","HScore":"2","AwayTeam":{"_":"Kansas City","AwayTeamid":"072"},"HomeTeam":{"_":"Jacksonville","HomeTeamid":"090"},"SeasonType":"Regular"},
    {"Schedule_id":"4182","Game_Date":"09/08/2013","Game_Time":"01:00 PM","Status":"FINAL","Location":"Soldier Field","AScore":"21","HScore":"24","AwayTeam":{"_":"Cincinnati","AwayTeamid":"064"},"HomeTeam":{"_":"Chicago","HomeTeamid":"063"},"SeasonType":"Regular"},
    {"Schedule_id":"4183","Game_Date":"09/08/2013","Game_Time":"01:00 PM","Status":"FINAL","Location":"FirstEnergy Stadium","AScore":"23","HScore":"10","AwayTeam":{"_":"Miami","AwayTeamid":"075"},"HomeTeam":{"_":"Cleveland","HomeTeamid":"120"},"SeasonType":"Regular"},
    {"Schedule_id":"4185","Game_Date":"09/08/2013","Game_Time":"01:00 PM","Status":"FINAL","Location":"Lucas Oil Stadium","AScore":"17","HScore":"21","AwayTeam":{"_":"Oakland","AwayTeamid":"073"},"HomeTeam":{"_":"Indianapolis","HomeTeamid":"071"},"SeasonType":"Regular"},
    {"Schedule_id":"4191","Game_Date":"09/09/2013","Game_Time":"10:20 PM","Status":"FINAL","Location":"Qualcomm Stadium","AScore":"31","HScore":"28","AwayTeam":{"_":"Houston","AwayTeamid":"151"},"HomeTeam":{"_":"San Diego","HomeTeamid":"083"},"SeasonType":"Regular"},
    {"Schedule_id":"4178","Game_Date":"09/08/2013","Game_Time":"01:00 PM","Status":"FINAL","Location":"Mercedes-Benz Superdome","AScore":"17","HScore":"23","AwayTeam":{"_":"Atlanta","AwayTeamid":"061"},"HomeTeam":{"_":"New Orleans","HomeTeamid":"078"},"SeasonType":"Regular"},
    {"Schedule_id":"4181","Game_Date":"09/08/2013","Game_Time":"01:00 PM","Status":"FINAL","Location":"Bank of America Stadium","AScore":"12","HScore":"7","AwayTeam":{"_":"Seattle","AwayTeamid":"085"},"HomeTeam":{"_":"Carolina","HomeTeamid":"089"},"SeasonType":"Regular"},
    {"Schedule_id":"4184","Game_Date":"09/08/2013","Game_Time":"01:00 PM","Status":"FINAL","Location":"Ford Field","AScore":"24","HScore":"34","AwayTeam":{"_":"Minnesota","AwayTeamid":"076"},"HomeTeam":{"_":"Detroit","HomeTeamid":"068"},"SeasonType":"Regular"},
    {"Schedule_id":"4186","Game_Date":"09/08/2013","Game_Time":"04:25 PM","Status":"FINAL","Location":"Candlestick Park","AScore":"28","HScore":"34","AwayTeam":{"_":"Green Bay","AwayTeamid":"069"},"HomeTeam":{"_":"San Francisco","HomeTeamid":"084"},"SeasonType":"Regular"},
    {"Schedule_id":"4187","Game_Date":"09/08/2013","Game_Time":"04:25 PM","Status":"FINAL","Location":"Edward Jones Dome","AScore":"24","HScore":"27","AwayTeam":{"_":"Arizona","AwayTeamid":"086"},"HomeTeam":{"_":"St. Louis","HomeTeamid":"074"},"SeasonType":"Regular"},
    {"Schedule_id":"4188","Game_Date":"09/08/2013","Game_Time":"08:30 PM","Status":"FINAL","Location":"AT&T Stadium","AScore":"31","HScore":"36","AwayTeam":{"_":"NY Giants","AwayTeamid":"079"},"HomeTeam":{"_":"Dallas","HomeTeamid":"066"},"SeasonType":"Regular"},
    {"Schedule_id":"4189","Game_Date":"09/09/2013","Game_Time":"06:55 PM","Status":"FINAL","Location":"FedEx Field","AScore":"33","HScore":"27","AwayTeam":{"_":"Philadelphia","AwayTeamid":"081"},"HomeTeam":{"_":"Washington","HomeTeamid":"088"},"SeasonType":"Regular"}
  ];

})();

