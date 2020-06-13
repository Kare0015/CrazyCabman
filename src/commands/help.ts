class Help extends Command {
  /**
     * Print out some help information.
     * Here we print some stupid, cryptic message and a list of the 
     * command words.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(params : string[]) : boolean {
        if (params.length > 0) {
            this.game.out.println("------------------------------------------------------------");
            this.game.out.println("Help what?");
            return false;
        }
        this.game.out.println("------------------------------------------------------------");
        this.game.out.println("Your customer today is: " + this.game.currentTrip.name);
        this.game.out.println("Your customer location is: the blind alley of the Nieuwe Kleverskerkseweg at Autobedrijf P. de Hamer.");
        this.game.out.println("Your customers destination is: the harbor at the Arnesteinkade.")
        this.game.out.println("Note: she has to be dropped off at the right side of the road.")
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println("go/drive/turn ahead, go/drive/turn left, go/drive/turn right, go/drive/turn back, pick-up, drop-off & quit");
        return false;
    }
}