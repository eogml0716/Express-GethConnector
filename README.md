<div align="center">
   <img src="https://github.com/eogml0716/Express-GethConnector/assets/78692286/5dfbb949-bcf7-41c1-bbcd-8c4615ca626e" width="400" align="center"> 

</div>

# unipicture Dapp - 학교 사진을 NFT로 소유, 공유, 거래하기
unipicture는 사용자들이 학교의 사람들과 풍경 사진을 대체불가능한 토큰(NFT)으로 소유, 공유, 거래할 수 있도록 하는 탈중앙화 애플리케이션(Dapp)입니다. 이 Dapp은 프론트엔드에 Flutter를, 백엔드에 Node.js를 사용하며, 충남대학교 실험실에서 구축한 프라이빗 블록체인 네트워크와 IPFS를 통해 이미지를 안전하게, 탈중앙화된 방식으로 저장합니다.

## Demo Video (Youtube)
https://www.youtube.com/watch?v=fmjVwNiW-I4

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/fmjVwNiW-I4/0.jpg)](https://www.youtube.com/watch?v=fmjVwNiW-I4)

## Team Members

<div>
  
|[조해창](https://github.com/Funbucket)|[류대희](https://github.com/eogml0716)|[이철희](https://github.com/CheolheeLee0)
|:---:|:---:|:---:|
|<img src="https://github.com/Funbucket.png" width="120">|<img src="https://github.com/eogml0716.png" width="120">|<img src="https://github.com/CheolheeLee0.png" width="120">|
|팀장|팀원|팀원|

</div>

## Architecture
![image](https://github.com/eogml0716/Express-GethConnector/assets/78692286/55211bdc-6d8d-4a11-b3f7-83e5a9a9b6ac)

## Features
1. 회원가입 및 로그인
사용자는 계정을 생성하여 unipicture Dapp의 기능에 접근할 수 있습니다.
회원가입 과정에서는 필요한 정보를 제공하고 고유한 자격증명을 생성할 수 있습니다.
성공적인 등록 후에는 사용자가 안전하게 계정에 로그인할 수 있습니다.
2. NFT 사진 등록 기능
등록된 사용자는 학교 사진을 프라이빗 블록체인 네트워크에 NFT로 업로드하고 등록할 수 있습니다.
각 업로드된 사진은 고유한 토큰 식별자와 연결되어, 소유권과 진위를 보장합니다.
사용자는 추가 메타데이터와 설명을 제공하여 사진에 대한 정보를 제공할 수 있습니다.
3. NFT 사진 조회 기능
사용자는 학교 커뮤니티 내에서 다른 사용자들에 의해 NFT로 등록된 사진을 탐색하고 발견할 수 있습니다.
조회 기능을 통해 사용자는 키워드, 카테고리 또는 아티스트를 기반으로 특정 사진을 검색할 수 있습니다.
사용자는 각 NFT 사진과 관련된 세부 사항, 메타데이터, 설명을 볼 수 있습니다.
4. NFT 사진 거래 내역 조회 기능
사용자는 특정 NFT 사진의 거래 내역을 확인할 수 있습니다.
이 기능은 각 NFT 사진의 소유권과 거래 활동에 대한 투명성과 가시성을 제공합니다.
사용자는 특정 사진과 관련된 과거 거래를 추적할 수 있습니다.
5. NFT 사진 구매 기능
사용자는 플랫폼에서 다른 사용자들의 NFT 사진을 구매할 수 있습니다.
구매 기능은 프라이빗 블록체인 네트워크를 사용하여 안전하고 검증 가능한 거래를 가능하게 합니다.
사용자는 Dapp 내에서 구매를 진행하기 위해 자신의 코인이나 토큰을 사용할 수 있습니다.
6. 내 코인 보유량 조회 기능
사용자는 unipicture Dapp 내에서 보유하고 있는 코인 또는 토큰의 잔액을 확인할 수 있습니다.
이 기능은 사용자의 디지털 화폐 자산에 대한 개요를 제공합니다.
7. 구매한 NFT 사진 조회 기능
사용자는 구매한 NFT 사진을 쉽게 보고 관리할 수 있습니다.
이 기능을 통해 사용자는 자신의 컬렉션을 추적하고 소유하고 있는 사진에 접근할 수 있습니다.

## Technology Stack
unipicture Dapp은 다음 기술을 사용하여 구축되었습니다:

- 프론트엔드: 여러 플랫폼에서 매끄럽고 반응성 있는 사용자 인터페이스를 제공하는 인기 있는 크로스 플랫폼 프레임워크인 Flutter를 사용하여 Dapp의 프론트엔드를 개발하였습니다.

- 백엔드: Dapp의 백엔드는 강력한 JavaScript 런타임 환경인 Node.js를 사용하여 구축하였습니다. Node.js는 서버 측 로직을 처리하고 프라이빗 블록체인 네트워크와 상호작용합니다.

- 블록체인: Dapp은 충남대학교 실험실에서 구축한 프라이빗 블록체인 네트워크를 활용합니다. 블록체인 네트워크는 NFT 사진의 안전하고 투명한 소유권 및 거래를 보장합니다.

- 이미지 저장: Dapp은 IPFS(InterPlanetary File System)를 사용하여 NFT 사진과 연결된 이미지를 안전하게 저장합니다. IPFS는 탈중앙화된 저장을 가능하게 하여 이미지의 가용성과 신뢰성을 보장합니다.



## Setup and Deployment
unipicture Dapp을 설정하고 배포하려면 다음 단계를 따르십시오

1. 프론트엔드 개발 환경에 대한 Flutter를 설치하고 필요한 종속성을 설정합니다.

2. 백엔드 개발 환경에 대한 Node.js를 설정하고 필요한 라이브러리와 패키지를 설치합니다.

3. 충남대학교 실험실에서 제공하는 인프라를 사용하여 프라이빗 블록체인 네트워크를 배포합니다.

4. 프론트엔드와 백엔드를 통합하여 두 컴포넌트 간에 올바른 통신이 이루어지도록 합니다.

5. NFT 사진 등록, 조회, 거래 내역 조회, 구매, 코인 보유량 조회, 구매한 NFT 사진 조회 기능을 구현합니다.

6. NFT 사진과 관련된 이미지를 저장하고 검색하기 위해 Dapp을 IPFS에 연결합니다.

7. Dapp의 기능, 보안, 사용성을 보장하기 위해 철저히 테스트합니다.

8. Dapp을 Flutter와 호환되는 웹 서버나 플랫폼에 배포하여 사용자가 접근할 수 있게 합니다.

## Future Enhancements
unipicture Dapp은 다음과 같은 기능을 통해 더욱 개선될 수 있습니다

- 더 넓은 대중에게 NFT 사진을 공유하기 위한 소셜 미디어 통합.
- 사진 컬렉션 또는 앨범을 생성하고 참여할 수 있는 기능.
- NFT 사진의 품질과 매력에 대한 피드백을 제공하는 등급 및 리뷰 시스템.
- Dapp 내에서 사용되는 코인 또는 토큰을 거래하기 위한 외부 암호화폐 거래소와의 통합.
- 보다 정확한 사진 발견을 위한 개선된 검색 및 필터링 옵션.
- 사용자들이 사진 프로젝트나 과제에 함께 작업할 수 있는 협업 기능.
- 학교와 그 주변에 대한 추가 데이터와 정보를 제공하기 위한 외부 API 통합.
