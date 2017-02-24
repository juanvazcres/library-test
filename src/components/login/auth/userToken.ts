
export interface IUserToken{
    getToken():string;
    setToken(token :string):void;
    setRefreshToken(token :string):void;
    getRefreshToken():string;
    getData():any;
}