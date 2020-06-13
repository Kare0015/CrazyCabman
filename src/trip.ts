class Trip{
	//attributes
	name: string;
	location: Road;
    destination: Road;
	garage: Road;
    customerloaded: boolean;
    customerdelivered: boolean;
	move: number;

	//constructor
	constructor(name: string, location: Road, destination: Road, garage: Road, customerloaded: boolean, customerdelivered: boolean, move: number) {
		this.name = name;
		this.location = location;
        this.destination = destination;
        this.customerloaded = customerloaded;
        this.customerdelivered = customerdelivered;
		this.move = move;
		this.garage = garage;
	}	
	
	//methods

}