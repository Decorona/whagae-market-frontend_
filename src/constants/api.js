export let ADDRESS;

ADDRESS = "https://hwagae-sniim.endpoint.ainize.ai";

//지역 점포 검색
export const URL_GET_REGIONAL_MARKET = (slug) =>
  `${ADDRESS}/market/region?location=${slug}`;
//상점의 굿즈리스트 검색
export const URL_GET_STORE_ITEMS = (slug) =>
  `${ADDRESS}/market/${slug}/goods-list`;
//굿즈의 상세정보 검색
export const URL_GET_ITEM_DETAIL = (slug) => `${ADDRESS}/goods/${slug}`;
//마켓의 리뷰정보 검색
export const URL_GET_STORE_REVIEWS = (slug) =>
  `${ADDRESS}/reviews/by-market/${slug}`;
