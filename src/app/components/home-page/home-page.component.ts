import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { random_users } from 'src/app/mock-data/random-users';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private formBuilder : FormBuilder,
    private auth: AuthService,
    private route:Router,
  
  ) { }


ngOnInit(): void {
  this.loginForm = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",[Validators.required])
  })
}

onSubmit() {
  console.log(random_users)
  // const val =  random_users.some(el => el.email === this._v().email)

    if(this.loginForm.valid && this.auth.isLoggedIn(this.loginForm.value['email'], this.loginForm.value['password'])) {
      this.route.navigate(['/booking-page']);

      
      console.log(this._v());

    }
  }
  _v() {
    return this.loginForm.value;
  }
}
