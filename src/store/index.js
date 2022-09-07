import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const freeStatus = atom({
  key: 'freeStatus',
  default: [{}, {}],
  // effects_UNSTABLE: [persistAtom],
});

export const cardData = atom({
  key: 'cardData',
  default: [],
});

export const total = atom({
  key: 'totalCourse',
  default: 0,
});

export const searchInputValue = atom({
  key: 'searchInput',
  default: '',
});

export const nowPage = atom({
  key: 'nowPage',
  default: 1,
});

export const calcOffset = selector({
  key: 'calcOffset',
  get: ({ get }) => {
    const page = get(nowPage);
    return 20 * (page - 1);
  },
});
