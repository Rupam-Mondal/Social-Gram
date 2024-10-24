import jwt from 'jsonwebtoken'
import { secret_key } from '../config/serverconfig.js';

export function createToken(payload){
    return jwt.sign(payload , secret_key , {expiresIn:'1d'});
}

export function verifyJwtToken(Token){
    return jwt.verify(Token , secret_key);
}