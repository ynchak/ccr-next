///https://rozetka.com.ua/361195185/p361195185/

import { addToClipboard } from 'src/utils';

///https://rozetka.com.ua/ua/361195185/p361195185/
const action = (column) => {
  const lines = column.split('\n').filter((line) => line !== '');
  addToClipboard(
    lines
      .map((line) => {
        const regex = /p(\d+)\//;
        return regex.exec(line)[1];
      })
      .join('\n')
  );
};

export const getGoodsIdFromUrlConfig = {
  buttonColor: 'secondary',
  buttonTitle: 'Отримати id товарів',
  buttonIcon: 'transform',
  placeholder: 'Сюди треба ввести посилання і отримаєш id товарів',
  radioGroup: null,
  action,
};
