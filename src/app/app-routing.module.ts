import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
    {path: 'dashboard/**', pathMatch: 'full', redirectTo: 'dashboard'},
    {path: 'profile/**', pathMatch: 'full', redirectTo: 'profile'},
    {path: 'create-twimp/**', pathMatch: 'full', redirectTo: 'create-twimp'},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
