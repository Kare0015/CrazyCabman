class Go extends Command {
    
  /** 
     * Try to go in one direction. If there is an exit, enter
     * the new room, otherwise print an error message.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(params : string[]) : boolean {
        if (params.length == 0) {
            // if there is no second word, we don't know where to go...
            this.game.out.println("Go where?");
            return;
        }

        let direction = params[0];

        // Try to leave current Road.
        let nextRoad = null;
        switch (direction) {
            case "ahead" : 
                nextRoad = this.game.currentRoad.aheadMove;
                break;
            case "left" : 
                nextRoad = this.game.currentRoad.leftMove;
                break;
            case "right" : 
                nextRoad = this.game.currentRoad.rightMove;
                break;
            case "back" : 
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
            this.game.out.println("Total moves: "  + this.game.move);
            this.game.out.println("------------------------------------------------------------");
            if(this.game.currentRoad === this.game.currentTrip.garage) {
            this.game.checkMoves();
            }
            this.game.out.println(this.game.currentRoad.description);
            this.game.out.println();
            this.game.out.print("Your options are:");
            this.game.out.println();
            if(this.game.currentRoad.aheadMove != null) {
                this.game.out.print("driving ahead, ");
            }
            if(this.game.currentRoad.leftMove != null) {
                this.game.out.print("turning left, ");
            }
            if(this.game.currentRoad.rightMove != null) {
                this.game.out.print("turning right, ");
            }
            if(this.game.currentRoad.backMove != null) {
                this.game.out.print("turn back, ");
            }
            if (this.game.currentTrip.location == this.game.currentRoad && this.game.currentTrip.customerloaded == false){
                this.game.out.println("pick-up");
            }
            if (this.game.currentTrip.destination == this.game.currentRoad && this.game.currentTrip.customerloaded == true) {
                this.game.out.println("drop-off");
            }
            this.game.out.println();
        }
        return false;
    }
}