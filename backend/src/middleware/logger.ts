import { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';

// Custom token for response time in milliseconds
morgan.token('response-time-ms', (req: Request, res: Response) => {
  const responseTime = res.getHeader('X-Response-Time');
  return responseTime ? `${responseTime}ms` : '-';
});

// Custom format
const format = ':method :url :status :response-time ms - :res[content-length]';

export const logger = morgan(format, {
  skip: (req: Request) => {
    // Skip logging for health checks in production
    return process.env.NODE_ENV === 'production' && req.path === '/health';
  },
  stream: {
    write: (message: string) => {
      console.log(message.trim());
    },
  },
});

// Request timing middleware
export const requestTimer = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    res.setHeader('X-Response-Time', duration);
  });
  
  next();
};
