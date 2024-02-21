import { create } from 'zustand';
import { APP_KEY } from 'src/configs/appConfig';

export const useSettingsStore = create((set) => {
  if (typeof window === 'undefined') return {};
  const initial = JSON.parse(localStorage.getItem(APP_KEY)) ?? {
    settingsBy: 'param',
    value: '',
    paramValue: '',
  };
  return {
    ...initial,
    setData: ({ settingsBy, value, paramValue }) =>
      set((state) => {
        const settingsData = { settingsBy, value, paramValue };
        localStorage.setItem(APP_KEY, JSON.stringify(settingsData));
        return { ...state, ...settingsData };
      }),
  };
});

export const useCheckingStore = create((set) => {
  if (typeof window === 'undefined') return {};
  const LOCAL_APP_KEY = APP_KEY + '_checking';
  return {
    LOCAL_APP_KEY: localStorage.getItem(LOCAL_APP_KEY) || '',
    setCatgoryID: (categoryID) => {
      set((state) => {
        localStorage.setItem(LOCAL_APP_KEY, categoryID);
        return {
          ...state,
          LOCAL_APP_KEY: localStorage.getItem(LOCAL_APP_KEY),
        };
      });
    },
  };
});
