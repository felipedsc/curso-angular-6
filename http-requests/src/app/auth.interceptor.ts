import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Chamada foi interceptada", req);

        //fazer depois
        // const copiaReq = req.clone({ headers: req.headers.set("Bearer", "12321321") });
        // const copiaReq = req.clone({ params: req.params.set("auth", "12321321") });

        //mudar para copiaReq
        return next.handle(req);
    }

}