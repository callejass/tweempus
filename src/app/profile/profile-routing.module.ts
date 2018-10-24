import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { FavoriteTwimpsComponent } from './favorite-twimps/favorite-twimps.component';
import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { EditarComponent } from './editar/editar.component';
import { SameUserGuardService } from './same-user-guard.service';

const profileRoutes: Routes = [
    { path: 'profile/:id', component: ProfileComponent,
    children: [
        {
            path: '', pathMatch: 'prefix', redirectTo: 'mios'
        },
        {
            path: 'favoritos', component: FavoriteTwimpsComponent
        },
        {
            path: 'mios', component: MyTwimpsComponent
        },
        {
            path: 'edit', component: EditarComponent, canActivate: [SameUserGuardService]
        }
    ]
     },
];

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ]
})
export class ProfileRoutingModule { }
