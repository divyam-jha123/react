import { atom } from 'recoil';

const count = atom({
  key: 'countState',
  default: 0,
});

export default count;