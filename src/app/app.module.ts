import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { VegComponent } from './veg/veg.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path:"login",
    component:UserLoginComponent
  },
  {
    path:"restaurants",
    component:RestaurantsComponent
  },
  {
    path:"nonveg",
    component:NonVegComponent
  },
  {
    path:"veg",
    component:VegComponent

  }
]

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    UserLoginComponent,
    NonVegComponent,
    VegComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
