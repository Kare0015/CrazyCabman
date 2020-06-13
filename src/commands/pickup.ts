class Pickup extends Command {

  execute(params: string[]): boolean {
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
        else this.game.out.println("There are no customers you can pick-up here.");
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