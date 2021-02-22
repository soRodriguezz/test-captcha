import { Component, Input } from "@angular/core";
import { Personaje } from "src/app/interfaces/dbz.interfaces";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    @Input() nuevo: Personaje = {
        nombre: '',
        password: '',
      };
    
      agregar() {
        if (this.nuevo.nombre.trim().length === 0) {
          return;
        }
    
        console.log(this.nuevo);
    
        this.nuevo = {
          nombre: '',
          password: ''
        };
    }

}
