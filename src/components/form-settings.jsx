import { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Spacer,
} from '@nextui-org/react';
import { ResetIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { useSettingsStore } from 'src/store/saveSettings';

const settingsData = {
  category: 'ID Категорії',
  param: 'ID параметру',
  vendor: 'Виробника',
};

export default function FormSettings() {
  const { settingsBy, value, paramValue, setData } = useSettingsStore();

  const [selectValue, setSelectValue] = useState(new Set([settingsBy]));
  const [settingsInputValue, setSettingsInputValue] = useState(value);
  const [settingsInputParamValue, setSettingsInputParamValue] =
    useState(paramValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectValue.has('category')) {
      setSettingsInputParamValue('');
    }
    setData({
      settingsBy: `${[...selectValue.keys()]}`,
      value: settingsInputValue,
      paramValue: settingsInputParamValue,
    });
  };
  const handleReset = (e) => {
    e.preventDefault();
    setSettingsInputValue('');
    setSettingsInputParamValue('');
  };
  return (
    <Card>
      <CardBody>
        <form
          onSubmit={handleSubmit}
          onReset={handleReset}
          suppressHydrationWarning
        >
          <Select
            isRequired
            label="Налаштування"
            variant="bordered"
            selectedKeys={selectValue}
            onSelectionChange={setSelectValue}
          >
            {Object.entries(settingsData).map(([name, lable]) => (
              <SelectItem key={name} value={name}>
                {lable}
              </SelectItem>
            ))}
          </Select>
          <Spacer y={2} />
          <>
            <div className="flex gap-2">
              <Input
                placeholder={
                  settingsInputValue ||
                  `Введи ${settingsData[[...selectValue.values()]]}`
                }
                onValueChange={setSettingsInputValue}
              />
              {selectValue.has('category') && (
                <Input
                  placeholder={paramValue || `Введи ID параметру`}
                  onValueChange={setSettingsInputParamValue}
                />
              )}
            </div>
            <div className="flex justify-between mt-2">
              <Button
                endContent={<ResetIcon />}
                color="primary"
                type="reset"
                variant="faded"
              >
                Очистити значення
              </Button>
              <Button
                endContent={<LockClosedIcon />}
                color="success"
                type="submit"
              >
                Зберегти
              </Button>
            </div>
          </>
        </form>
      </CardBody>
    </Card>
  );
}
