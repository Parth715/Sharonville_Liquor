import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LocationComponent } from './location/location.component';
import { StoreHoursComponent } from './store-hours/store-hours.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ManagermainComponent } from './managermain/managermain.component';
import { MenuComponent } from './Managermenu/menu/menu.component';
import { MenuitemsComponent } from './Managermenu/menuitems/menuitems.component';
import { DatePipe } from '@angular/common';
import { ManagercustomerComponent } from './managercustomer/managercustomer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LocationComponent,
    StoreHoursComponent,
    LoginComponent,
    ContactUsComponent,
    NavigationComponent,
    ManagermainComponent,
    MenuComponent,
    MenuitemsComponent,
    ManagercustomerComponent,
    AddcustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
