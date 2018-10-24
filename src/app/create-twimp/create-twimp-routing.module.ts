import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTwimpComponent } from './create-twimp/create-twimp.component';
import { AuthGuardService } from '../core/auth-guard.service';

const createTwimpRoutes: Routes = [
    { path: 'create-twimp', component: CreateTwimpComponent, canActivate: [AuthGuardService]},
];

@NgModule({
    imports: [
        RouterModule.forChild(createTwimpRoutes)
    ]
})
export class CreateTwimpRoutingModule { }
