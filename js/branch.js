// ham-menu
const ham = document.querySelector(".ham");
const menu = document.querySelector(".menu");

ham.addEventListener('click', () => {
    menu.classList.toggle("flex");
})

window.addEventListener('resize', () => {
    if (window.outerWidth > 1100) {
        menu.classList.remove("flex")
    }
});

// aside
// branch array
class BranchInfo {
    constructor(imgSrc, temperature, branchName, description, address, publicTransport, distance, timeParking) {
        this.imgSrc = imgSrc;
        this.temperature = temperature;
        this.branchName = branchName;
        this.description = description;
        this.address = address;
        this.publicTransport = publicTransport;
        this.distance = distance;
        this.timeParking = timeParking;
    }
}

const yongSan = new BranchInfo('./img/지점이미지용산점.jpeg','22℃ / 45%', '용산점', '지하철 4개 노선과 인접해 접근성이 좋은 지점', '서울 용산구 원효로 210-30 (신계동)', '6호선 효창공원역  3번 출구 도보 7분', '1km', '24시간 방문가능 | 무료주차 가능')
const bullGwang = new BranchInfo('./img/지점이미지불광점.jpeg','20℃ / 50%', '불광역점', '1인 가구 소형 짐보관에 특화된 은평구 유일 셀스프스토리지', '서울 은평구 진흥로 148 참솔빌딩 6F', '6호선 불광역 6번출구 도보 7분', '1km', '24시간 방문가능 | 무료주차 가능')
const guro = new BranchInfo('./img/지점이미지구로역점.jpg','21℃ / 47%', '구로역점', '구로역에서 가장 가까운 셀프스토리지, 구로역 역세권 지점', '서울 구로구 구로중앙로 134 리치몰 B1', '1호선 구로역 1번 출구 도보 3분', '1km', '24시간 방문가능 | 무료주차 가능')
const lotteWorld = new BranchInfo('./img/지점이미지롯데월드점.jpg','27℃ / 42%', '롯데월드점', '롯데월드 타워 바로 옆에 위치한 잠실역 역세권 지점', '서울 송파구 올림픽로 240 (잠실동) 롯데월드 웰빙센터 8층', '2호선 잠실역 4번 출구 도보 5분', '1km', '24시간 방문가능 | 무료주차 가능')
const mokDong2 = new BranchInfo('./img/지점이미지목동2호점.jpg','25℃ / 42%', '목동2호점', '소형 짐보관, 생활용품, 의류보관에 최적화 지점', '서울 양천구 목동동로 411 B1', '9호선 신목동역 2번 출구 도보 17분', '1km', '24시간 방문가능 | 무료주차 가능')
const suYou = new BranchInfo('./img/지점이미지수유역점.jpeg','26℃ / 45%', '수유역점', '2호선 성수역과 가장 가까운 역세권 셀프스토리지', '서울 성동구 아차산로 126 B7', '성수역 3번 출구 도보 2분', '1km', '24시간 방문가능 | 무료주차 가능')
const mullae = new BranchInfo('./img/지점이미지문래점.jpeg','21℃ / 44%', '문래점', '양평역에서 가장 가까운 셀프스토리지, 양평역 역세권 지점', '서울 영등포구 영등포로 21 (양평동2가) B1', '5호선 양평역 2번 출구 도보 4분', '1km', '24시간 방문가능 | 무료주차 가능')
const garden5 = new BranchInfo('./img/지점이미지가든파이브점.jpeg','26℃ / 42%', '가든파이브점', '석촌고분역 인근, 역세권 지점', '서울 송파구 삼학사로 47 B1', '9호선 석촌고분역 4번출구', '1km', '24시간 방문가능 | 무료주차 가능')

const brachInfoList = [yongSan, bullGwang, guro, lotteWorld, mokDong2, suYou, mullae, garden5];

// branch-list
const branchList = document.querySelector('.branch-list');
let branchListTemplate = document.querySelector('.branch-list li');

function makeCopy() {
    let copy = branchListTemplate.cloneNode(true);
    branchList.appendChild(copy);
}

let i = 0;

while(i < brachInfoList.length - 1) {
    makeCopy();
    i++;
}

let branchListName = document.querySelectorAll('.branch-name-btn');
let branchListAddress = document.querySelectorAll('.address');
let branchListDistance = document.querySelectorAll('.distance');
let timeParking = document.querySelectorAll('.time-parking span');

for (let i = 0; i < brachInfoList.length; i++) {
    branchListName[i].textContent = brachInfoList[i].branchName;
    branchListAddress[i].textContent = brachInfoList[i].address;
    branchListDistance[i].textContent = brachInfoList[i].distance;
    timeParking[i].textContent = brachInfoList[i].timeParking;
}

// branch-detail
const branchNameBtn = document.querySelectorAll('.branch-name-btn');
const back = document.querySelector(".img .back");
const branchDetail = document.querySelector(".branch-detail");
let branchDetailWidth = branchDetail.clientWidth;

branchNameBtn.forEach((item) => {item.addEventListener('click', () => {
    branchDetail.style.left = '0px';
})})

back.addEventListener('click', () => {
    branchDetail.style.left = `-${branchDetailWidth}px`;
});

//branch info object & array 
let imgSrc = document.querySelector('.img img');
let temperature = document.querySelector('.temperature span');
let branchName = document.querySelector('.branch-name');
let description = document.querySelector('.description');
let branchDetailAddress = document.querySelector('.branch-detail-address');
let publicTransport = document.querySelector('.public-transport');

for (let i = 0; i < branchNameBtn.length; i++) {
    branchNameBtn[i].addEventListener('click', () => {
        imgSrc.src = brachInfoList[i].imgSrc;
        temperature.textContent = brachInfoList[i].temperature;
        branchName.textContent = brachInfoList[i].branchName;
        description.textContent = brachInfoList[i].description;
        branchDetailAddress.textContent = brachInfoList[i].address;
        publicTransport.textContent = brachInfoList[i].publicTransport;
    })
}

// faq toggle
const faqToggleBtn = document.querySelectorAll(".faq-list i");
const faqToggleMenu = document.querySelectorAll(".faq-list ul");

for (let i = 0; i < faqToggleBtn.length; i++) {
    faqToggleBtn[i].addEventListener('click', (e) => {
        e.preventDefault();
        faqToggleBtn[i].classList.toggle('clicked');
        faqToggleMenu[i].classList.toggle('block');
    })
};

// notice toggle
const noticeToggleBtn = document.querySelectorAll(".notice-list i");
const noticeToggleMenu = document.querySelectorAll(".notice-list ul");

for (let i = 0; i < noticeToggleBtn.length; i++) {
    noticeToggleBtn[i].addEventListener('click', (e) => {
        e.preventDefault();
        noticeToggleBtn[i].classList.toggle('clicked')
        noticeToggleMenu[i].classList.toggle('block');
    })
};

// section map
// Initialize and add the map
function initMap() {
    // The location of Branch
    const yongSanLatLng = { lat: 37.53679536673973, lng: 126.96563215676055, place: '용산점'};
    const bullGwangLatLng = { lat: 37.608460550309545, lng: 126.92635116572526, place: '불광역점' };
    const guroLatLng = { lat: 37.499998600550384, lng: 126.88436023032908, place: '구로역점' };
    const lotteWorldLatLng = { lat: 37.510363873374494, lng: 127.09644483956211, place: '롯데월드점' };
    const mokDong2LatLng = { lat: 37.52945383547117, lng: 126.86452197876793, place: '목동2호점' };
    const suYouLatLng = { lat: 37.63779245959199, lng: 127.02399654664956, place: '수유역점' };
    const mullaeLatLng = { lat: 37.520114548792726, lng: 126.89016052461145, place: '문래점' };
    const garden5LatLng = { lat: 37.47863240005114, lng: 127.11898159910835, place: '가든파이브점' };

    const locations = [
        yongSanLatLng, bullGwangLatLng, guroLatLng, lotteWorldLatLng, mokDong2LatLng, suYouLatLng, mullaeLatLng, garden5LatLng
    ];
    // The map, centered at yongSan
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: yongSanLatLng,
        });

    // The marker
    // marker img
    let markerImg = './img/map-marker.png'
    let markerImgWhite = './img/map-marker(white).png'

    let infowindow = new google.maps.InfoWindow();

    for (let i = 0; i < locations.length; i++) {
        let marker = new google.maps.Marker({
            map: map,
            // label: {text: locations[i].place},
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            icon : markerImg,
        });
        
        // 마커에 마우스 오버시 이벤트
        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
            return function() {
                // html로 표시될 인포 윈도우의 내용
                infowindow.setContent(locations[i].place);
                // 인포윈도우가 표시될 위치
                infowindow.open(map, marker);
            }
        })(marker, i));

        // 마커에 마우스 클릭시 이벤트
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                // html로 표시될 인포 윈도우의 내용
                infowindow.setContent(locations[i].place);
                // 인포윈도우가 표시될 위치
                infowindow.open(map, marker);
                // 지점 정보 슬라이딩
                branchDetail.style.left = '0px';
                // 마커 이미지 변경
                markerImg = markerImgWhite;
                // 지점 정보 내용 변경
                imgSrc.src = brachInfoList[i].imgSrc;
                temperature.textContent = brachInfoList[i].temperature;
                branchName.textContent = brachInfoList[i].branchName;
                description.textContent = brachInfoList[i].description;
                branchDetailAddress.textContent = brachInfoList[i].address;
                publicTransport.textContent = brachInfoList[i].publicTransport;
            }
        })(marker, i));
        
        if (marker) {
            marker.addListener('click', function() {
                //중심 위치를 클릭된 마커의 위치로 변경
                map.setCenter(this.getPosition());
                //마커 클릭 시의 줌 변화
                //map.setZoom(14);
            });
        }
    }
}

window.initMap = initMap;
