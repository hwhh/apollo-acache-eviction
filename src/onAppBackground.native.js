import { AppState } from 'react-native';

export default () => (persist) => {
  let wasActive = true;

  const listener = (state) => {
    if (state === 'active') {
      wasActive = true;
    } else if (wasActive) {
      wasActive = false;
      persist();
    }
  };

  AppState.addEventListener('change', listener);
  return () => AppState.removeEventListener('change', listener);
};
