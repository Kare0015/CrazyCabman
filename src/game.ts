9/**
 * This class is part of the "Zorld of Wuul" application. 
 * "Zorld of Wuul" is a very simple, text based adventure game.  
 * 
 * Users can walk around some scenery. That's all. It should really be 
 * extended to make it more interesting!
 * 
 * To play this game, create an instance of this class and call the "play"
 * method.
 * 
 * This main class creates and initialises all the others: it creates all
 * roads, creates the parser and starts the game.  It also evaluates and
 * executes the commands that the parser returns.
 * 
 * @author  Michael K�lling, David J. Barnes and Bugslayer, bas
 * @version 2017.03.30
 */
class Game {
    parser: Parser;
    out: Printer;
    move: number = 0;
    currentTrip: Trip;
    currentRoad: Road;
    isOn: boolean;

    /**
     * Create the game and initialise its internal map.
     */
    constructor(output: HTMLElement, input: HTMLInputElement) {
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createRoads();
        this.printWelcome();

    }

    /**
     * Create all the roads and link their exits together.
     */
    private createRoads(): void {
        //Creates the roads
        //Start at the garage in Middelburg.
        let garageforth = new Road("You are currently in the garage in Middelburg. You can either turn left to the Industrieweg or go ahead and enter the Industrieweg the other way.");
        let garageback = new Road("")
        let industriewegnorthforth = new Road("You are currently on the cross with the kleverskerkseweg. Would you like to take a left turn to the southwest or a right turn to the north east?")
        let industriewegnorthback = new Road("You are currently on the cross with the garage and the Industrieweg. Would you like to drive forward into the garage or turn right to the industrieweg?")
        let industriewegsouthforth = new Road("You are currently on the cross with the Nieuwe Kleverskerkseweg, would you like to go left or right?")
        let industriewegsouthback = new Road("You can either turn left to the industrieweg or right to the garage.")
        let kleverskerkseweg1southforth = new Road("You enter the roundabout, and see that the first exit is closed. Do you want to take a left turn to the Nieuwe Kleverskerkseweg or turn around?")
        let kleverskerkseweg1southback = new Road("You are driving on the kleverskerkseweg and can drive ahead or turn right to the Industrieweg.")
        let kleverskerkseweg2northforth = new Road("You are driving into a T junction. Would you like to go ahead and enter the Uijterschootweg or turn left for the kleverskerkseweg?")
        let kleverskerkseweg2northback = new Road("You are driving into a T junction. Would you like to go ahead on the kleverskerkseweg or turn left on the Industrieweg?")
        let kleverskerkseweg3northforth = new Road("There are some companies here, I don't think I need to be here. Lets turn back.")
        let kleverskerkseweg3northback = new Road("We are back at the T Junction. Should I turn left to the Uijterschootweg or right to the kleverskerkseweg?")
        let uijterschootweg1northforth = new Road("Should I stay on the uijterschootweg or turn left to the arnesteinkade?")
        let uijterschootweg1northback = new Road("Should I turn right or go ahead on the kleverskerkseweg?")
        let uijterschootweg2northforth = new Road("Should I turn left to the Arnesteinkade or drive ahead on the Uijterschootweg?")
        let uijterschootweg2northback = new Road("Should i turn right to the Arnesteinkade or drive ahead on the Uijterschootweg?")
        let uijterschootweg3northforth = new Road("should i turn left or right on the Nieuwe kleverskerkseweg?")
        let uijterschootweg3northback = new Road("Should I turn right to the Arnesteinkade or drive ahead on the Uijterschootweg?")
        let arnesteinkadeforth = new Road("They are very busy loading and unloading the ships so I better get moving out of their way. Shall I turn left or right on the uijterschootweg?")
        let arnesteinkadeback = new Road("Ahhhh, the harbor.... Jannie must be dropped-off around here.")
        let nwkleverskerkseweg1westforth = new Road("I've entered the roundabout, the second exit is closed so i can only go right or back. What should I do?")
        let nwkleverskerkseweg1westback = new Road("I'm at the Nieuwe kleverskerkseweg, should I turn let to the Industrieweg or keep driving on the Nieuwe kleverskerkseweg?")
        let nwkleverskerksewegdeadendforth = new Road("Here's autobedrijf P. de Hamer. Jannie should be somewhere around here...")
        let nwkleverskerksewegdeadendback = new Road("Should I go left or right on the Nieuwe kleverskerkseweg?")
        let nwkleverskerkseweg2eastforth = new Road("Should I go left to the Nieuwe kleverskerkseweg or drive ahead on it?")
        let nwkleverskerkseweg2eastback = new Road("Should I go right to the industrieweg or go ahead on the Nieuwe kleverskerkseweg?")
        let nwkleverskerkseweg3eastforth = new Road("Should I turn left on the Uijterschootweg or keep on driving ahead?")
        let nwkleverskerkseweg3eastback = new Road("Should I turn right to the Nieuwe kleverskerkseweg or keep driving ahead?")
        let nwkleverskerkseweg4eastforth = new Road("Should I turn right to the Kanaalweg or drive ahead on the Kanaalweg?")
        let nwkleverskerkseweg4eastback = new Road("Should I Turn right to the Uijterschootweg or keep on driving on the Nieuwe kleverskerkseweg?")

        //Initialise road exits
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

        // spawn player outside
        this.currentRoad = garageforth;
        let trip1 = new Trip("Jannie", nwkleverskerksewegdeadendforth, arnesteinkadeback, garageback, false, false, 11);
        this.currentTrip = trip1;
    }

    checkTrip(): void {
        console.log('checkTrip wordt gestart');
        console.log(this.currentRoad);
        console.log(this.currentTrip.location);
        //this.out.println("Jannie staat al te wachten op je");
        if (this.currentRoad == this.currentTrip.location) {
            this.out.println("------------------------------------------------------------");
            this.out.println("Road status: Jannie is waiting here.");
        }
        else {
            this.out.println("------------------------------------------------------------");
            this.out.println("Road status: There are no new customers waiting here.");
        }
    }

    checkLoaded(): void {
        if (this.currentTrip.customerloaded == true) {
            this.out.println("Car occupation: There is a customer in your car.");
        }
        else {
            this.out.println("Car occupation: There are no customers in your car.");
        }
    }

    checkMoves(): void {
        if (this.currentTrip.customerdelivered == true && this.currentRoad === this.currentTrip.garage && this.move < 15) {
            this.out.println("Congratulations, you've done it in under 15 moves. You won this game :-D");
            this.gameOver();
        }
        else {
            if (this.currentTrip.customerdelivered == false && this.currentRoad === this.currentTrip.garage && this.move < 15) {
                this.out.println("You are not done yet! " + this.currentTrip.name + " still isn't dropped off at the harbor!");
            }
            if (this.currentTrip.customerdelivered == false && this.currentRoad === this.currentTrip.garage && this.move >= 15) {
                this.out.println("You have failed to drop-off your customer in time. She left without you.")
                this.gameOver();
            }
        }
    }

    /**
     * Print out the opening message for the player.
     */
    printWelcome(): void {
        this.out.println();
        this.out.println("Welcome to Crazy Cabman!");
        this.out.println("Crazy Cabman is a text-based taxi-driving simulator.");
        this.out.println("------------------------------------------------------------");
        this.out.println("In every cross you have to choose in which direction you will drive.")
        this.out.println("Your goal is to find and drive the most efficient road. Your amount of moves is being kept-up.")
        this.out.println("When you're back in the garage with 4 or more moves above the most efficient route you failed, otherwise you've won!")
        this.out.println("------------------------------------------------------------");
        this.out.println("Todays task is to pick-up " + this.currentTrip.name + ", drop her off at her destination and then return to the garage.")
        this.out.println("She is waiting for you at autobedrijf P. de Hamer in the blind alley of the Nieuwe Kleverkerkseweg");
        this.out.println("The most efficient route is: " + this.currentTrip.move + " moves")
        this.out.println("Note: she has to be dropped off at the right side of the road.")
        this.out.println("------------------------------------------------------------");
        this.out.println("")
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
    }

    gameOver(): void {
        this.isOn = false;
        this.out.println("------------------------------------------------------------");
        this.out.println("Thanks for playing");
        this.out.println("Hit F5 to restart the game");
    }
}