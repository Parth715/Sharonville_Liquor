import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LocationComponent } from './location/location.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { StoreHoursComponent } from './store-hours/store-hours.component';

const routes: Routes = [
  {path: "", redirectTo: "/main", pathMatch: "full"},
  {path: "contactus", component:ContactUsComponent},
  {path: "login", component:LoginComponent},
  {path: "storehours", component: StoreHoursComponent},
  {path: "location", component: LocationComponent},
  {path: "main", component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
