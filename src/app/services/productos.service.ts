import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { Subscriber, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando = true;

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

   private cargarProductos() {
    this.http.get('https://angular-html-f5321.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[]) => {

          console.log(resp);
          this.cargando = false;

        });
  }
}



