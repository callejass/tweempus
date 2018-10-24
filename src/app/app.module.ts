import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StorageServiceModule } from 'angular-webstorage-service';

import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';


import { DashboardModule } from './dashboard/dashboard.module';
import { ProfileModule } from './profile/profile.module';
import { LoginModule } from './login/login.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogRequestInterceptor } from './core/log-request-interceptor';
import { CreateTwimpModule } from './create-twimp/create-twimp.module';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    CoreModule,
    DashboardModule,
    ProfileModule,
    LoginModule,
    CreateTwimpModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
