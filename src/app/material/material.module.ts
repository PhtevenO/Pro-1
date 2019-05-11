import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
     MatDialogModule,
     MatSortModule,
     MatInputModule,
    MatButtonModule,
     MatCheckboxModule,
     BrowserAnimationsModule,
  ],
  exports: [
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatInputModule,
   MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
  ]
})
export class MaterialModule { }
