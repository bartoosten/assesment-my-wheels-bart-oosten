import { atom } from 'recoil';

export enum DisplayModeTypes {
  ModeList = 0,
  ModeMap = 1,
}

export const DisplayMode = atom({
  key: 'displayMode',
  default: DisplayModeTypes.ModeList,
});
