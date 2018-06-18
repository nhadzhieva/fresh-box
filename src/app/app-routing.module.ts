import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { BoxDetailComponent } from './box-detail/box-detail.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
   },
  {
    path: 'home', component: HomeComponent
   },
   {
    path: 'recipes', component: RecipeListComponent
   },
   {
    path: 'recipe/:id', component: RecipeDetailComponent
   },
   {
    path: 'box' , component: BoxDetailComponent
   },
   {
    path: 'about' , component: AboutComponent
   },
   {
    path: 'login' , component: LoginComponent
   },
   {
    path: 'signup' , component: SignupComponent
   },
   {
    path: 'checkout' , component: CheckoutComponent
   },
 ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
