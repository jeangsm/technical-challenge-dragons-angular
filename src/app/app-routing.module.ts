import { DragonsGuard } from './guards/dragons.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dragons'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dragons',
    canActivate: [DragonsGuard],
    loadChildren: () => import('./pages/dragons/dragons.module').then(m => m.DragonsModule)
  },
  {
    path: '**', redirectTo: '/dragons'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
