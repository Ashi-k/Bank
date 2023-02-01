import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  data="Your perfect banking partner"
  inputplaceholder="Account Number"

  acno=''
  // //acno:any 

  password=''
  // //password:any



constructor(private router:Router,private ds:DataService) {}

ngOnInit(): void{

}

login(){
  var acnum=this.acno
  var psw=this.password
  var userDetails=this.ds.userDetails
  if(acnum in userDetails){
    if(psw==userDetails[acnum]["password"]){
       alert("login success")
       this.router.navigateByUrl('dashboard')
    }
    else{
      alert("incorect password")
    }
  
  }
  else{
    alert("acno incorrect or not registerd yet")
  }
}

// acnoChange(event:any){
//   this.acno=event.target.value
  
//   // console.log(this.acno);
// }

// passwordChange(event:any){
//  this.password=event.target.value
// //  console.log(this.password);
 
// }



  
}
