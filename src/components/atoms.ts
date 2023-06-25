import { atom } from 'recoil';

export const selected=atom<string>({
    key:'selected',
    default:'',
  })

