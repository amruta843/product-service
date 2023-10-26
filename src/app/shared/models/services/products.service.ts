import { Injectable } from '@angular/core';
import { Iproducts } from '../products';
import { productsStatus } from '../../constant/productEnum';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnakbarService } from './snakbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productArray: Array<Iproducts> = [
    {
      pname: "Samsung 31",
      pdetails: "Mobile 128 6",
      pstatus: productsStatus.Inprogress,
      id: 'qwerty3456wertyu'
    },
    {
      pname: "Samsung S32",
      pdetails: "Mobile 128 6",
      pstatus: productsStatus.Dispatched,
      id: 'ghjkl5678rtyui'
    }
  ]
  constructor(private _snakBarService:SnakbarService) { }

  getAllProducts(): Array<Iproducts>{
    return this.productArray
  }
  createProduct(prod:Iproducts){
    this.productArray.push(prod)
    this._snakBarService.openSnackBar(`the product ${prod.pname} is added successfully to the card`, 'close')
  }
  updateStatus(id:string, updatedStatus:productsStatus){
    for(const obj of this.productArray){
      if(obj.id===id){
        obj.pstatus= updatedStatus;
        this._snakBarService.openSnackBar(`the status of the product ${obj.pname}is updated to ${updatedStatus}`, 'Close')
      }
    }
  }
}
