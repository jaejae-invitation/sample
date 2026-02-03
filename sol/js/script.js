function toggleAccount() {
  const box = document.getElementById('account-box');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

function shareKakao() {
  Kakao.Share.sendDefault({
  objectType: 'feed',
  text: '정현 ♥ 다솔 결혼식에 초대합니다 💍',
  link: {
    mobileWebUrl: 'https://jaejae-invitation.netlify.app/',
    webUrl: 'https://jaejae-invitation.netlify.app/'
  }
});
}

function openModal(src) {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  modalImg.src = src;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('image-modal');
  modal.style.display = 'none';
}

//const container = document.getElementById('map');


const weddingAddress = '울산 북구 진장동 125-17 JW컨벤션센터';
Kakao.init('abcd1234abcd1234abcd1234abcd1234');
// const map = new naver.maps.Map('map', {
//   center: new naver.maps.LatLng(37.5665, 126.9780), // 임시 중심
//   zoom: 16
// });

// // 주소 → 좌표 변환
// naver.maps.Service.geocode(
//   { query: weddingAddress },
//   function (status, response) {
//     if (status !== naver.maps.Service.Status.OK) {
//       alert('주소를 찾을 수 없습니다.');
//       return;
//     }

//     const result = response.v2.addresses[0];
//     const lat = parseFloat(result.y);
//     const lng = parseFloat(result.x);

//     const location = new naver.maps.LatLng(lat, lng);

//     // 지도 중심 이동
//     map.setCenter(location);
    
//     // 마커
//     new naver.maps.Marker({
//       position: location,
//       map: map,
//     });
//   }
// );

// 우클릭 메뉴 차단
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
}, true);

// 드래그 시작 차단
document.addEventListener('dragstart', function (e) {
  e.preventDefault();
}, true);

// 마우스 버튼 자체 차단 (우클릭 포함)
document.addEventListener('mousedown', function (e) {
  if (e.button === 2) {
    e.preventDefault();
  }
}, true);