scoreboard-mock
=============

This is a bootstrap project to build a dynamic league score board using [Backbone](https://github.com/jashkenas/backbone).

### Installation

Clone or fork this repository.

```
git clone https://github.com/mobilereactor/scoreboard-mock.git
```

### Project

Construct an NFL scoreboard for the first week of the 2013 season. Build the scoreboard so that it updates with new data every 10 seconds.

The two files `css/style.css` and `js/app.js` are empty files where you can add your own code. Feel free to add more if you need to.

### Server

#### Request

Make your requests to `/schedule/week/1/` via `jQuery` Ajax methods. Note that all Backbone server calls (i.e.; `model.fetch`) are powered by jQuery's Ajax method.

#### Response

The response is an object with a single property: `schedule`. The value of this property is an array.

Each entry in the array is an object with the following properties:

- `AScore` - The away team's score
- `HScore` - The home team's score
- `Game_Date` - Self-explanatory, I think
- `Game_Time` - See above
- `Location` - The stadium the game is taking place in
- `Schedule_id` - A unique identifier for this game
- `SeasonType` - A string representing the type of game
- `Status` - The status of the game
- `AwayTeam` - An object representing the away team
- `HomeTeam` - An object representing the home team

I encourage you to look into the `AwayTeam` and `HomeTeam` objects to determine their structure.

### Design

The design of the scoreboard should match [this wireframe](https://gomockingbird.com/mockingbird/#cm4sbgp).

### Guidelines

Each game object returned from the server should be represented by a Backbone model. All of the game objects together should be in a Backbone Collection. Each model needs to render a View for it's data, and each View should render from an Underscore template.

You'll notice that each call to the server returns different data. Be sure to make your interface update with changes.

Also know that the endpoint is unreliable. Don't depend on any specific number of games being returned.

### Due Date

There's no deadline; take your time and make the best project you can make it.

### Sharing Your Work

Once you're finished, publish your code to Github and mail us back the link.

### Browser support

This bootstrapped repository only works on Chrome, Safari, Firefox, Opera, IE9+. Don't worry too much about browser compatibility when writing your code.

### Questions?

Feel free to send us an email.