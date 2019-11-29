import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { URL_LISTA_ORDENES_POR_IDCLIENTE, URL_UPDATE_ESTATUS_ORDEN_POR_ID } from '../utilities/utilities';
import { Station } from 'src/modelos/station.modelo';
import { catchError } from 'rxjs/operators';
import { Orden } from 'src/modelos/orden.modelo';
import { UpdateEstatus } from 'src/modelos/update.modelo';


@Injectable({
    providedIn: 'root',
})
export class DataBaseService implements HttpInterceptor {
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // clone request and replace 'http://' with 'https://' at the same time
        const secureReq = req.clone({
            url: req.url.replace('http://', 'https://')
        });
        // send the cloned, "secure" request to the next handler.
        return next.handle(secureReq);
    }

    updateEstatusXOrdenInfo(updateEstatus: UpdateEstatus): Observable<UpdateEstatus> {
        return this.http.put<UpdateEstatus>(URL_UPDATE_ESTATUS_ORDEN_POR_ID, updateEstatus, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }).
            pipe(
                catchError(this.handleError(updateEstatus))
            );
    }

    getOrdenesXIdCliente(id: string): Observable<Orden[]> {
        return this.http.get<Orden[]>(URL_LISTA_ORDENES_POR_IDCLIENTE.concat(id)).
            pipe(
                catchError(this.handleError<Orden[]>())
            );
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
