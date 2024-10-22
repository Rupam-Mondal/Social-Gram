import dotenv from 'dotenv';

dotenv.config();

export const db_url = process.env.DB_URL;
export const cdn_api_key = process.env.CDN_API_KEY;
export const cdn_api_secret_key = process.env.CDN_API_SECRET_KEY;
export const cloud_name = process.env.CLOUD_NAME;
export const secret_key = process.env.JWT_SECRET_KEY;
