mock-endpoint
=============

This is a mock endpoint that can be used to build a dynamic league score board.

### Installation

- Clone this repository  
  `git clone https://github.com/mobilereactor/mock-endpoint.git`
- Install `jQuery` into your project. Download [here](https://github.com/jquery/jquery)  
  `<script src='path/to/jquery.js'></script>`
- Install `Mockjax` into your project after `jQuery`. Download [here](https://github.com/appendto/jquery-mockjax)  
  `<script src='path/to/jquery.mockjax.js'></script>`
- Install `server.js` into your project (included in this repo)  
  `<script src='path/to/server.js'></script>`

### Usage

Any request sent to the URL `/schedule/week/1/` via `jQuery` Ajax methods will be intercepted by Mockjax. Note that all Backbone server calls (i.e.; `model.fetch`) are powered by jQuery's Ajax method.

### Response

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
