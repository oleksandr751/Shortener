import { createContext } from "react";

function nope() {}

export const AuthContext = createContext({
 token: null,
 userId: null,
 login: nope,
 logout: nope,
 isAuthenticated: false,
});
