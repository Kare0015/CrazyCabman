 class Dropoff extends Command { 

 execute(params: string[]): boolean {
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
        else 
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
    }
 }