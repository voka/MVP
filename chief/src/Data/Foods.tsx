export interface FoodInfo {
  imgUrl : string, // 이미지 주소
  mapUrl : string, // 네이버 지도(웹) 주소
  time : number, // 아남타워로 부터 걸리는 시간
  // placeName : string, // 가계이름
  // menuName : string, // 메뉴이름
  // menuPrice : string, // 메뉴 가격
  // rating : number // 평점
}
export const FoodInfos :  FoodInfo [] = [
  {imgUrl : 'https://ifh.cc/g/JKyjYF.jpg',
  mapUrl : "https://map.naver.com/v5/search/%EB%B2%84%EA%B1%B0%EC%95%A4%ED%94%84%EB%9D%BC%EC%9D%B4%EC%A6%88%20%EB%8C%80%EC%B9%98%EC%A0%90/place/1081627676?c=14141195.6743572,4509674.7577804,14,0,0,0,dh&isCorrectAnswer=true",
  time : 5
  },
  
  {imgUrl : 'https://ifh.cc/g/730HPN.jpg',
  mapUrl : "https://map.naver.com/v5/search/%EA%B9%80%EB%8F%88%EC%9D%B4%20%EB%B3%B8%EC%A0%90/place/19578744?c=14142134.8435052,4509880.3341120,15,0,0,0,dh&isCorrectAnswer=true",
  time : 5
  },
  
  {imgUrl : 'https://ifh.cc/g/agxCLj.jpg',
  mapUrl : "https://map.naver.com/v5/entry/place/1218032938?c=14141565.2550667,4509732.9923044,15,0,0,0,dh&isCorrectAnswer=true",
  time : 5
  },
  
  {imgUrl : 'https://ifh.cc/g/1J6P8C.jpg',
  mapUrl : "https://map.naver.com/v5/search/%EB%B2%84%EA%B1%B0%EC%95%A4%ED%94%84%EB%9D%BC%EC%9D%B4%EC%A6%88%20%EB%8C%80%EC%B9%98%EC%A0%90/place/1081627676?c=14141195.6743572,4509674.7577804,14,0,0,0,dh&isCorrectAnswer=true",
  time : 5
  },
  
  {imgUrl : 'https://ifh.cc/g/sAk3Mz.jpg',
  mapUrl : "https://map.naver.com/v5/search/%EC%84%A0%EB%A6%89%EC%97%AD%20%EC%88%98%ED%83%80%EC%9A%B0%EB%8F%99%20%EA%B2%90/place/1159445629?c=14142557.2230491,4509014.7517134,15,0,0,0,dh&isCorrectAnswer=true",
  time : 10
  },
];
