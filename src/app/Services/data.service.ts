import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  userDetails:any={
    1000: {acno:1000,username:"Ashik",password:"pathu",balance:0},
    1001: {acno:1001,username:"Pathu",password:"Ashik",balance:0},
    1002: {acno:1002,username:"Ummer",password:"1234",balance:0},
    1003: {acno:1003,username:"Razak",password:"1234",balance:0},
    1004: {acno:1004,username:"Mamooty",password:"1234",balance:0},
   
   }
   
}
