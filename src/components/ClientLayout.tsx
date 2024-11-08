'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
} 