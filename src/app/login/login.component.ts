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
  
  const result=this.ds.login(acnum,psw)
  if(result){
    alert('login success')
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert('incorrect acno or password ')
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
}