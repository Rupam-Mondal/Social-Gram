import {v2 as cloudinary} from 'cloudinary';
import { cdn_api_key, cdn_api_secret_key, cloud_name } from './serverconfig';

cloudinary.config({
    cloud_name: cloud_name,
    api_key: cdn_api_key,
    api_secret:cdn_api_secret_key
});

export default cloudinary;