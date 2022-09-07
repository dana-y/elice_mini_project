import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const freeStatus = atom({
  key: 'freeStatus',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const payStatus = atom({
  key: 'payStatus',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const isfreeFiltered = selector({
  key: 'isfreeFiltered',
  get: ({ get }) => {
    const getFreeStatus = get(freeStatus);
    const getPayStatus = get(payStatus);
    let arr = [];
    getFreeStatus && arr.push({ $or: [{ enroll_type: 0, is_free: true }] });
    getPayStatus && arr.push({ $or: [{ enroll_type: 0, is_free: false }] });
    return arr;
  },
  effects_UNSTABLE: [persistAtom],
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
  key: 'searchInputValue',
  default: '',
  effects_UNSTABLE: [persistAtom],
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
