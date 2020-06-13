var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
9;
var Game = (function () {
    function Game(output, input) {
        this.move = 0;
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createRoads();
        this.printWelcome();
    }
    Game.prototype.createRoads = function () {
        var garageforth = new Road("You are currently in the garage in Middelburg. You can either turn left to the Industrieweg or go ahead and enter the Industrieweg the other way.");
        var garageback = new Road("");
        var industriewegnorthforth = new Road("You are currently on the cross with the kleverskerkseweg. Would you like to take a left turn to the southwest or a right turn to the north east?");
        var industriewegnorthback = new Road("You are currently on the cross with the garage and the Industrieweg. Would you like to drive forward into the garage or turn right to the industrieweg?");
        var industriewegsouthforth = new Road("You are currently on the cross with the Nieuwe Kleverskerkseweg, would you like to go left or right?");
        var industriewegsouthback = new Road("You can either turn left to the industrieweg or right to the garage.");
        var kleverskerkseweg1southforth = new Road("You enter the roundabout, and see that the first exit is closed. Do you want to take a left turn to the Nieuwe Kleverskerkseweg or turn around?");
        var kleverskerkseweg1southback = new Road("You are driving on the kleverskerkseweg and can drive ahead or turn right to the Industrieweg.");
        var kleverskerkseweg2northforth = new Road("You are driving into a T junction. Would you like to go ahead and enter the Uijterschootweg or turn left for the kleverskerkseweg?");
        var kleverskerkseweg2northback = new Road("You are driving into a T junction. Would you like to go ahead on the kleverskerkseweg or turn left on the Industrieweg?");
        var kleverskerkseweg3northforth = new Road("There are some companies here, I don't think I need to be here. Lets turn back.");
        var kleverskerkseweg3northback = new Road("We are back at the T Junction. Should I turn left to the Uijterschootweg or right to the kleverskerkseweg?");
        var uijterschootweg1northforth = new Road("Should I stay on the uijterschootweg or turn left to the arnesteinkade?");
        var uijterschootweg1northback = new Road("Should I turn right or go ahead on the kleverskerkseweg?");
        var uijterschootweg2northforth = new Road("Should I turn left to the Arnesteinkade or drive ahead on the Uijterschootweg?");
        var uijterschootweg2northback = new Road("Should i turn right to the Arnesteinkade or drive ahead on the Uijterschootweg?");
        var uijterschootweg3northforth = new Road("should i turn left or right on the Nieuwe kleverskerkseweg?");
        var uijterschootweg3northback = new Road("Should I turn right to the Arnesteinkade or drive ahead on the Uijterschootweg?");
        var arnesteinkadeforth = new Road("They are very busy loading and unloading the ships so I better get moving out of their way. Shall I turn left or right on the uijterschootweg?");
        var arnesteinkadeback = new Road("Ahhhh, the harbor.... Jannie must be dropped-off around here.");
        var nwkleverskerkseweg1westforth = new Road("I've entered the roundabout, the second exit is closed so i can only go right or back. What should I do?");
        var nwkleverskerkseweg1westback = new Road("I'm at the Nieuwe kleverskerkseweg, should I turn let to the Industrieweg or keep driving on the Nieuwe kleverskerkseweg?");
        var nwkleverskerksewegdeadendforth = new Road("Here's autobedrijf P. de Hamer. Jannie should be somewhere around here...");
        var nwkleverskerksewegdeadendback = new Road("Should I go left or right on the Nieuwe kleverskerkseweg?");
        var nwkleverskerkseweg2eastforth = new Road("Should I go left to the Nieuwe kleverskerkseweg or drive ahead on it?");
        var nwkleverskerkseweg2eastback = new Road("Should I go right to the industrieweg or go ahead on the Nieuwe kleverskerkseweg?");
        var nwkleverskerkseweg3eastforth = new Road("Should I turn left on the Uijterschootweg or keep on driving ahead?");
        var nwkleverskerkseweg3eastback = new Road("Should I turn right to the Nieuwe kleverskerkseweg or keep driving ahead?");
        var nwkleverskerkseweg4eastforth = new Road("Should I turn right to the Kanaalweg or drive ahead on the Kanaalweg?");
        var nwkleverskerkseweg4eastback = new Road("Should I Turn right to the Uijterschootweg or keep on driving on the Nieuwe kleverskerkseweg?");
        garageforth.setMoves(industriewegnorthforth, industriewegsouthforth, null, null);
        garageback.setMoves(null, null, null, garageforth);
        industriewegnorthforth.setMoves(null, kleverskerkseweg1southforth, kleverskerkseweg2northforth, industriewegnorthback);
        industriewegnorthback.setMoves(garageback, null, industriewegsouthforth, industriewegnorthforth);
        industriewegsouthforth.setMoves(null, nwkleverskerkseweg2eastforth, nwkleverskerkseweg1westforth, industriewegsouthback);
        industriewegsouthback.setMoves(null, industriewegnorthforth, garageback, industriewegsouthforth);
        kleverskerkseweg1southforth.setMoves(null, nwkleverskerkseweg1westforth, null, kleverskerkseweg1southback);
        kleverskerkseweg1southback.setMoves(kleverskerkseweg2northforth, null, industriewegnorthback, kleverskerkseweg1southforth);
        kleverskerkseweg2northforth.setMoves(uijterschootweg1northforth, kleverskerkseweg3northforth, null, kleverskerkseweg2northback);
        kleverskerkseweg2northback.setMoves(kleverskerkseweg1southforth, industriewegnorthback, null, kleverskerkseweg2northforth);
        kleverskerkseweg3northforth.setMoves(null, null, null, kleverskerkseweg3northback);
        kleverskerkseweg3northback.setMoves(null, uijterschootweg1northforth, kleverskerkseweg2northback, kleverskerkseweg3northforth);
        uijterschootweg1northforth.setMoves(uijterschootweg2northforth, arnesteinkadeforth, null, uijterschootweg1northback);
        uijterschootweg1northback.setMoves(kleverskerkseweg2northback, null, kleverskerkseweg3northforth, uijterschootweg1northforth);
        uijterschootweg2northforth.setMoves(uijterschootweg3northforth, arnesteinkadeback, null, uijterschootweg2northback);
        uijterschootweg2northback.setMoves(uijterschootweg1northback, null, arnesteinkadeforth, uijterschootweg2northforth);
        uijterschootweg3northforth.setMoves(null, nwkleverskerkseweg4eastforth, nwkleverskerkseweg3eastback, uijterschootweg3northback);
        uijterschootweg3northback.setMoves(uijterschootweg2northback, null, arnesteinkadeback, uijterschootweg3northforth);
        arnesteinkadeforth.setMoves(null, uijterschootweg3northforth, uijterschootweg2northback, arnesteinkadeback);
        arnesteinkadeback.setMoves(null, uijterschootweg2northforth, uijterschootweg1northback, uijterschootweg3northback);
        nwkleverskerkseweg1westforth.setMoves(null, null, kleverskerkseweg1southback, nwkleverskerkseweg1westback);
        nwkleverskerkseweg1westback.setMoves(nwkleverskerkseweg2eastforth, industriewegsouthback, null, nwkleverskerkseweg1westforth);
        nwkleverskerkseweg2eastforth.setMoves(nwkleverskerkseweg3eastforth, nwkleverskerksewegdeadendforth, null, nwkleverskerkseweg2eastback);
        nwkleverskerkseweg2eastback.setMoves(nwkleverskerkseweg1westforth, null, industriewegsouthback, nwkleverskerkseweg2eastforth);
        nwkleverskerksewegdeadendforth.setMoves(null, null, null, nwkleverskerksewegdeadendback);
        nwkleverskerksewegdeadendback.setMoves(null, nwkleverskerkseweg3eastforth, nwkleverskerkseweg2eastback, nwkleverskerksewegdeadendforth);
        nwkleverskerkseweg3eastforth.setMoves(nwkleverskerkseweg4eastforth, uijterschootweg3northback, null, nwkleverskerkseweg3eastback);
        nwkleverskerkseweg3eastback.setMoves(nwkleverskerkseweg2eastback, null, nwkleverskerksewegdeadendforth, nwkleverskerkseweg3eastforth);
        nwkleverskerkseweg4eastforth.setMoves(null, null, null, nwkleverskerkseweg4eastback);
        nwkleverskerkseweg4eastback.setMoves(nwkleverskerkseweg3eastback, null, arnesteinkadeback, nwkleverskerkseweg4eastforth);
        this.currentRoad = garageforth;
        var trip1 = new Trip("Jannie", nwkleverskerksewegdeadendforth, arnesteinkadeback, garageback, false, false, 11);
        this.currentTrip = trip1;
    };
    Game.prototype.checkTrip = function () {
        console.log('checkTrip wordt gestart');
        console.log(this.currentRoad);
        console.log(this.currentTrip.location);
        if (this.currentRoad == this.currentTrip.location) {
            this.out.println("------------------------------------------------------------");
            this.out.println("Road status: Jannie is waiting here.");
        }
        else {
            this.out.println("------------------------------------------------------------");
            this.out.println("Road status: There are no new customers waiting here.");
        }
    };
    Game.prototype.checkLoaded = function () {
        if (this.currentTrip.customerloaded == true) {
            this.out.println("Car occupation: There is a customer in your car.");
        }
        else {
            this.out.println("Car occupation: There are no customers in your car.");
        }
    };
    Game.prototype.checkMoves = function () {
        if (this.currentTrip.customerdelivered == true && this.currentRoad === this.currentTrip.garage && this.move < 15) {
            this.out.println("Congratulations, you've done it in under 15 moves. You won this game :-D");
            this.gameOver();
        }
        else {
            if (this.currentTrip.customerdelivered == false && this.currentRoad === this.currentTrip.garage && this.move < 15) {
                this.out.println("You are not done yet! " + this.currentTrip.name + " still isn't dropped off at the harbor!");
            }
            if (this.currentTrip.customerdelivered == false && this.currentRoad === this.currentTrip.garage && this.move >= 15) {
                this.out.println("You have failed to drop-off your customer in time. She left without you.");
                this.gameOver();
            }
        }
    };
    Game.prototype.printWelcome = function () {
        this.out.println();
        this.out.println("Welcome to Crazy Cabman!");
        this.out.println("Crazy Cabman is a text-based taxi-driving simulator.");
        this.out.println("------------------------------------------------------------");
        this.out.println("In every cross you have to choose in which direction you will drive.");
        this.out.println("Your goal is to find and drive the most efficient road. Your amount of moves is being kept-up.");
        this.out.println("When you're back in the garage with 4 or more moves above the most efficient route you failed, otherwise you've won!");
        this.out.println("------------------------------------------------------------");
        this.out.println("Todays task is to pick-up " + this.currentTrip.name + ", drop her off at her destination and then return to the garage.");
        this.out.println("She is waiting for you at autobedrijf P. de Hamer in the blind alley of the Nieuwe Kleverkerkseweg");
        this.out.println("The most efficient route is: " + this.currentTrip.move + " moves");
        this.out.println("Note: she has to be dropped off at the right side of the road.");
        this.out.println("------------------------------------------------------------");
        this.out.println("");
        this.out.println("Current road examination:");
        this.out.print(this.currentRoad.description);
        this.out.println();
        this.out.println();
        this.out.print("Your options are:");
        this.out.println();
        if (this.currentRoad.aheadMove != null) {
            this.out.print("driving ahead, ");
        }
        if (this.currentRoad.leftMove != null) {
            this.out.print("turning left, ");
        }
        if (this.currentRoad.rightMove != null) {
            this.out.print("turning right, ");
        }
        if (this.currentRoad.backMove != null) {
            this.out.print("turn back, ");
        }
        if (this.currentTrip.location == this.currentRoad && this.currentTrip.customerloaded == false) {
            this.out.println("pick-up");
        }
        if (this.currentTrip.destination == this.currentRoad && this.currentTrip.customerloaded == true) {
            this.out.println("drop-off ");
        }
        this.out.println();
        this.out.println(">");
    };
    Game.prototype.gameOver = function () {
        this.isOn = false;
        this.out.println("------------------------------------------------------------");
        this.out.println("Thanks for playing");
        this.out.println("Hit F5 to restart the game");
    };
    return Game;
}());
var Parser = (function () {
    function Parser(game, input) {
        var _this = this;
        this.commands = {};
        this.game = game;
        this.input = input;
        this["default"] = new Default(game);
        this.commands["help"] = new Help(game);
        this.commands["quit"] = new Quit(game);
        this.commands["go"] = new Go(game);
        this.commands["turn"] = new Turn(game);
        this.commands["drive"] = new Drive(game);
        this.commands["pick-up"] = new Pickup(game);
        this.commands["drop-off"] = new Dropoff(game);
        input.onkeyup = function (e) {
            if (e.keyCode == 13 && _this.game.isOn) {
                var command = _this.input.value;
                _this.game.out.println(command);
                _this.parse(command.split(" "));
                _this.input.value = "";
                _this.game.out.print(">");
            }
        };
    }
    Parser.prototype.parse = function (words) {
        var wantToQuit = false;
        var params = words.slice(1);
        if (words[0] === "") {
            return;
        }
        var command;
        command = this.commands[words[0]];
        if (command == null) {
            command = this["default"];
        }
        wantToQuit = command.execute(params);
        if (wantToQuit) {
            this.input.disabled = true;
            this.game.gameOver();
        }
    };
    return Parser;
}());
var Printer = (function () {
    function Printer(output) {
        this.output = output;
    }
    Printer.prototype.print = function (text) {
        this.output.innerHTML += text;
    };
    Printer.prototype.println = function (text) {
        if (text === void 0) { text = ""; }
        this.print(text + "<br/>");
        this.output.scrollTop = this.output.scrollHeight;
    };
    return Printer;
}());
var Road = (function () {
    function Road(description) {
        this.description = description;
    }
    Road.prototype.setMoves = function (ahead, left, right, back) {
        if (ahead != null) {
            this.aheadMove = ahead;
        }
        if (left != null) {
            this.leftMove = left;
        }
        if (right != null) {
            this.rightMove = right;
        }
        if (back != null) {
            this.backMove = back;
        }
    };
    return Road;
}());
var Trip = (function () {
    function Trip(name, location, destination, garage, customerloaded, customerdelivered, move) {
        this.name = name;
        this.location = location;
        this.destination = destination;
        this.customerloaded = customerloaded;
        this.customerdelivered = customerdelivered;
        this.move = move;
        this.garage = garage;
    }
    return Trip;
}());
var Command = (function () {
    function Command(game) {
        this.game = game;
    }
    Command.prototype.execute = function (params) {
        return false;
    };
    return Command;
}());
var Default = (function (_super) {
    __extends(Default, _super);
    function Default() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Default.prototype.execute = function (params) {
        this.game.out.println("------------------------------------------------------------");
        this.game.out.println("I can't process that command...");
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println("go ahead, go left, go right, go back, pickup and quit");
        return false;
    };
    return Default;
}(Command));
var Drive = (function (_super) {
    __extends(Drive, _super);
    function Drive() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drive.prototype.execute = function (params) {
        if (params.length == 0) {
            this.game.out.println("Drive where?");
            return;
        }
        var direction = params[0];
        var nextRoad = null;
        switch (direction) {
            case "ahead":
                nextRoad = this.game.currentRoad.aheadMove;
                break;
            case "left":
                nextRoad = this.game.currentRoad.leftMove;
                break;
            case "right":
                nextRoad = this.game.currentRoad.rightMove;
                break;
            case "back":
                nextRoad = this.game.currentRoad.backMove;
                break;
        }
        if (nextRoad == null) {
            this.game.out.println("------------------------------------------------------------");
            this.game.out.println("There is no exit there.");
        }
        else {
            this.game.currentRoad = nextRoad;
            this.game.checkTrip();
            this.game.checkLoaded();
            this.game.checkMoves();
            this.game.move++;
            this.game.out.println("Total moves: " + this.game.move);
            this.game.out.println("------------------------------------------------------------");
            this.game.out.println(this.game.currentRoad.description);
            this.game.out.println();
            this.game.out.print("Your options are:");
            this.game.out.println();
            if (this.game.currentRoad.aheadMove != null) {
                this.game.out.print("driving ahead, ");
            }
            if (this.game.currentRoad.leftMove != null) {
                this.game.out.print("turning left, ");
            }
            if (this.game.currentRoad.rightMove != null) {
                this.game.out.print("turning right, ");
            }
            if (this.game.currentRoad.backMove != null) {
                this.game.out.print("turn back, ");
            }
            if (this.game.currentTrip.location == this.game.currentRoad && this.game.currentTrip.customerloaded == false) {
                this.game.out.println("pick-up");
            }
            if (this.game.currentTrip.destination == this.game.currentRoad && this.game.currentTrip.customerloaded == true) {
                this.game.out.println("drop-off");
            }
            this.game.out.println();
        }
        return false;
    };
    return Drive;
}(Command));
var Dropoff = (function (_super) {
    __extends(Dropoff, _super);
    function Dropoff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dropoff.prototype.execute = function (params) {
        if (this.game.currentRoad == this.game.currentTrip.destination && this.game.currentTrip.customerloaded == true) {
            this.game.currentTrip.customerdelivered = true;
            this.game.currentTrip.customerloaded = false;
            this.game.out.println("------------------------------------------------------------");
            this.game.out.println("You've succesfully dropped-off Jannie. Now head back to the garage to end your shift.");
            this.game.out.println("------------------------------------------------------------");
            this.game.out.println();
            this.game.out.println("Your options are:");
            if (this.game.currentRoad.aheadMove != null) {
                if (this.game.currentRoad.aheadMove != null) {
                    this.game.out.print("driving ahead, ");
                }
                if (this.game.currentRoad.leftMove != null) {
                    this.game.out.print("turning left, ");
                }
                if (this.game.currentRoad.rightMove != null) {
                    this.game.out.print("turning right, ");
                }
                if (this.game.currentRoad.backMove != null) {
                    this.game.out.print("turn back ");
                }
                this.game.out.println();
                return false;
            }
            else if (this.game.currentRoad.aheadMove != null) {
                this.game.out.print("driving ahead, ");
            }
            if (this.game.currentRoad.leftMove != null) {
                this.game.out.print("turning left, ");
            }
            if (this.game.currentRoad.rightMove != null) {
                this.game.out.print("turning right, ");
            }
            if (this.game.currentRoad.backMove != null) {
                this.game.out.print("turn back ");
            }
            this.game.out.println();
            return false;
        }
    };
    return Dropoff;
}(Command));
var Go = (function (_super) {
    __extends(Go, _super);
    function Go() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Go.prototype.execute = function (params) {
        if (params.length == 0) {
            this.game.out.println("Go where?");
            return;
        }
        var direction = params[0];
        var nextRoad = null;
        switch (direction) {
            case "ahead":
                nextRoad = this.game.currentRoad.aheadMove;
                break;
            case "left":
                nextRoad = this.game.currentRoad.leftMove;
                break;
            case "right":
                nextRoad = this.game.currentRoad.rightMove;
                break;
            case "back":
                nextRoad = this.game.currentRoad.backMove;
                break;
        }
        if (nextRoad == null) {
            this.game.out.println("------------------------------------------------------------");
            this.game.out.println("There is no exit there.");
        }
        else {
            this.game.currentRoad = nextRoad;
            this.game.checkTrip();
            this.game.checkLoaded();
            this.game.move++;
            this.game.out.println("Total moves: " + this.game.move);
            this.game.out.println("------------------------------------------------------------");
            if (this.game.currentRoad === this.game.currentTrip.garage) {
                this.game.checkMoves();
            }
            this.game.out.println(this.game.currentRoad.description);
            this.game.out.println();
            this.game.out.print("Your options are:");
            this.game.out.println();
            if (this.game.currentRoad.aheadMove != null) {
                this.game.out.print("driving ahead, ");
            }
            if (this.game.currentRoad.leftMove != null) {
                this.game.out.print("turning left, ");
            }
            if (this.game.currentRoad.rightMove != null) {
                this.game.out.print("turning right, ");
            }
            if (this.game.currentRoad.backMove != null) {
                this.game.out.print("turn back, ");
            }
            if (this.game.currentTrip.location == this.game.currentRoad && this.game.currentTrip.customerloaded == false) {
                this.game.out.println("pick-up");
            }
            if (this.game.currentTrip.destination == this.game.currentRoad && this.game.currentTrip.customerloaded == true) {
                this.game.out.println("drop-off");
            }
            this.game.out.println();
        }
        return false;
    };
    return Go;
}(Command));
var Help = (function (_super) {
    __extends(Help, _super);
    function Help() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Help.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("------------------------------------------------------------");
            this.game.out.println("Help what?");
            return false;
        }
        this.game.out.println("------------------------------------------------------------");
        this.game.out.println("Your customer today is: " + this.game.currentTrip.name);
        this.game.out.println("Your customer location is: the blind alley of the Nieuwe Kleverskerkseweg at Autobedrijf P. de Hamer.");
        this.game.out.println("Your customers destination is: the harbor at the Arnesteinkade.");
        this.game.out.println("Note: she has to be dropped off at the right side of the road.");
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println("go/drive/turn ahead, go/drive/turn left, go/drive/turn right, go/drive/turn back, pick-up, drop-off & quit");
        return false;
    };
    return Help;
}(Command));
var Pickup = (function (_super) {
    __extends(Pickup, _super);
    function Pickup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pickup.prototype.execute = function (params) {
        console.log("werkt deze ook?", params);
        if (this.game.currentRoad == this.game.currentTrip.location) {
            this.game.currentTrip.customerloaded = true;
            this.game.out.println("------------------------------------------------------------");
            this.game.out.print("Jannie entered your car and paid $3,-");
            this.game.out.println();
            this.game.out.print("She needs to go to her Boat at the Harbor, which is located at the arnesteinkade.");
            this.game.out.println();
            this.game.out.println("------------------------------------------------------------");
            this.game.out.println();
            this.game.out.println("Your options are:");
            if (this.game.currentRoad.aheadMove != null) {
                this.game.out.print("driving ahead, ");
            }
            if (this.game.currentRoad.leftMove != null) {
                this.game.out.print("turning left, ");
            }
            if (this.game.currentRoad.rightMove != null) {
                this.game.out.print("turning right, ");
            }
            if (this.game.currentRoad.backMove != null) {
                this.game.out.print("turn back ");
            }
            this.game.out.println();
            return false;
        }
        else
            this.game.out.println("There are no customers you can pick-up here.");
        if (this.game.currentRoad.aheadMove != null) {
            this.game.out.print("driving ahead, ");
        }
        if (this.game.currentRoad.leftMove != null) {
            this.game.out.print("turning left, ");
        }
        if (this.game.currentRoad.rightMove != null) {
            this.game.out.print("turning right, ");
        }
        if (this.game.currentRoad.backMove != null) {
            this.game.out.print("turn back ");
        }
        this.game.out.println();
        return false;
    };
    return Pickup;
}(Command));
var Quit = (function (_super) {
    __extends(Quit, _super);
    function Quit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quit.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("Quit what?");
            return false;
        }
        else {
            return true;
        }
    };
    return Quit;
}(Command));
var Turn = (function (_super) {
    __extends(Turn, _super);
    function Turn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Turn.prototype.execute = function (params) {
        if (params.length == 0) {
            this.game.out.println("Turn where?");
            return;
        }
        var direction = params[0];
        var nextRoad = null;
        switch (direction) {
            case "ahead":
                nextRoad = this.game.currentRoad.aheadMove;
                break;
            case "left":
                nextRoad = this.game.currentRoad.leftMove;
                break;
            case "right":
                nextRoad = this.game.currentRoad.rightMove;
                break;
            case "back":
                nextRoad = this.game.currentRoad.backMove;
                break;
        }
        if (nextRoad == null) {
            this.game.out.println("------------------------------------------------------------");
            this.game.out.println("There is no exit there.");
        }
        else {
            this.game.currentRoad = nextRoad;
            this.game.checkTrip();
            this.game.checkLoaded();
            this.game.checkMoves();
            this.game.move++;
            this.game.out.println("Total moves: " + this.game.move);
            this.game.out.println("------------------------------------------------------------");
            this.game.out.println(this.game.currentRoad.description);
            this.game.out.println();
            this.game.out.print("Your options are:");
            this.game.out.println();
            if (this.game.currentRoad.aheadMove != null) {
                this.game.out.print("driving ahead, ");
            }
            if (this.game.currentRoad.leftMove != null) {
                this.game.out.print("turning left, ");
            }
            if (this.game.currentRoad.rightMove != null) {
                this.game.out.print("turning right, ");
            }
            if (this.game.currentRoad.backMove != null) {
                this.game.out.print("turn back, ");
            }
            if (this.game.currentTrip.location == this.game.currentRoad && this.game.currentTrip.customerloaded == false) {
                this.game.out.println("pick-up");
            }
            if (this.game.currentTrip.destination == this.game.currentRoad && this.game.currentTrip.customerloaded == true) {
                this.game.out.println("drop-off");
            }
            this.game.out.println();
        }
        return false;
    };
    return Turn;
}(Command));
