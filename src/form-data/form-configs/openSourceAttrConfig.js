import { MAX_LINES } from 'src/configs/appConfig';
import { useSettingsStore } from 'src/store/saveSettings';
import { openInNewTab } from 'src/utils';

const param = {
  address: 'https://gomer.rozetka.company/gomer/sellers/attributes/source/',
  attributes: '?SyncSourceAttributeSearch[attribute_id_title]=',
  param: '',
};
const category = {
  address: 'https://gomer.rozetka.company/gomer/sellers/attributes/source/',
  attributes: '?SyncSourceAttributeSearch[rz_category_id]=',
  param: '&SyncSourceAttributeSearch[attribute_id_title]=',
};
const vendor = {
  address: 'https://gomer.rozetka.company/gomer/sellers/vendors/source/',
  attributes: '?SyncSourceVendorSearch[producer_title]=',
  param: '',
};
const data = {
  param,
  category,
  vendor,
};
class Type {
  constructor(settingsBy, value, paramValue = '') {
    this.value = value;
    this.paramValue = paramValue;
    this.data = data[settingsBy];
    this.source = '';
  }
  getAddres() {
    return this.data.address;
  }
  getAttributes() {
    return (
      this.data.attributes + this.value + this.data.param + this.paramValue
    );
  }
}

const action = (column) => {
  const { settingsBy, value, paramValue } = useSettingsStore.getState();
  console.log(value);
  if (!value) {
    throw `❌ Форма нижче 👇 не налаштована`;
  }
  const lines = column.split('\n').filter((line) => line !== '');
  if (lines.length > MAX_LINES) throw `Введено більше ${MAX_LINES} джерел`;
  const settings = new Type(settingsBy, value, paramValue);
  const links = lines.map((source) => {
    const address = settings.getAddres();
    const attributes = settings.getAttributes();
    return `${address}${source}${attributes}`;
  });
  openInNewTab(links);
};

export const openSourceAttr = {
  buttonColor: 'primary',
  buttonIcon: 'open',
  buttonTitle: 'Відкрити джерела з товарами',
  placeholder: 'Встав з excel стовпчик з source\nТакого виду: 31967',
  radioGroup: null,
  action,
};
