import jwt from 'jsonwebtoken'
import { secret_key } from '../config/serverconfig.js';

export function createToken(payload){
    return jwt.sign(payload , secret_key , {expiresIn:'1d'});
}