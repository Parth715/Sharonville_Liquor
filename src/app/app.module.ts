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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LocationComponent,
    StoreHoursComponent,
    LoginComponent,
    ContactUsComponent,
    NavigationComponent,
    ManagermainComponent
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
