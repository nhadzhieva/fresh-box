import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {  MatCardModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';


import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { BoxDetailComponent } from './box-detail/box-detail.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeListComponent,
    BoxDetailComponent,
    AboutComponent,
    LoginComponent,
    CheckoutComponent,
    RecipeDetailComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    AppRoutingModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
