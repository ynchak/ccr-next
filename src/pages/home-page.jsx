import { Divider, Spacer } from '@nextui-org/react';
import FormArea from 'src/components/form-area';
import FormSettings from 'src/components/form-settings';

export function Home() {
  return (
    <main className="text-foreground bg-background text-base">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-4">
            <h2 className="text-xl font-medium text-center">
              Перенесення товарів
            </h2>
            <Spacer y={4} />
            <Divider />
            <Spacer y={4} />
            <FormArea name="openSourcesWithIDConfig" />
            <Spacer y={4} />
            <FormArea name="transformConfig" />
            <Spacer y={4} />
            <FormArea name="openInCunstructConfig" />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-medium text-center">
              Оновлення товарів
            </h2>
            <Spacer y={4} />
            <Divider />
            <Spacer y={4} />
            <FormArea name="openSourceAttr" />
            <Spacer y={4} />
            <FormSettings />
          </div>
        </div>
      </div>
    </main>
  );
}
