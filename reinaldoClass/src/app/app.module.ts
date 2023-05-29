import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_header/header.component';
import { FooterComponent } from './_footer/footer.component';
import { DataBaseComponent } from './data-base/data-base.component';
import { CSharpComponent } from './c-sharp/c-sharp.component';
import { BodyComponent } from './_body/body.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './_auth/auth-interceptor.service';
import { AuthModule } from './_auth/auth.module';
import { SintaxComponent } from './data-base/sintax/sintax.component';
import { TokenComponent } from './c-sharp/token/token.component';
import { HttpDeleteComponent } from './c-sharp/http-delete/http-delete.component';
import { HttpGetComponent } from './c-sharp/http-get/http-get.component';
import { HttpPostComponent } from './c-sharp/http-post/http-post.component';
import { HttpPutComponent } from './c-sharp/http-put/http-put.component';
import { CSharpModule } from './c-sharp/c-sharp.module';
import { DataBaseModule } from './data-base/data-base.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DataBaseComponent,
    CSharpComponent,
    BodyComponent,
   

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CSharpModule,
    DataBaseModule,



    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  exports: [],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
