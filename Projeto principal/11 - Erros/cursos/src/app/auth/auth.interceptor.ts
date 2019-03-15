import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Chamada foi interceptada", req);
        if (this.authService.estaAutenticado()) {

            const token = this.authService.obterToken();
            const copiaReq = req.clone({ params: req.params.set("auth", token) });

            return next.handle(copiaReq);
        } else {
            return next.handle(req);
        }
    }

}