import { LookBackItemDataProps } from ".";

const SORT_ITEM_NAME = {
  ALL: "All",
  MONTH: "Graphic",
  LIFE: "Web",
  EVENT: "Event",
};

const lookBackSortItems = [
  {
    name: SORT_ITEM_NAME.ALL,
  },
  {
    name: SORT_ITEM_NAME.MONTH,
  },
  {
    name: SORT_ITEM_NAME.LIFE,
  },
  {
    name: SORT_ITEM_NAME.EVENT,
  },
];

const lookBackItems: LookBackItemDataProps[] = [
  {
    title: "NO WAVE COFFEE POPUP ITEM",
    month: "Graphic + DTP Design",
    slug: "kyoto-life",
    url: "/images/nwc.png",
    alt: "IN KYOTO LIFEのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "SHION SUGAHARA NAME CARD",
    month: "Graphic + DTP Design",
    slug: "design-engineer",
    url: "/images/shion.png",
    alt: "BECOME DESIGN ENGINEERのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "ACID COFFEE TOKYO POST CARD",
    month: "Graphic + DTP Design",
    slug: "new-life",
    url: "/images/acid.png",
    alt: "NEW LIFE IN TOKYOのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "SMILERS LP",
    month: "UX Design + Development",
    slug: "midori",
    url: "/images/smilers.png",
    alt: "MIDORI WO WATARU OTOのサムネイル画像",
    isLife: false,
    isEvent: true,
  },
  {
    title: "BFW ENGLISH HP",
    month: "Graphic Design / Web Design",
    slug: "acid-coffee-tokyo",
    url: "/images/bfwe.png",
    alt: "ACID COFFEE TOKYOのサムネイル画像",
    isLife: false,
    isEvent: true,
  },
  {
    title: "ASHILAB HP",
    month: "UX Design / Web Development",
    slug: "first-visiting",
    url: "/images/ashilab.png",
    alt: "FIRST VISITING TO KYUSHUのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "MAHITO HAZAMA (CAFE WATOTO) EC",
    month: "Web Design",
    slug: "historical-science",
    url: "/images/watoto.png",
    alt: "HISTORICAL SCIENCEのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "FIDIA INC. HP",
    month: "Web Design + Development",
    slug: "look-back-summary",
    url: "/images/fidia.png",
    alt: "LOOK BACK SUMMARYのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
];

export { lookBackSortItems, lookBackItems, SORT_ITEM_NAME };
