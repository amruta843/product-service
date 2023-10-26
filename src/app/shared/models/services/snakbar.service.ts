import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnakbarService {

  constructor(private _matsnack:MatSnackBar) { }
  openSnackBar(msg:string, action:string){
    this._matsnack.open(msg, action,{
      duration: 3000,
      horizontalPosition:'left',
      verticalPosition:'top'

    })
  }
}
