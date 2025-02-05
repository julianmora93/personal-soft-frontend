import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiEndpoint {

    private _congnitoEndpoint: string;
    private _baseEndpoint: string;

    constructor(){
        this._congnitoEndpoint = environment.cognitoEndpoint;
        this._baseEndpoint = environment.baseEndpoint;
    }

    authenticationEndpoint = (): string => this._congnitoEndpoint;

    getProducts = (page: number, pageSize: number, status: string): string => `${this._baseEndpoint}/products?page=${page}&page_size=${pageSize}${status}`;

    products = (): string => `${this._baseEndpoint}/products`;

}