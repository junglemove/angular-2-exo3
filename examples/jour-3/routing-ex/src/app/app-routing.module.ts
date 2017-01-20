import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from '../app/components/create-product/create-product.component';
import { ProductListComponent } from '../app/components/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'create', 
    component: CreateProductComponent
  },{
    path: 'products', 
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
