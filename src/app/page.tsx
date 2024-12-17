'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function page() {
  const router = useRouter();

  useEffect(() => {
    /**
     * TODO: 로그인 여부 체크
     * - 인증X > 로그인 페이지로 리다이렉트
     * - 인증O > 서비스 통계관리 페이지로 이동
     */
    // router.push('/login');
    router.push('/service-statistics');
  }, []);

  return <div className="content"></div>;
}
