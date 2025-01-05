'use client';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
import { useState } from 'react';
import { NextResponse } from 'next/server';

export default function Login() {
  const router = useRouter();
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // id 입력 시 호출
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  // password 입력 시 호출
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = async () => {
    console.log(`${process.env.NEXT_PUBLIC_API_URL}`);
    console.log('##', id, password);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/admin/login`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          loginId: id,
          password: password,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    } else {
      // accessToken 저장
      // const res = NextResponse.next();
      // res.cookies.set('accessToken', response.data.accessToken);
      router.push('/');
    }
  };

  return (
    <>
      <div
        className={`${styles.loginContainer} container-xxl bg-white d-flex p-0`}
      >
        <div className="container-fluid">
          <div
            className="row h-100 align-items-center justify-content-center"
            style={{ minHeight: '100vh' }}
          >
            <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
              <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3>
                    <p>Team IGNM_CMS Admin</p>
                    <p className="text-primary">
                      AI 기반 감정 관리 플랫폼 관리자
                    </p>
                  </h3>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="ID"
                    value={id}
                    onChange={handleIdChange}
                  />
                  <label htmlFor="floatingInput">ID</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                  className="btn btn-primary py-3 w-100 mb-4"
                  onClick={login}
                >
                  로그인
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
