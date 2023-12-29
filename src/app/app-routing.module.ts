import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TelevisionComponent } from './television/television.component';
import { MobileComponent } from './mobilePhone/mobilePhone.component';
import { LaptopComponent } from './laptop/laptop.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'television', component: TelevisionComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'laptop', component: LaptopComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


