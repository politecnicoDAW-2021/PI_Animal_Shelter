
import {Inject, Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode} from "@angular/common/http";
import { AuthService } from "src/app/services/auth.service";
import { catchError, Observable, throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor{
    
  constructor(
    private authService: AuthService,
    private router: Router,
    ) {
  }

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler, ): any {        
        const authToken = this.authService.getToken()
        console.log('authToken', authToken);   

        if (authToken) {
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            },
        });
        }

        return next.handle(req).pipe(
        
        catchError((err: HttpErrorResponse) => {
            if(err.status === HttpStatusCode.Unauthorized){
            this.authService.logout();
            this.router.navigate(['login']);
            }
            return throwError(err);
        })
        )
    }
    
}