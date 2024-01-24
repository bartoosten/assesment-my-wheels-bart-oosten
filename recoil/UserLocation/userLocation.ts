import { atom } from 'recoil';

export const UserLocation = atom<UserLocationState>({
  key: 'userLocation',
  default: {
    latitude: 52.370216,
    longitude: 4.895168,
  },
});

interface UserLocationState {
  latitude: number;
  longitude: number;
}
