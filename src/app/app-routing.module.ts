import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
//componetes
import { SignupComponent} from './components/signup/signup.component'
import { SigninComponent } from './components/signin/signin.component';

//vistas
import { HomeComponent} from './views/home/home.component'
import { ProductsComponent } from './views/products/products.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProfileComponent } from './views/profile/profile.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'signin', component:SigninComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'home', component:HomeComponent},
  {path: 'products', component:ProductsComponent,canActivate: [AuthGuard]},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets = [SigninComponent, SignupComponent]
