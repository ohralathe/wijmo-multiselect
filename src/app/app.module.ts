import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WjInputModule } from 'wijmo/wijmo.angular2.input';

import { AppComponent } from './app.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, WjInputModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
