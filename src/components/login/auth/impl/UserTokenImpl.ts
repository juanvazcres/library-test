import { IUserToken } from "../userToken";

export class UserTokenDummy implements IUserToken {

    tObject: TokenObject = new TokenObject();
    contructor() { }

    setToken(token: string): void {
        this.tObject.token = token;
    }
    getToken(): string {
        return this.tObject.token;
    }
    getData(): any {
        return TokenObject;
    }
    setRefreshToken(token: string): void {
        this.tObject.refreshToken=token;
    }
    getRefreshToken(): string {
        return this.tObject.refreshToken;
    }


}

export class TokenObject {
    token: string;
    refreshToken: string;
}