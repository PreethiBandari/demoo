import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShowempComponent } from './showemp/showemp.component';
import { ExperiencePipe } from './experience.pipe';
import { GenderPipe } from './gender.pipe';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './auth.guard';
import {HttpClientModule} from '@angular/common/http' ;


const appRoot: Routes =[{path: '', component: LoginComponent},
{path: 'login', canActivate:[AuthGuard], component: LoginComponent},
{path: 'registration',  canActivate:[AuthGuard], component : RegisterComponent},
{path: 'employee', canActivate:[AuthGuard], component: ShowempComponent},
{path: 'products',  canActivate:[AuthGuard], component: ProductComponent}];


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    ShowempComponent,
    ExperiencePipe,
    GenderPipe,
    RegisterComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
