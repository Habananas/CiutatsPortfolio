import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  id: any = '';

  producto:any;

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('cod');
    console.log(this.id)

    this.productsService.getProduct(this.id)
    .subscribe((resp: any) => {
      console.log(resp); 
      this.producto = resp;
    });

  }

}
