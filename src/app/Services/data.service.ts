import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno: any;
  userDetails:any

  constructor() {
    this.getData()
   }

  // userDetails:any={
  //   1000: {acno:1000,username:"Ashik",password:"pathu",balance:0,transaction:[]},
  //   1001: {acno:1001,username:"Pathu",password:"Ashik",balance:0,transaction:[]},
  //   1002: {acno:1002,username:"Ummer",password:"1234",balance:0,transaction:[]},
  //   1003: {acno:1003,username:"Razak",password:"1234",balance:0,transaction:[]},
  //   1004: {acno:1004,username:"Mamooty",password:"1234",balance:0,transaction:[]},
   
  //  }

   saveData(){
    if(this.userDetails){
      localStorage.setItem("database",JSON.stringify(this.userDetails))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",this.currentUser)
    }
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
   }

   getData(){
    if(localStorage.getItem('database')){
      this.userDetails=JSON.parse(localStorage.getItem('database') || "") 
    }
    if(localStorage .getItem('cuurentUser')){
      this.currentUser=localStorage.getItem('currentUser')
    }
    if(localStorage.getItem('cuurentAcno')){
      this.currentAcno=JSON.parse(localStorage.getItem('currentAcno') || "")
    }
   }



   register(uname:any,acno:any,psw:any): boolean{

    if(acno in this.userDetails){
      return false
    }
    else{
      this.userDetails[acno]={acno,username:uname,password:psw,balance:0,transaction:[]}
      // console.log(this.userDetails);

      this.saveData()
      
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

         this.saveData()  
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

        this.saveData()

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
         
          this.saveData()

          return userDetails[acnum]["balance"]

        }
        else{
          alert('insufficient balance')
          return false

      }
    
    }
    else{
      alert('incorrect password')
      return false
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

   


  
