import { atom, selector } from 'recoil';

export const counterAtom = atom({
  key: 'countState',
  default: 0,
});


export const evenSelectorAtom = selector({
  key: "evenValues",
  get: ({ get }) => {
    const even = get(counterAtom);

    return even % 2 == 0; // bool
  }

})