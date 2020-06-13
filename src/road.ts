//De klasse "Road" is een locatie in de stad waar het spel plaatsvindt. Een "Road" is verbonden aan andere "Roads" via kruisingen. 
//Een straatnaam kan uit meerdere roads bestaan.
class Road {
    description: string;
    leftMove : Road;
    rightMove : Road;
    aheadMove: Road;
    backMove: Road;


    constructor(description: string) {
        this.description = description;
    }

    //Definieert de moves op een road. Elke move gaat naar een andere road of is null (er is geen afslag die kant op)

    setMoves(ahead: Road, left: Road, right: Road, back: Road): void {
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
    }
}