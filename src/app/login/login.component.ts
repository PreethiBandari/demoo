import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  user: any;
  //msg1: any;
  //msg2: any;
  

  constructor(public router: Router,public empService: EmpService ) {     //Dependency Injection For Router

    this.user ={loginId: '',password: ''};
    //this.msg1='';
   //this.msg2='';
  }

  ngOnInit() {
  }
  loginSubmit(): void{
    console.log('Data Received: '+this.user.loginId);
    //console.log(this.msg1);
    //console.log(this.msg2);
  }

  submitLoginForm(loginForm: any){
    console.log(loginForm);

    if(loginForm.loginId === 'admin' && loginForm.password === 'admin'){
      this.empService.setUserLoggedIn();  //return true;
      this.router.navigate(['products']);
    }
  }
  
}
