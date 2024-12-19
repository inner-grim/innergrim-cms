'use client';

import Link from 'next/link';
import styles from './page.module.scss';
import { LineGraph } from '@/components/graph/LineGraph';
import { BarGraph } from '@/components/graph/BarGraph';
import { PieGraph } from '@/components/graph/PieGraph';

export default function page() {
  return (
    <div className="content p-4">
      <h3>서비스 통계 관리</h3>
      <div className="container-fluid p-2">
        <div className="d-flex align-items-center justify-content-between my-3 ">
          <div className="d-flex align-items-center">
            <h5 className="me-4 mb-0">종합 현황</h5>
            <div className="">날짜 피커</div>
          </div>
          <div className="">
            <Link href={'/'} className="">
              {/* <i className="bi bi-arrow-clockwise me-1 text-primary"></i> */}
              데이터 새로고침
            </Link>
          </div>
        </div>
        <div className="p-4 bg-light rounded">
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
          <div className={`${styles.warn} text-black-50`}>
            <i className="bi bi-exclamation-circle me-2"></i>
            주의 필요 회원 : 슬픔 혹은 분노의 감정이 3회 연속으로 기록된 회원
          </div>
        </div>
      </div>
      <div className="container-fluid p-2">
        <h5 className="my-3">일기 통계 상세</h5>
        <div className="">
          <div className="row g-4">
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">일기 작성</h6>
                <LineGraph />
                <div className="d-flex flex-row-reverse">
                  <div
                    className={`${styles.viewDetail} mt-4 text-black-50 text-decoration-underline`}
                  >
                    상세 정보 보기
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">시간대별 일기</h6>
                <BarGraph />
                <div className="d-flex flex-row-reverse">
                  <div
                    className={`${styles.viewDetail} mt-4 text-black-50 text-decoration-underline`}
                  >
                    상세 정보 보기
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-2">
        <h5 className="my-3">감정 통계 상세</h5>
        <div className="">
          <div className="row g-4">
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">감정 카테고리</h6>
                <PieGraph />
                <div className="d-flex flex-row-reverse">
                  <div
                    className={`${styles.viewDetail} mt-4 text-black-50 text-decoration-underline`}
                  >
                    상세 정보 보기
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">감정별 추이_부정</h6>
                <LineGraph />
                <div className="d-flex flex-row-reverse">
                  <div
                    className={`${styles.viewDetail} mt-4 text-black-50 text-decoration-underline`}
                  >
                    상세 정보 보기
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">감정별 추이_긍정</h6>
                <LineGraph />
                <div className="d-flex flex-row-reverse">
                  <div
                    className={`${styles.viewDetail} mt-4 text-black-50 text-decoration-underline`}
                  >
                    상세 정보 보기
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xl-6">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">감정별 추이_중립</h6>
                <LineGraph />
                <div className="d-flex flex-row-reverse">
                  <div
                    className={`${styles.viewDetail} mt-4 text-black-50 text-decoration-underline`}
                  >
                    상세 정보 보기
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
