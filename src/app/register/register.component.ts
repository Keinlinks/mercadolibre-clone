import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  loginForm!: FormGroup;
  show_error: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_copy: ['', Validators.required],
    });
  }
  submit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;
      const password_copy = this.loginForm.get('password_copy')!.value;
      if (password === password_copy) {
        this.service.addUser(username, password);
        this.service.emmit(true);
        this.router.navigate(['/login']);
      } else this.show_error = true;
    }
  }
  getuser() {
    this.service.getAllUser();
  }
}
