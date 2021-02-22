import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
