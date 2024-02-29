import { openSourcesWithIDConfig } from './form-configs/openSourcesWithIDConfig';
import { transformConfig } from './form-configs/transformConfig';
import { openInCunstructConfig } from './form-configs/openInCunstructConfig';
import { openSourceAttr } from './form-configs/openSourceAttrConfig';
import { findGoodsInCatgoryConfig } from './form-configs/findGoodsInCatgoryConfig';
import { findMovedGoodsConfig } from './form-configs/findMovedGoodsConfig';
import { getGoodsIdFromUrlConfig } from './form-configs/getGoodsIDFromURLConfig';
import { getLinksFromGoodsIdConfig } from './form-configs/getLinksFromGoodsIdConfig';

const dataForForm = {
  openSourcesWithIDConfig,
  transformConfig,
  openInCunstructConfig,
  openSourceAttr,
  findGoodsInCatgoryConfig,
  findMovedGoodsConfig,
  getGoodsIdFromUrlConfig,
  getLinksFromGoodsIdConfig,
};
export const getFormData = (name) =>
  dataForForm[name] ?? {
    buttonColor: '',
    buttonIcon: '',
    buttonTitle: '',
    placeholder: '',
    radioGroup: '',
  };
