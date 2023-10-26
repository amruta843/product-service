import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iproducts } from '../shared/models/products';
import { UuidService } from '../shared/models/services/uuid.service';
import { productsStatus } from '../shared/constant/productEnum';
import { ProductsService } from '../shared/models/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
productsForm !: FormGroup
  constructor(private _uuidService:UuidService,
    private _productService:ProductsService) { }

  ngOnInit(): void {

    this.createProductForm()
  }

  createProductForm(){
    this.productsForm= new FormGroup({
      pname: new FormControl(null, [Validators.required]),
      pdetails: new FormControl(null, [Validators.required]),
     
    })


  }

  onProdAdd(){
    if(this.productsForm.valid){
      let newprod: Iproducts= {...this.productsForm.value, id:this._uuidService.uuid(), pstatus:productsStatus.Inprogress}
      
      
      console.log(newprod)
      this._productService.createProduct(newprod)
      this.productsForm.reset()
    }
  }
}
