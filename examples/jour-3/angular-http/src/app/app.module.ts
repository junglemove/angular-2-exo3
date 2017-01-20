import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { Restaurant } from './models/restaurant';
import {Store} from './models/store';
import { ProductListComponent } from './components/product-list/product-list.component'
import { ContainerService } from './services/container.service'

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [Store, Restaurant, ContainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
