import { chunk } from 'lodash';
import { MAX_GOODS_IN_SOURCE, MAX_LINES } from 'src/configs/appConfig';

const url = 'https://gomer.rozetka.company/gomer/items/source/';
const attr = '?ItemSearch[id]=';

const createLink = (source, parts) =>
  parts.map((part) => `${url}${source}${attr}${part.join(',')}`);

const action = (data) => {
  const lines = data.split('\n').filter((line) => line !== '');
  if (lines.length > MAX_LINES) {
    throw `Введено більше ${MAX_LINES} джерел`;
  }
  const links = lines.reduce((acc, line) => {
    const [source, ids] = line.split('\t');
    return [
      ...acc,
      ...createLink(source, chunk(ids.split(', '), MAX_GOODS_IN_SOURCE)),
    ];
  }, []);

  console.log(links);
};

export const openSourcesWithIDConfig = {
  buttonColor: 'primary',
  buttonTitle: 'Відкрити джерела з товарами',
  buttonIcon: 'open',
  placeholder:
    'Сюди треба ввести джерела з їх товарами. Скопіюй з excel і встав сюди',
  radioGroup: null,
  action,
};
