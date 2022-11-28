import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { VegComponent } from './veg/veg.component';
import { NavigationComponent } from './navigation/navigation.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
