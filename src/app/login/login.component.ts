import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  data="Your perfect banking partner"
  inputplaceholder="Account Number"

  loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],

  password:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})
  
  // //password:any



constructor(private router:Router,private ds:DataService,private fb:FormBuilder) {}

ngOnInit(): void{

}

login(){
  var acno=this.loginForm.value.acno
  var password=this.loginForm.value.password
  var result=this.ds.login(acno,password)
  
  if (this.loginForm.valid){
  
 

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
  else{
    alert('invalid form')
  }

  
}
}