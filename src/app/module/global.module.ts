import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    MatTableModule, 
    FlexLayoutModule, 
    MatCardModule
  ]
})
export class GlobalModule { }
