import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {ProductComponent} from './product/product.component';

import { from } from 'rxjs';
import { CartComponent } from './cart/cart.component';
// import { ProductsComponent } from './product/components/products/products.component';
// import { ContactComponent } from './contact/components/contact/contact.component';
import { DemoComponent } from './demo/demo.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    // ProductComponent,
    CartComponent,
    // ProductsComponent,
    // ContactComponent,
    DemoComponent,
    PageNotFoundComponent,
    // ProductDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
