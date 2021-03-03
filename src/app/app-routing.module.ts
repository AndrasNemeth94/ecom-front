import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TshirtsComponent } from './pages/tshirts/tshirts.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { SweatersComponent } from './pages/sweaters/sweaters.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { AuthGuard } from './components/auth.guard';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'product_details/:id', component: ProductDetailsComponent},
  { path: 'tshirts', component: TshirtsComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'sweaters', component: SweatersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'subscribe', component: SubscribeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routesArray = [HomeComponent];
