import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  productos_idx: any = [];
  productos_encontrados: any = [];
  
textoBusq: any = '';

  constructor(private productsService: ProductsService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.textoBusq = this.activatedRoute.snapshot.paramMap.get('textoBusq');
    this.textoBusq = this.textoBusq.toLowerCase();
    console.log(this.textoBusq);

    this.productsService.getProductsIdx()
      .subscribe((res: any)=> { 
        console.log(res);
        this.productos_idx = res;
        console.log(this.productos_idx);
      
        this.productos_idx.forEach((prod: any) =>{
          let categoria = prod.categoria.toLowerCase();
          if (categoria.indexOf(this.textoBusq)>= 0){
          this.productos_encontrados.push(prod);
          }
        });
        console.log(this.productos_encontrados);

      });
  }

}
