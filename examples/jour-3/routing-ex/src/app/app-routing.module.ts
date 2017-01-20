import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from '../app/components/create-product/create-product.component';
import { ProductListComponent } from '../app/components/product-list/product-list.component';
import { AuthChecker } from '../app/services/auth-checker.service';

const routes: Routes = [
  {
    path: 'create', 
    component: CreateProductComponent
  },{
    path: 'products', 
    component: ProductListComponent, 
    canActivate: [AuthChecker]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthChecker]
})
export class AppRoutingModule { }
