import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    oidc: false,
    loginUrl: "http://localhost:8080/oauth/authorize", 
    redirectUri: window.location.origin + "/login",
    clientId: "client",
    scope: "read write",
    logoutUrl: "http://localhost:8080/resource/user/logout",
    userinfoEndpoint: "http://localhost:8080/resource/user"
};