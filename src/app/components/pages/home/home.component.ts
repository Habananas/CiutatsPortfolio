import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos_idx: any = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductsIdx()
      .subscribe((res: any)=> {
        //console.log(res);
        this.productos_idx = res;
      });
  

}
}
