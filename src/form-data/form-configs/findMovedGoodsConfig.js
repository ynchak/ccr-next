import { chunk } from 'lodash';
import { MAX_GOODS_IN_CONSTRUCT } from 'src/configs/appConfig';
import { useCheckingStore } from 'src/store/saveSettings';

const type = {
  id: {
    addres:
      'https://gomer.rozetka.company/gomer/smart-folders/next-page?searchParams[id%3D1][field]=goods_id&searchParams[id%3D1][condition]=%3D&searchParams[id%3D1][value]=',
    params:
      '&searchParams[id%3D2][field]=category&searchParams[id%3D2][condition]=%21%3D&searchParams[id%3D2][value]=',
    attr: '&pageCondition=all&page=0&pageSize=50&size=500',
    maxLines: 500,
  },
};

const action = (column) => {
  const { LOCAL_APP_KEY } = useCheckingStore.getState();
  if (!LOCAL_APP_KEY) {
    throw `❌ Форма нижче 👇 не налаштована`;
  }
  const lines = column.split('\n').filter((line) => line !== '');
  const { addres, params, attr } = type.id;
  const links = chunk(lines, MAX_GOODS_IN_CONSTRUCT).map(
    (part) => `${addres}${part.join(' ')}${params}${LOCAL_APP_KEY}${attr}`
  );
  console.log(links);
};

export const findMovedGoodsConfig = {
  buttonColor: 'primary',
  buttonIcon: 'open',
  buttonTitle: 'До конструктора умов',
  placeholder:
    'Знайти перенесені товари з категорії\nВстав стовпчик з id товарів',
  radioGroup: null,
  action,
};
