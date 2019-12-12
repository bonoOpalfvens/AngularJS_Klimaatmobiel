import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { KlimModuleCreateComponent } from './views/klim-module/klim-module-create/klim-module-create.component';
import { KlimModuleListComponent } from './views/klim-module/klim-module-list/klim-module-list.component';
import { AuthGuard } from './guards/auth.guard';
import { KlimModuleEditComponent } from './views/klim-module/klim-module-edit/klim-module-edit.component';
import { ModuleGuard } from './guards/module.guard';
import { InstanceDashboardComponent } from './views/module-instance/instance-dashboard/instance-dashboard.component';
import { ModuleInstanceGuard } from './guards/module-instance.guard';
import { RapportEndOfModuleComponent } from './views/module-instance/rapport-end-of-module/rapport-end-of-module.component';

export const routes: Routes = [
  { path: 'User/Login', component: LoginComponent },
  { path: 'User/Register', component: RegisterComponent },

  { path: 'Module/CreeerModule', component: KlimModuleCreateComponent, canActivate: [AuthGuard] },
  { path: 'Module/Bewerk/:id', component: KlimModuleEditComponent, canActivate: [AuthGuard], resolve: { module: ModuleGuard } },
  { path: 'Module/Lijst', component: KlimModuleListComponent, canActivate: [AuthGuard] },
  {
    path: 'ModuleInstance/Dashboard/:id', component: InstanceDashboardComponent,
    canActivate: [AuthGuard], resolve: { moduleInstance: ModuleInstanceGuard }
  },
  { 
    path: 'ModuleInstance/Dashboard/:id/CreateRapport', component: RapportEndOfModuleComponent, 
    canActivate: [AuthGuard], resolve: {moduleInstance: ModuleInstanceGuard }
  },

  { path: '', redirectTo: 'User/Login', pathMatch: 'full' },
  { path: '**', redirectTo: 'NotFound', pathMatch: 'full' }
];

export const userRoutes: Routes = [
  { path: 'User/Login', component: LoginComponent },
  { path: 'User/Register', component: RegisterComponent },

  { path: '', redirectTo: 'User/Login', pathMatch: 'full' },
  { path: '**', redirectTo: 'NotFound', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
