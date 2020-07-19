export let ADDRESS;

ADDRESS = "http://3.34.190.9";

//지역 점포 검색(전체)
export const URL_GET_REGIONAL_MARKET = (location) =>
  `${ADDRESS}/market?location=${location}`;
//지역 점포 검색(카테고리별로)
export const URL_GET_REGIONAL_CATEGORY_MARKET = (location, category) =>
  `${ADDRESS}/market?category=${category}&location=${location}`;
//상점의 굿즈리스트 검색
export const URL_GET_STORE_ITEMS = (slug) =>
  `${ADDRESS}/market/${slug}/goods-list`;
//굿즈의 상세정보 검색
export const URL_GET_ITEM_DETAIL = (slug) => `${ADDRESS}/goods/${slug}`;
//마켓의 리뷰정보 검색
export const URL_GET_STORE_REVIEWS = (slug) =>
  `${ADDRESS}/reviews/by-market/${slug}`;
//리뷰 작성
export const URL_POST_REVIEW = `${ADDRESS}/reviews`;
// 유저의 구매내역 가져오기
export const URL_GET_ORDER_LIST = (slug) => `${ADDRESS}/users/${slug}/orders`;
