import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleInstanceViewComponent } from './module-instance-view/module-instance-view.component';
import { BestellingViewComponent } from './bestelling-view/bestelling-view.component';
import { BestellingListComponent } from './bestelling-list/bestelling-list.component';




@NgModule({
  declarations: [ModuleInstanceViewComponent, BestellingViewComponent, BestellingListComponent],
  imports: [
    CommonModule
  ],
  
  exports: [
    ModuleInstanceViewComponent, BestellingViewComponent, BestellingListComponent
  ]
})
export class ModuleInstanceModule { }
