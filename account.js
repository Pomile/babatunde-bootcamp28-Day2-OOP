'use Strict'

class account {
   
  
  constructor(firstName, lastName, amount) {
    let accountNumber = Symbol('accountNumber')
    this.firstName = firstName;
    this.lastName = lastName;
    this.openningBalance = amount;
    this.totalBalance = amount || 1000;
    //data Encapsulation
    [accountNumber]= this.generate_account_number();
    
  }

  deposit(amount) {
    this.totalBalance+=amount
  }

  get_account_balance() {
    return this.totalBalance;
  }

  

  widthdraw(amount) {
    if (amount>this.totalBalance){

      return "Insufficient funds"
    }

    else{

      return this.totalBalance-=amount

    }
    
  }

  transfer(amount, account){

    try{
      if (typeof account !=='object')throw "invalid account"
        this.totalBalance -=amount;
        account.totalBalance += amount;
        return this.successMsg = "Transaction successful. Amount Transfered: " + amount;
      

    }catch(err){

      return err
    }

    


  }

  generate_account_number() {
    let maximumAccountNumber = 9999999;
    let minimumAccountNumber = 1000000;
    let random1 = Math.floor(Math.random() * (maximumAccountNumber - minimumAccountNumber + 1)) + minimumAccountNumber;
    let account_number = '307' + random1
    return account_number;
  }

  display_account_information() {
    return 'FirstName: '+ this.firstName+ '  ' + 'LastName: '+this.lastName;
  }
}



//Inheritance
class Savings extends account{
  constructor(firstName, lastName, amount){
    
    super(firstName, lastName, amount);
    //check for minimum openning balance
    if (amount<2000){
      this.returnMsg = this.msg()
      this.totalBalance=0;
    }
    else{

      this.accountType = this.show_account_type();
    }
    
  }


  show_account_type(){
    if (this.totalBalance <= 50000000){

      return "Account type > " + "Savings"
    }
    else if (this.totalBalance > 500000000000){

      return  "Current"

    }

   
  }

  msg(){

      return "Open balance is too low";
    }


  //Polymorphism
    // check for the minimum amount (less than 20000000000)that account the owner can desposit for savings account
    deposit(amount){
      if (amount>=20000000000){
        return this.accountMsgLog = "You have Exeeded Maximum amount that you can desposit";
      }
      this.totalBalance +=amount;
      return this.SuccessMsg = "Transaction successful" ;


      super.deposit(amount)
    }

    // check for the minimum amount (N20,000,000) that the account owner can withdrwal from his/her savings account
    //check insufficient fund
    withdraw(amount){
      if (amount>=20000000){
        return this.accountMsglog = "You have Exeeded Maximum amount(N20,000,000) that you can withdraw for your account";
      }else if(amount>this.totalBalance){
        return this.accountMsgLog ="Insufficient fund"
      }
      else{
        this.totalBalance -=amount;
        return this.SuccessMsg = "Transaction successful. Amount withdrawn: " + amount ;
      }
      


      super.withdraw(amount)
    }

  
  // polymorphism --add more account information to the base class method display_account_information
  display_account_information(){

    return 'FirstName: '+ this.firstName+'\nLastName: '+
    this.lastName +'\nAccount type: ' +this.accountType; +'\nAccount number: ' +
    super.generate_account_number();

  }

}







