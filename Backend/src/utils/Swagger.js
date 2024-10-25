import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pathToRoutesFile = path.join(__dirname, '../docs/*.js');

export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: "Image Gram API",
            version: '0.1.0',
            description: "This is a simple social media backend made with Express where users can have a similar experience to other social media platforms"
        },
        servers: [
            {
                url: 'http://localhost:3000',
            }
        ]
    },
    apis: [pathToRoutesFile],
};