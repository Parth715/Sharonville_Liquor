import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel';
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
import { CustomerfeedbackComponent } from './customerfeedback/customerfeedback.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { TrialComponent } from './trial/trial.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { EditComponent } from './expenses/edit/edit.component';
import { AddComponent } from './expenses/add/add.component';

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
    AddcustomerComponent,
    CustomerfeedbackComponent,
    ViewfeedbackComponent,
    BottomnavComponent,
    TrialComponent,
    ExpensesComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    OwlModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
