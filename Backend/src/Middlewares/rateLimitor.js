import { rateLimit } from 'express-rate-limit'

export const limiter = rateLimit({
    windowMs: 0.5 * 60 * 1000,
    limit: 600, 
    standardHeaders: 'draft-7',
    legacyHeaders: false,
})