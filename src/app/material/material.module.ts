import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


const modulesArr=[
  MatButtonModule,
  MatSnackBarModule,
  MatCardModule,
  MatDividerModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modulesArr
  
  ],
  exports:[
   ...modulesArr
  ]
})
export class MaterialModule { }
