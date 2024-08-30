import { Injectable } from "@angular/core";
import { NetworkingBase } from "../2.0.common/networking.base";
import { ContractNetworkingAccount, ContractNetworkingAccountOutput } from "../2.1.contract/contract.networking.account";
import { LocalAuth } from "../2.2.local/local.auth";

@Injectable({
    providedIn: 'root'
})
export class NetworkingAccount extends NetworkingBase implements ContractNetworkingAccount {

    loginOutput?: ContractNetworkingAccountOutput;

    constructor(private _localAuthentication: LocalAuth){ 
        super();
    }

    login(email: string, password: string): void {
        setTimeout(() => {
            if(email === "admin" && password === "admin"){
                this._localAuthentication.setToken("abcdefghijk");
                this._localAuthentication.setDataUserAndPassword(email, password);
                this.loginOutput?.loginOutputSuccessful();
            }else{
                this.loginOutput?.loginOutputFailure();
            }
        }, 3000);
    }

}