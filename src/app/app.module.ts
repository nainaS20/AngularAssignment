import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './CustomPipe';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TelevisionComponent } from './television/television.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobilePhone/mobilePhone.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    HomeComponent,
    ProductComponent,
    ContactUsComponent,
    TelevisionComponent,
    LaptopComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
