export default function Navigation() {
  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        <div className="sidebar pe-4 pb-3">
          <nav className="navbar bg-light navbar-light">
            <a href="index.html" className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary">
                <i className="fa fa-hashtag me-2" />
                INNERGRIM
              </h3>
            </a>
            <div className="navbar-nav w-100">
              <a href="index.html" className="nav-item nav-link active">
                <i className="bi bi-slash-circle-fill"></i>
                회원 관리
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-slash-circle-fill"></i>
                  서비스 통계 관리
                </a>
                <div className="dropdown-menu bg-transparent border-0">
                  <a href="button.html" className="dropdown-item">
                    서비스 통계 관리
                  </a>
                  <a href="typography.html" className="dropdown-item">
                    감정 카테고리
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
