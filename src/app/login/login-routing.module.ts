import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignupComponent } from './signup/signup.component';

const loginRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: SignupComponent }

];

@NgModule({
    imports: [
        RouterModule.forChild(loginRoutes)
    ]
})
export class LoginRoutingModule { }
