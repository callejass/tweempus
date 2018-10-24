// import { Injectable } from '@angular/core';
import {HttpRequest, HttpResponse, HttpInterceptor, HttpHandler, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class LogRequestInterceptor implements HttpInterceptor {

    constructor(public auth: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(request.url);
        return next.handle(request);
    }

}
