import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Так в реальных проектах не делать! Делаем только для курса!
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
