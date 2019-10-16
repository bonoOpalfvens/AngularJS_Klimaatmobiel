import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';

const routes: Routes = [
  { path: 'User/Login', component: LoginComponent },
  { path: 'User/Register', component: RegisterComponent },

  { path: '', redirectTo: 'User/Login', pathMatch: 'full' },
  { path: '**', redirectTo: 'NotFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
