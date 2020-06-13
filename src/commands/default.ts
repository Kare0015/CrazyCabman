class Default extends Command{

     /**
     * Print out error message when user enters unknown command.
     * Here we print some erro message and a list of the 
     * command words.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(params: string[]): boolean {
        this.game.out.println("------------------------------------------------------------");
        this.game.out.println("I can't process that command...");
        this.game.out.println();
        this.game.out.println("Your command words are:");
        this.game.out.println("go ahead, go left, go right, go back, pickup and quit");
        return false;
    }
}