import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    FlexLayoutModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    MatTableModule, 
    FlexLayoutModule, 
    MatCardModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class GlobalModule { }
