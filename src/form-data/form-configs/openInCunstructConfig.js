import { chunk } from 'lodash';
import { MAX_GOODS_IN_CONSTRUCT } from 'src/configs/appConfig';
const addres = `https://gomer.rozetka.company/gomer/smart-folders/next-page?searchParams[0][field]=goods_id&searchParams[0][condition]=%3D&searchParams[0][value]=`;

const params = {
  all: '&pageCondition=all&page=0&pageSize=50&size=500',
  active: `&searchParams[1][field]=upload_status&searchParams[1][condition]=equal-value&searchParams[1][value]=2&pageCondition=all&page=0&pageSize=50&size=500`,
};

const action = (column, type) => {
  const lines = column.split('\n').filter((line) => line !== '');
  const links = chunk(lines, MAX_GOODS_IN_CONSTRUCT).map(
    (part) => `${addres}${part.join('+')}${params[type]}`
  );

  console.log(links);
};

export const openInCunstructConfig = {
  buttonColor: 'primary',
  buttonIcon: 'open',
  buttonTitle: 'До конструктора умов',
  placeholder:
    'Знайти товари в конструкторі умов\nВстав з excel стовпчик з Id товарів ',
  radioGroup: {
    defaultValue: 'all',
    values: [
      { type: 'all', value: 'Всі' },
      { type: 'active', value: 'Активні' },
    ],
  },
  action,
};
