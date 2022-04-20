import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  submitting = false;
  errorMessage = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submit(): void {
    if(!this.loginForm.valid) {
      return;
    }

    this.submitting = true;
    this.authService.signIn(this.loginForm.getRawValue())
      .subscribe((result: HttpResponse<any>) => {
        console.log('success',result);
        this.router.navigate(['../'])
      }, (error) => {
        console.log('error',error);
        this.errorMessage = 'Usuário ou senha incorretos!'
        this.submitting = false;
      })
  }

}
