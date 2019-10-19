import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './navigation/navigation.module';
import { UserModule } from './user/user.module';
import { KlimModuleCreateComponent } from './klim_module/klim-module-create/klim-module-create.component';
import { MaterialModule } from '../material.module';
import { KlimModuleModule } from './klim_module/klim-module.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    MaterialModule,
    UserModule,
    KlimModuleModule
  ],
  exports: [
    NavigationModule,
    UserModule,
    KlimModuleModule
  ]
})
export class ViewsModule { }
