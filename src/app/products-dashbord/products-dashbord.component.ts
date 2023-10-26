import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/models/services/products.service';
import { Iproducts } from '../shared/models/products';

@Component({
  selector: 'app-products-dashbord',
  templateUrl: './products-dashbord.component.html',
  styleUrls: ['./products-dashbord.component.scss']
})
export class ProductsDashbordComponent implements OnInit {
  productsArray:Array<Iproducts>=[]
  constructor(private _productsService : ProductsService) { }

  ngOnInit(): void {
   this.productsArray= this._productsService.getAllProducts()
  }

}
