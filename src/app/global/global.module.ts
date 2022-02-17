import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    FlexLayoutModule
  ],
  exports: [MatTableModule, FlexLayoutModule]
})
export class GlobalModule { }
