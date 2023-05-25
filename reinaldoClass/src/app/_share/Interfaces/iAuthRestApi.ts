export interface IAuthApiToken {
  idToken:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
  kind:string;
  registered?:string;

}
