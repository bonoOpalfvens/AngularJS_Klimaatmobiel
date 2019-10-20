import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { KlimModuleCreateComponent } from './views/klim-module/klim-module-create/klim-module-create.component';
import { KlimModuleListComponent } from './views/klim-module/klim-module-list/klim-module-list.component';

const routes: Routes = [
  { path: 'User/Login', component: LoginComponent },
  { path: 'User/Register', component: RegisterComponent },
  { path: 'Module/CreeerModule', component: KlimModuleCreateComponent},
  { path: 'Module/Lijst', component: KlimModuleListComponent},

  { path: '', redirectTo: 'User/Login', pathMatch: 'full' },
  { path: '**', redirectTo: 'NotFound', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
