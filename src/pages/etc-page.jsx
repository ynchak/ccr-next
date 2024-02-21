import FormArea from 'src/components/form-area';

export function Etc() {
  return (
    <main className="text-foreground bg-background text-base">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-2">
            <FormArea name="getGoodsIdFromUrlConfig" />
          </div>
          <div className="mt-2">
            <FormArea name="" />
          </div>
        </div>
      </div>
    </main>
  );
}
