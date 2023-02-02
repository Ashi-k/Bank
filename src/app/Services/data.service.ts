import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any

  constructor() { }
  userDetails:any={
    1000: {acno:1000,username:"Ashik",password:"pathu",balance:0},
    1001: {acno:1001,username:"Pathu",password:"Ashik",balance:0},
    1002: {acno:1002,username:"Ummer",password:"1234",balance:0},
    1003: {acno:1003,username:"Razak",password:"1234",balance:0},
    1004: {acno:1004,username:"Mamooty",password:"1234",balance:0},
   
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
   }
  
