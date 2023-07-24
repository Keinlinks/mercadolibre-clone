import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register/register.component.scss'],
})
export class LoginComponent implements OnInit {
  show_alert_registration: boolean = false;
  show_alert_error: boolean = false;
  password_error: boolean = false;
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.service.alert$.subscribe((show) => {
      this.show_alert_registration = show;
    });
  }
  submit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;
      let response: boolean[] = this.service.validateUser(username, password);
      if (response[0]) {
        if (response[1]) {
          this.router.navigate(['']);
        } else this.password_error = true;
      } else this.show_alert_error = true;
    }
  }
  getuser() {
    console.log(this.service.getAllUser);
  }
  close_alert() {
    this.service.emmit(false);
  }
}
