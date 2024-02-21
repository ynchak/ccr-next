import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { useTheme } from 'src/components/theme-provider';
import { Button } from '@nextui-org/react';

export function ThemeTogle() {
  const { setTheme } = useTheme();

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="flat" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu align="end" disallowEmptySelection aria-label="theme-togle">
        <DropdownItem onClick={() => setTheme('light')}>Світла</DropdownItem>
        <DropdownItem onClick={() => setTheme('dark')}>Темна</DropdownItem>
        <DropdownItem onClick={() => setTheme('system')}>Системна</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
