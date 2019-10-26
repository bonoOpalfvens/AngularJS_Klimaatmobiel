import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './navigation/navigation.module';
import { UserModule } from './user/user.module';
import { MaterialModule } from '../material.module';
import { KlimModuleModule } from './klim-module/klim-module.module';
import { ModuleInstanceModule } from './module-instance/module-instance.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    MaterialModule,
    UserModule,
    KlimModuleModule,
    ModuleInstanceModule
  ],
  exports: [
    NavigationModule,
    UserModule,
    KlimModuleModule,
    ModuleInstanceModule
  ]
})
export class ViewsModule { }
