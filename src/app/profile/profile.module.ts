import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile.component';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { FavoriteTwimpsComponent } from './favorite-twimps/favorite-twimps.component';
import { EditarComponent } from './editar/editar.component';
import { SameUserGuardService } from './same-user-guard.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  providers: [SameUserGuardService],
  declarations: [ProfileComponent, MyTwimpsComponent, FavoriteTwimpsComponent, EditarComponent]
})
export class ProfileModule { }
