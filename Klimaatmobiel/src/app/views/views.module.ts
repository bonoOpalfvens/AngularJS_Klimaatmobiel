import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './navigation/navigation.module';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    UserModule
  ],
  exports: [
    NavigationModule,
    UserModule
  ]
})
export class ViewsModule { }
