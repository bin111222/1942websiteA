   // src/hooks/useSmoothScroll.ts
   'use client';

   import { useEffect } from 'react';

   export const useSmoothScroll = () => {
     useEffect(() => {
       const handleClick = (e: MouseEvent) => {
         const target = e.target as HTMLElement;
         if (target.tagName === 'A') {
           const href = target.getAttribute('href');
           if (href?.startsWith('#')) {
             e.preventDefault();
             const element = document.querySelector(href);
             if (element) {
               element.scrollIntoView({
                 behavior: 'smooth',
                 block: 'start',
                 inline: 'nearest',
               });
             }
           }
         }
       };

       document.addEventListener('click', handleClick);
       return () => document.removeEventListener('click', handleClick);
     }, []);
   };