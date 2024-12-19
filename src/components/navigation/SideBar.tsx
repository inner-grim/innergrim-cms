'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SideBar() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState('service-statistics');

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    if (menu === 'member-list') {
      router.push('/member-list');
    } else if (menu === 'service-statistics') {
      router.push('service-statistics');
    }
    // else if (menu === 'emotion-category') {
    //   router.push('emotion-category');
    // }
  };

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
              <div className="nav-item nav-link active">
                <i className="bi bi-table"></i>
                회원 관리
              </div>
              <div className=" bg-transparent border-0">
                <div
                  className={`${
                    activeMenu === 'member-list' ? 'active' : ''
                  } dropdown-item`}
                  onClick={() => handleMenuClick('member-list')}
                >
                  회원 목록
                </div>
              </div>
              <br />
              <div className="nav-link active" data-bs-toggle="dropdown">
                <i className="bi bi-bar-chart-line-fill"></i>
                서비스 통계 관리
              </div>
              <div className=" bg-transparent border-0">
                <div
                  className={`${
                    activeMenu === 'service-statistics' ? 'active' : ''
                  } dropdown-item`}
                  onClick={() => handleMenuClick('service-statistics')}
                >
                  서비스 통계 관리
                </div>
                {/* <div
                  className={`${
                    activeMenu === 'emotion-category' ? 'active' : ''
                  } dropdown-item`}
                  onClick={() => handleMenuClick('emotion-category')}
                >
                  감정 카테고리
                </div> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
