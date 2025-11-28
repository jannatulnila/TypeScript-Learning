//getter 
//setter

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
    //balance set korche
    //  addBalance(balance:number){
    //     this.userBalance = this.userBalance+ balance
    // }
    
    
    //setter user kore korte chai 
    set addBalance(amount:number){
        this.userBalance = this.userBalance+ amount
    }

    // getBalance(){
    //     return this.userBalance
    // }

    //getter user kore get
    get getBalance (){
        return this.userBalance
    }
}

class StudentAccount extends Bankaccount{
    test(){
        this.userBalance= this.userBalance
    }
}

const mezbaBhauAccount= new Bankaccount(111, "mezba", 200)
// mezbaBhauAccount.addBalance(100);
// console.log(mezbaBhauAccount.getBalance());

mezbaBhauAccount.addBalance=100;
mezbaBhauAccount.addBalance=200;
console.log(mezbaBhauAccount);
console.log(mezbaBhauAccount.getBalance);

