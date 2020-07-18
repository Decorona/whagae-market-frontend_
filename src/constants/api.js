export let ADDRESS;

ADDRESS = "https://hwagae-sniim.endpoint.ainize.ai";

//지역 점포 검색
export const URL_GET_REGIONAL_MARKET = (slug) =>
  `${ADDRESS}/market/region?location=${slug}`;
