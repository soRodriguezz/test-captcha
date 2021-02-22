import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Personaje } from 'src/app/interfaces/dbz.interfaces';


@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent implements OnInit {
  sitekey: string;

  constructor(private _renderer: Renderer2) {
    this.sitekey = '6LdMN2IaAAAAAA_6DcIa_Z2st56Yjrq7K1nILZab';
  }

  ngOnInit(): void {
    // agregar script
    let script = this._renderer.createElement('script');
    script.defer = true;
    script.async = true;
    script.src = 'https://www.google.com/recaptcha/api.js';
    this._renderer.appendChild(document.body, script);
  }

  resolved(token) {
    // enviar token
    console.log(token);
  }

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
      password: '',
    };
  }
}
