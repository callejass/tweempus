import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [AuthGuardService, AuthenticationService],
  declarations: [HeaderComponent, NavComponent],
  exports: [HeaderComponent, NavComponent]
})
export class CoreModule { }
