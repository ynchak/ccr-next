'use client';
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
import { LockClosedIcon } from '@radix-ui/react-icons';
import { useCheckingStore } from 'src/store/saveSettings';

export default function FormChecking() {
  const { LOCAL_APP_KEY, setCatgoryID } = useCheckingStore();
  const [inputCategoryValue, setInputCategoryValue] = useState(LOCAL_APP_KEY);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCatgoryID(inputCategoryValue);
  };

  return (
    <Card>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <Select
            isDisabled
            label="Налаштування"
            variant="bordered"
            selectedKeys={new Set(['category'])}
          >
            <SelectItem key="category">ID Категорії</SelectItem>
          </Select>
          <Spacer y={2} />
          <Input
            placeholder={inputCategoryValue || 'Введи ID Категорії'}
            onValueChange={setInputCategoryValue}
          />
          <Spacer y={2} />
          <div className="flex justify-end">
            <Button
              endContent={<LockClosedIcon />}
              color="success"
              type="submit"
            >
              Зберегти
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
