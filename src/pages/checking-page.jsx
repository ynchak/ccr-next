import { Divider, Spacer } from '@nextui-org/react';
import FormArea from 'src/components/form-area';
import FormChecking from 'src/components/form-checking';

export function Checking() {
  return (
    <main className="text-foreground bg-background text-base">
      <div className="container mx-auto">
        <Spacer y={4} />
        <h2 className="text-xl font-medium text-center">Перевірка</h2>
        <Spacer y={4} />
        <Divider />
        <Spacer y={4} />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <FormArea name="findMovedGoodsConfig" />
            <Spacer y={4} />
            <FormArea name="" />
          </div>
          <div>
            <FormArea name="findGoodsInCatgoryConfig" />
            <Spacer y={4} />
            <FormChecking />
          </div>
        </div>
      </div>
    </main>
  );
}
