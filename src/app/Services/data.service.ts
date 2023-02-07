import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno: any;

  constructor() { }
  userDetails:any={
    1000: {acno:1000,username:"Ashik",password:"pathu",balance:0,transaction:[]},
    1001: {acno:1001,username:"Pathu",password:"Ashik",balance:0,transaction:[]},
    1002: {acno:1002,username:"Ummer",password:"1234",balance:0,transaction:[]},
    1003: {acno:1003,username:"Razak",password:"1234",balance:0,transaction:[]},
    1004: {acno:1004,username:"Mamooty",password:"1234",balance:0,transaction:[]},
   
   }

   register(uname:any,acno:any,psw:any){

    if(acno in this.userDetails){
      return false
    }
    else{
      this.userDetails[acno]={acno,username:uname,password:psw,balance:0}
      // console.log(this.userDetails);
      
      return true
    }
   }

   login(acnum:any,psw:any){
    var userDetails=this.userDetails

    if(acnum in userDetails){
      if(psw==userDetails[acnum]["password"]){
        this.currentUser=userDetails[acnum]['Username']
        this.currentAcno=acnum
         return true
      }
      else{
        return false
      }
    
    }
    else{
      return false
    }
  }

  deposit(acnum:any,password:any,amount:any){
    let userDetails=this.userDetails
    //convert string ammount to number
    var amnt = parseInt(amount)

    if(acnum in userDetails){
      if (password == userDetails[acnum]["password"]){

        //update balance
        userDetails[acnum]["balance"]+=amnt
        
        //transaction data store
        userDetails[acnum]["transaction"].push({Type:"CREDIT",amount:amnt})

        //return current balance
        return userDetails[acnum]["balance"]
      }
      else{
        return false
      }
    }
    else{
      return false
    }
  }

  withdraw(acnum:any,password:any,amount:any){
    let userDetails=this.userDetails
    //convert string ammount to number
    var amnt = parseInt(amount)

    if(acnum in userDetails){
      if (password == userDetails[acnum]["password"]){
        if(amnt<=userDetails[acnum]["balance"]){
          userDetails[acnum]["balance"]-=amnt

          userDetails[acnum]["transaction"].push({Type:"DEBIT",amount:amnt})
          // console.log(userDetails);
          
          //return current balance
          return userDetails[acnum]["balance"]

        }
        else{
          alert('insufficient balance')
          return false

      }
    
    }
    else{
      return false
      alert('incorrect password')
    }
  }
    else{
      alert('incorrect acnum')
      return false
    }
  }

  getTransaction(acno:any){
    return this.userDetails[acno]["transaction"]
  }

   }

   


  
