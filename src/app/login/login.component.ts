import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginservice: LoginService, private route: Router,private toastr: ToastrService) { }

  LoginForm: any
  errorMessage: any;


  ngOnInit() {
    this.LoginForm = new FormGroup({
      empEmail: new FormControl(""),
      password: new FormControl("")
    });
  }
  onSubmit() {
    console.log(this.LoginForm.value)
    this.loginservice.login(this.LoginForm.value).subscribe((data) => {
      this.route.navigateByUrl("/home")
    },
      (error) => {
        this.errorMessage = error.error.error
        console.log(this.errorMessage)
        this.toastr.error(this.errorMessage);



      }
    )
  }


}


