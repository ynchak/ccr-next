import PropTypes from 'prop-types';
import { RadioGroup, Radio } from '@nextui-org/react';

export default function Options({ defaultValue, values, setSelectRadio }) {
  return (
    <RadioGroup
      label=""
      defaultValue={defaultValue}
      orientation="horizontal"
      onValueChange={(e) => setSelectRadio(e)}
    >
      {values.map(({ type, value }) => (
        <Radio key={type} value={type}>
          {value}
        </Radio>
      ))}
    </RadioGroup>
  );
}
Options.propTypes = {
  defaultValue: PropTypes.string,
  values: PropTypes.array,
  setSelectRadio: PropTypes.func,
};
