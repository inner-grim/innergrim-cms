'use client';

import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import { useEffect } from 'react';

export default function page() {
  const router = useRouter();

  useEffect(() => {
    // '/' 이동 시 로그인 여부에 따라 페이지 이동
    const response = NextResponse.next();
    const accessToken = response.cookies.get('accessToken');
    if (accessToken) router.push('/service-statistics');
    else router.push('/login');
  }, []);

  return <div className="content"></div>;
}
