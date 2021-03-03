import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routesArray } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SidedrawerComponent } from './sidedrawer/sidedrawer.component';
import { ShadowComponent } from './sidedrawer/shadow/shadow.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { TshirtsComponent } from './pages/tshirts/tshirts.component';
import { SweatersComponent } from './pages/sweaters/sweaters.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { AuthGuard } from './components/auth.guard';
import { LoginserviceService } from './services/loginservice.service';
import { ProductService } from './services/product.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidedrawerComponent,
    routesArray,
    ShadowComponent,
    FooterComponent,
    ShoesComponent,
    TshirtsComponent,
    SweatersComponent,
    AboutComponent,
    LoginComponent,
    CartComponent,
    ProfileComponent,
    SubscribeComponent,
    ProductComponent,
    ProductDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    LoginserviceService,
    ProductService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
