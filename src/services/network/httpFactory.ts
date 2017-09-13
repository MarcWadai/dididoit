import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {HttpInterceptor} from "./httpInterceptor";

export function HttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new HttpInterceptor(xhrBackend, requestOptions);
}
