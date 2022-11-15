import { atom, useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil';
import { ListItemData, listTwo } from './_data';

export { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState };

export const listAtom = atom<ListItemData[]>({
  key: 'listAtom',
  default: listTwo,
});

export const selectedListItemsAtom = atom<Set<number>>({
  key: 'selectedListItemsAtom',
  default: new Set(),
});
