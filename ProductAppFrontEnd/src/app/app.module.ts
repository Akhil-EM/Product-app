import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import{ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from'@angular/common/http';
import{StorageServiceModule} from 'angular-webstorage-service'
@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    LoginComponent,
    SignUpComponent,
    ProductViewComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
