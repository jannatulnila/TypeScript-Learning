//access >> modify
class Bankaccount {
    readonly userId: number;
    username:string;
    // private userBalance: number  // child class e acces jay na private propertyr
    protected userBalance: number //child class e  protected user korle child e acces jay propertyr


    constructor(userId: number, username:string,userBalance: number){
        this.username =username;
        this.userId = userId;
        this.userBalance= userBalance
    }
    private addBalance(balance:number){
        this.userBalance = this.userBalance+ balance
    }
}

class StudentAccount extends Bankaccount{
    test(){
        this.userBalance= this.userBalance
    }
}

const mezbaBhauAccount= new Bankaccount(111, "mezba", 200)
// mezbaBhauAccount.addBalance(100);
console.log(mezbaBhauAccount);

