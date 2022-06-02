class Coins {
    constructor(price) {
        this.price = price;
        
        
    }
    describe() {
        return `The price of this shoe is ${this.price}.`;
    }
}

class Shoes {
    constructor(name) {
        this.name = name;
        this.prices = [];
    }
    
    addSneaker(sneaker) {
        if (sneaker instanceof Shoes) {
            this.sneakers.push(sneaker);
        } else {
            throw new Error(`Add Instance of Sneaker Only. This argument is not a Sneaker: ${sneaker}`);
        
            }
        }
    describe() {
        return `${this.name} has ${this.sneakers.length} Sneakers.`;
    }

    
}

class Menu {
    constructor() {
        this.sneakers = [];
        this.selectedSneakers = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createShoe(); 
                    break;
                case "2":
                    this.viewShoe(); 
                    break;
                case "3":
                    this.deleteShoe(); 
                    break;
                case "4":
                    this.displayAllShoes(); 
                    break;
                    default:
                    selection = 0;
            
            }
            selection = this.showMainMenuOptions();
        }

        alert("Goodbye!");
    }

    showMainMenuOptions() {
        return prompt(`
            0) Back
            1) Add Shoe
            2) View Shoe
            3) Delete Shoe
            4) Display All Shoes
            ---------------------
            
        `);
    }

    showPriceMenuOptions(shoeInfo) {
        return prompt(`
            0)
            1) Add a price
            2) Remove a price
            ${shoeInfo}
        `)
    }

    displayAllShoes() {
        let shoeString = "";
        for (let i = 0; i < this.sneakers.length; i++) {
            shoeString += i +")" + this.sneakers[i].name + '\n';
        }
        alert(shoeString);
    }

    createShoe() {
        let name = prompt("Enter Name of Sneaker:");
        // Need to pass in shoe of model
        this.sneakers.push(new Shoes(name));
    }


    viewShoe() {
        let index = prompt("Enter The Index of The Shoe You Want To View");
        if (index > -1 && index < this.sneakers.length) {
            this.selectedShoe = this.sneakers[index];
            let description = "Shoe Name: " + this.selectedShoe.name + '\n';

            for (let i = 0; i < this.selectedShoe.prices.length; i++) {
                description += i + ')' + this.selectedShoe.prices[i].price + "\n"
                 //   + ' - ' + this.selectedShoe.sneakers[i].price + '\n';
                
            }

            let selection = this.showPriceMenuOptions(description);
            switch (selection) {
                case "1":
                    this.createPrice();
                    break;
                case "2":
                    this.deletePrice();
                        
            }
        }
    }

    deleteShoe() {
        let index = prompt("Enter The Index of The Shoe You Want To Delete"); //Added this method here to try deleting shoes, already added to end of script but did not work.
        if (index > -1 && index < this.sneakers.length) {
            this.sneakers.splice(index, 1);
        }
    }
    createPrice() { 
        let price = prompt("Enter Price of Shoe:");
        this.selectedShoe.prices.push(new Coins(price)); 
    }


    deletePrice() {
        let index = prompt("Enter The Index of The Price You Want To Delete");
        if (index > -1 && index < this.selectedShoe.prices.length) {
            this.selectedShoe.prices.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();