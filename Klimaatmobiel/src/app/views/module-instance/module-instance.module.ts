import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleInstanceViewComponent } from './module-instance-view/module-instance-view.component';



@NgModule({
  declarations: [ModuleInstanceViewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ModuleInstanceViewComponent
  ]
})
export class ModuleInstanceModule { }
