import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule, BsDropdownModule, BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  imports: [ 
    CommonModule,   
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  exports: [
    CommonModule,    
    CollapseModule,
    BsDropdownModule,
    BsDatepickerModule
  ]
})
export class SharedModule { }
