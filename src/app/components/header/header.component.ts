import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarTexto(texto: String){

    if (texto.length> 3){
      this.router.navigate(['buscar',texto] );
    } else {
      alert('Cantidad minima de caracteres para realizar la busqueda es de 3')
    }
  }

  resetBusqueda(){
    this.router.navigate(['home'] );
  }
}
