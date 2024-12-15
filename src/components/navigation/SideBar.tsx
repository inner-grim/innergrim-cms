export default function SideBar() {
  return (
    <>
      <div className=" bg-white p-0">
        <div className="sidebar pe-4 pb-3">
          <nav className="navbar bg-light navbar-light">
            <a className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary">
                <i className="fa fa-hashtag me-2" />
                INNERGRIM
              </h3>
            </a>
            <div className="navbar-nav w-100">
              <a className="nav-item nav-link">
                <i className="bi bi-table"></i>
                회원 관리
              </a>
              <a className="nav-link active" data-bs-toggle="dropdown">
                <i className="bi bi-bar-chart-line-fill"></i>
                서비스 통계 관리
              </a>
              <div className=" bg-transparent border-0">
                <a className="dropdown-item">서비스 통계 관리</a>
                <a className="dropdown-item">감정 카테고리</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
