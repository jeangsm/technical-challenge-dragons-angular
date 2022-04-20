import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const authRoutes: Route[] = [
  {
    path:'',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(authRoutes),
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
