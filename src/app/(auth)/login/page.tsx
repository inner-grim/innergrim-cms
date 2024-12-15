'use client';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const login = () => {
    router.push('/');
  };

  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0">
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
                  />
                  <label htmlFor="floatingInput">ID</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
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
