import { Component, Input, OnInit } from '@angular/core';
import { Iproducts } from '../shared/models/products';
import { ProductsService } from '../shared/models/services/products.service';
import { productsStatus } from '../shared/constant/productEnum';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() productObj !: Iproducts;
  productstatus!: productsStatus;
  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
  }
  onProgressUpdate(){
    this._productsService.updateStatus(this.productObj.id, productsStatus.Inprogress )

  }
  onDispatch(){
    this._productsService.updateStatus(this.productObj.id, productsStatus.Dispatched )

  }
  onDelivered(){
    this._productsService.updateStatus(this.productObj.id, productsStatus.Deliverd )

  }
  onStatusUpdate(){
    this._productsService.updateStatus(this.productObj.id, productsStatus.Inprogress ||  productsStatus.Dispatched ||  productsStatus.Deliverd )
  }
}
