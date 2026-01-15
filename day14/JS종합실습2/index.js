
/* 1. 메모리 설계 */
const deptAry = [
  { "dcode": 1, "deptName": "개발팀" },
  { "dcode": 2, "deptName": "기획팀" },
  { "dcode": 3, "deptName": "디자인팀" },
  { "dcode": 4, "deptName": "인사팀" },
  { "dcode": 5, "deptName": "영업팀" }
];
const empAry = [
  { "ecode": 1, "name": "사원1", "position": "신입", "image": "exam1.img", "dcode": 1 },
  { "ecode": 2, "name": "사원2", "position": "대리", "image": "exam2.img", "dcode": 2 },
  { "ecode": 3, "name": "사원3", "position": "과장", "image": "exam3.img", "dcode": 3 },
  { "ecode": 4, "name": "사원4", "position": "차장", "image": "exam1.img", "dcode": 4 },
  { "ecode": 5, "name": "사원5", "position": "부장", "image": "exam2.img", "dcode": 5 },
  { "ecode": 6, "name": "사원6", "position": "신입", "image": "exam3.img", "dcode": 1 },
  { "ecode": 7, "name": "사원7", "position": "대리", "image": "exam1.img", "dcode": 2 },
  { "ecode": 8, "name": "사원8", "position": "과장", "image": "exam2.img", "dcode": 3 },
  { "ecode": 9, "name": "사원9", "position": "차장", "image": "exam3.img", "dcode": 4 },
  { "ecode": 10, "name": "사원10", "position": "부장", "image": "exam1.img", "dcode": 5 },
];
const vacationAry = [
  {
    "vcode": 1,
    "startDate": "2026-01-01",
    "endDate": "2026-01-05",
    "reason": "정기",
    "ecode": 1
  },
  {
    "vcode": 2,
    "startDate": "2026-01-02",
    "endDate": "2026-01-06",
    "reason": "병가",
    "ecode": 2
  },
  {
    "vcode": 3,
    "startDate": "2026-01-03",
    "endDate": "2026-01-07",
    "reason": "연차",
    "ecode": 3
  },
  {
    "vcode": 4,
    "startDate": "2026-01-04",
    "endDate": "2026-01-08",
    "reason": "경조사",
    "ecode": 4
  },
  {
    "vcode": 5,
    "startDate": "2026-01-05",
    "endDate": "2026-01-09",
    "reason": "정기",
    "ecode": 5
  },

];

/* 2. 함수 설계 11개 또는 13개 */
    // 1. 부서 등록 
    // 2. 부서 전체출력 
    // 3. 부서 수정 
    // 4. 부서 삭제 

    // 1. 사원 등록 
    // 2. 사원 전체출력 
    // 3. 사원 수정 
    // 4. 사원 삭제

    // 1. 휴가신청 등록
    // 2. 휴가신청 전체출력 
    // 3. 휴가신청 삭제/취소

    // + select 현재 존재하는 부서명만 출력 +
    // + select 현재 존재하는 사원명만 출력 +