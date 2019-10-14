import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';


const routes: Routes = [
  { path: 'User/Login', component: LoginComponent },

  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', redirectTo: 'NotFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
