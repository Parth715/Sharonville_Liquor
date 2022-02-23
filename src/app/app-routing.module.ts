import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ManagercustomerComponent } from './managercustomer/managercustomer.component';
import { ManagermainComponent } from './managermain/managermain.component';
import { StoreHoursComponent } from './store-hours/store-hours.component';

const routes: Routes = [
  {path: "", redirectTo: "/main", pathMatch: "full"},
  {path: "contactus", component:ContactUsComponent},
  {path: "login", component:LoginComponent},
  {path: "storehours", component: StoreHoursComponent},
  {path: "location", component: LocationComponent},
  {path: "main", component: MainComponent},
  {path: "manager", component: ManagermainComponent},
  {path: "customers", component: ManagercustomerComponent},
  {path: "addcustomer", component: AddcustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
