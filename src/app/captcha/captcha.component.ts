import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html'
})
export class CaptchaComponent implements OnInit {

  sitekey: string;

  constructor(private _renderer: Renderer2) { 
    this.sitekey='6LdMN2IaAAAAAA_6DcIa_Z2st56Yjrq7K1nILZab';
  }


  ngOnInit(): void {
    // agregar script
    let script = this._renderer.createElement('script');
    script.defer = true;
    script.async = true;
    script.src="https://www.google.com/recaptcha/api.js";
    this._renderer.appendChild(document.body, script);

  }
  
  resolved(token){
    // enviar token al backend
    console.log(token);
  }
}
