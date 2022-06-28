# New York Times Project


## 사용 기술 및 라이브러리
React / TypeScript / Redux-tk / Pesist 

## ✍️ 요약
뉴욕타임즈 기사 api를 받아 여러가지 기능들을 추가한 개인 미니 프로젝트입니다.

## 📝구현 기능 목록

<br/><br/>
[OK🤙] 1. 무한스크롤** with 쓰로틀링
<img src ="https://user-images.githubusercontent.com/94429667/176232409-e4b51a1b-351b-4136-bd73-eed58861aece.gif"/>
<br/><br/>
[OK🤙] 2.- **검색어** with 디바운싱 **로컬스토리지**를 이용한 **최근 검색어 저장**
<img src ="https://user-images.githubusercontent.com/94429667/176232965-ac0f6848-5e8f-463b-a61d-276f0f9ce8fc.gif"/>
<br/><br/>
**`검색어**는 유저의 맨 ‘마지막’ 검색어 만을 캐치해 그 검색어를 가지고 필요한 기능을 작업해야 하기 때문에 **디바운싱**이 맞다고 판단했고,`

**`무한 스크롤**은 일단 데이터를 불러오기 위한 로딩 시간이 흐른 뒤 추가적인 데이터를 불러 오고, 그 후 아무리 동작을 계속해서 실행해도 쓰로틀링을 걸어준 몇초 동안은 그 기능이 제대로 동작하지 않아야 한다고 판단했기 때문에 **쓰로틀링 작업**을 해주었습니다.`
<br/><br/>
<br/><br/>
[OK🤙] 3. 클립된 뉴스 기사를 store에 저장해 **전역으로 상태 관리**

<br/>

