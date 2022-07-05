function aceValue(aceBool, value){
    if(aceBool) {
        return 11; 
     }
     else {
         return 1;
     }
};

class card {
    constructor(suit,value) {
        switch(value) {
            case 1:
                this.id = "ace";
                this.value = 1;
                break;
            case 11:
                this.id = "jack";
                this.value = 10;
                break;
            case 12:
                this.id = "queen";
                this.value = 10;
                break;
            case 13:
                this.id = "king";
                this.value = 10;
                break;
            default:
                this.id = value.toString();
                this.value = value;
        };
        this.suit = suit;
    }
};

let newCard = new card("spades",1);
console.log(newCard.id);
console.log(newCard.value);
console.log(newCard.suit);