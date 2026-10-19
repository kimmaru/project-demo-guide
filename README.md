# 🔍 명탐정 방탈출 — 실시간 시연 & 면접관 가이드 (Demo & Walkthrough Guide)

면접 담당자 및 채용 평가자를 위한 **명탐정 방탈출(Detective Escape Room)** 실시간 시연 포털 및 관리자 모니터링 가이드 웹사이트입니다.

---

## ⚡ 퀵 시연 정보 (Quick Cheat Sheet)

| 항목 | 바로가기 / 값 | 비고 |
|---|---|---|
| **라이브 웹사이트** | [https://detective-escape-room.vercel.app](https://detective-escape-room.vercel.app) | 프로덕션 배포 완료 |
| **도전하기 입장 암호** | `Z7P9NC` | 복사하여 PIN 입력창에 입력 |
| **관리자 대시보드 URL** | [https://detective-escape-room.vercel.app/admin](https://detective-escape-room.vercel.app/admin) | 운영 컨트롤 패널 |
| **관리자 접속 비밀번호** | `2026` | 관리자 PIN 인증 코드 |

---

## 🕹️ 핵심 플레이어 시연 플로우 (4단계)

1. **웹 시작 화면 (Landing & Start)**
   - 미스터리 탐정 사무소 테마 메인 화면
   - 닉네임 입력 후 `[도전하기]` 버튼 클릭

2. **도전하기 암호 입력 화면 (Authentication)**
   - 입장 검증용 PIN 화면 노출
   - 암호 `Z7P9NC` 입력 시 즉시 게임 개시

3. **실시간 수수께끼 플레이 (Interactive Mystery)**
   - **총 10단계**까지의 추리 수수께끼 스테이지
   - 힌트는 **30초마다 열람 가능**
   - 스테이지별 **총 2개의 단계별 힌트**와 최종 **정답공개** 기능 지원

4. **클리어 화면 & 후기 게시판 (Clear & Community)**
   - 10단계 모두 클리어 시 전체 탈출 시간 및 이력 확인
   - 도전자 본인의 리뷰/별점 작성
   - 다른 도전자들의 실시간 후기 열람 및 공유

---

## 🛡️ 관리자 대시보드 (`/admin`) 핵심 기능

1. **실시간 진행 현황 트래킹**: 참여 중인 플레이어들의 현재 단계, 경과 시간, 힌트 열람 상태 실시간 관제
2. **결과 및 통계 시각화**: 전체 도전자 수, 클리어 성공률, 스테이지별 소요 시간 통계
3. **진행 지원 & 세션 제어**: 퍼즐에 정체된 사용자 힌트 원격 지원 및 세션 초기화
4. **후기 게시판 관리**: 사용자 후기 모니터링 및 클린 커뮤니티 관리

---

## 📐 아키텍처 & 엔지니어링 철학

- **Ponytail (Lazy Senior Dev Mode)**:
  - 불필요한 번들러나 복잡한 프레임워크 오버헤드 없이 순수 표준 웹 스택(Vanilla HTML5 + Modern CSS + ES6)으로 구축
  - 0초 빌드, Vercel 즉각 배포, 0.1초 미만 번개 로딩 속도 달성
- **DESIGN.md (Google Stitch & Awesome-Design-MD Standards)**:
  - Cyber Detective & Dark Sleek Glassmorphism 테마 적용
  - 명확한 시각적 계층 구조, 8대 디자인 원칙 준수
  - 스크린샷 인터랙티브 라이트박스 및 클립보드 원클릭 복사 & 토스트 피드백 제공
