'use client';

import Link from 'next/link';
import styles from './page.module.scss';

export default function page() {
  return (
    <div className="content p-3">
      <h3>서비스 통계 관리</h3>
      <div className="p-3 my-3 bg-light rounded">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center">
            <h5 className="me-3 mb-0">종합 현황</h5>
            <div className="">날짜 피커</div>
          </div>
          <Link href={'/'} className="">
            데이터 새로고침
          </Link>
        </div>
        <div className="mb-4 p-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="">
              <div className="text-dark mb-2">회원</div>
              <div className="d-flex align-items-center">
                <div className={`${styles.statusBox} bg-white me-2`}>
                  <p className="text-dark">신규 가입</p>
                  <div className="text-primary">200</div>
                </div>
                <div className={`${styles.statusBox} bg-white me-2`}>
                  <p className="text-dark">주의 필요 회원</p>
                  <div className="text-primary">40</div>
                </div>
                <div className={`${styles.statusBox} bg-white me-2`}>
                  <p className="text-dark">탈퇴 수</p>
                  <div className="text-primary">40</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-dark mb-2">일기</div>
              <div className="d-flex align-items-center">
                <div className={`${styles.statusBox} bg-white me-2`}>
                  <p className="text-dark">생성된 일기수</p>
                  <div className="text-primary">200</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-dark mb-2">감정</div>
              <div className="d-flex align-items-center">
                <div className={`${styles.statusBox} bg-white me-2`}>
                  <p className="text-dark">긍정</p>
                  <div className="text-primary">20</div>
                </div>
                <div className={`${styles.statusBox} bg-white me-2`}>
                  <p className="text-dark">부정</p>
                  <div className="text-primary">70</div>
                </div>
                <div className={`${styles.statusBox} bg-white`}>
                  <p className="text-dark">중립</p>
                  <div className="text-primary">70</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-black-50">
          주의 필요 회원 : 슬픔 혹은 분노의 감정이 3회 연속으로 기록된 회원
        </div>
      </div>
      <h5 className="mb-2">일기 통계 상세</h5>
      <h5 className="mb-0">감정 통계 상세</h5>
    </div>
  );
}
