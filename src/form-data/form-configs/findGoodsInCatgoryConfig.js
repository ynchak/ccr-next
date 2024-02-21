import { useCheckingStore } from 'src/store/saveSettings';
import { MAX_GOODS_IN_CONSTRUCT } from 'src/configs/appConfig';
import { chunk } from 'lodash';
const id = {
  addres:
    'https://gomer.rozetka.company/gomer/smart-folders/next-page?searchParams%5Bid%3D1%5D%5Bfield%5D=goods_id&searchParams%5Bid%3D1%5D%5Bcondition%5D=%3D&searchParams%5Bid%3D1%5D%5Bvalue%5D=',
  params:
    '&searchParams%5Bid%3D2%5D%5Bfield%5D=category&searchParams%5Bid%3D2%5D%5Bcondition%5D=%3D&searchParams%5Bid%3D2%5D%5Bvalue%5D=',
  attr: '&pageCondition=all&page=0&pageSize=50&size=500',
};

const source = {
  addres:
    'https://gomer.rozetka.company/gomer/smart-folders/next-page?searchParams%5Bid%3D1%5D%5Bfield%5D=sync_source_id&searchParams%5Bid%3D1%5D%5Bcondition%5D=%3D&searchParams%5Bid%3D1%5D%5Bvalue%5D=',
  params:
    '&searchParams%5Bid%3D2%5D%5Bfield%5D=category&searchParams%5Bid%3D2%5D%5Bcondition%5D=%3D&searchParams%5Bid%3D2%5D%5Bvalue%5D=',
  attr: '&pageCondition=all&page=0&pageSize=50&size=500',
};

const fields = { id, source };
const action = (column, field) => {
  const { LOCAL_APP_KEY } = useCheckingStore.getState();
  if (!LOCAL_APP_KEY) {
    throw `❌ Форма нижче 👇 не налаштована`;
  }
  const lines = column.split('\n').filter((line) => line !== '');
  const { addres, params, attr } = fields[field];
  const links = chunk(lines, MAX_GOODS_IN_CONSTRUCT).map(
    (part) => `${addres}${part.join(' ')}${params}${LOCAL_APP_KEY}${attr}`
  );
  console.log(links);
};
export const findGoodsInCatgoryConfig = {
  buttonColor: 'primary',
  buttonIcon: 'open',
  buttonTitle: 'До конструктора умов',
  placeholder:
    'Знайти товари в категорії\nВстав стовпчик з джерелами або з id товарів',
  radioGroup: {
    defaultValue: 'id',
    values: [
      { type: 'source', value: 'Джерела' },
      { type: 'id', value: 'Товари' },
    ],
  },
  action,
};
