import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const freeStatus = atom<boolean>({
  key: 'freeStatus',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const payStatus = atom<boolean>({
  key: 'payStatus',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const isfreeFiltered = selector<object[]>({
  key: 'isfreeFiltered',
  get: ({ get }) => {
    const getFreeStatus = get(freeStatus);
    const getPayStatus = get(payStatus);
    const filteredCondition = [];
    getFreeStatus &&
      filteredCondition.push({ $or: [{ enroll_type: 0, is_free: true }] });
    getPayStatus &&
      filteredCondition.push({ $or: [{ enroll_type: 0, is_free: false }] });
    return filteredCondition;
  },
});

export const total = atom<number>({
  key: 'totalCourse',
  default: 0,
});

export const searchInputValue = atom<string>({
  key: 'searchInputValue',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const nowPage = atom<number>({
  key: 'nowPage',
  default: 1,
});

export const calcOffset = selector<number>({
  key: 'calcOffset',
  get: ({ get }) => {
    const page = get(nowPage);
    return 20 * (page - 1);
  },
});
