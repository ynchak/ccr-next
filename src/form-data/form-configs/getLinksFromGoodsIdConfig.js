import { addToClipboard } from 'src/utils';

const action = (column, _, setCountLines) => {
  const links = column
    .split('\n')
    .filter((line) => line !== '')
    .map((id) => `https://rozetka.com.ua/ua/${id}/p${id}/`);
  setCountLines(links.length);
  addToClipboard(links.join('\n'));
};
export const getLinksFromGoodsIdConfig = {
  buttonColor: 'secondary',
  buttonTitle: 'Отримати посилання',
  buttonIcon: 'link',
  placeholder: 'Сюди треба ввести id товарів отримаєш посилання на товари',
  radioGroup: null,
  action,
};
