import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProductsIdx(){
    return this.http.get('https://portfolio-pam-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json');
  }

  getProduct(codProd: string){
    return this.http.get(`https://portfolio-pam-default-rtdb.europe-west1.firebasedatabase.app/productos/${codProd}.json`);
  }
}
