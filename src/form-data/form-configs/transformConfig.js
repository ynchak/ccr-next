const action = (columns) => {
  const store = columns
    .split('\n')
    .filter((line) => line !== '')
    .reduce((acc, line) => {
      const [id, source] = line.split('\t');
      acc.set(source, [...(acc.get(source) ?? []), id]);
      return acc;
    }, new Map());

  const lines = [...store].map(
    ([source, ids]) => `${source}\t${ids.join(', ')}`
  );
  console.log(lines);
};

export const transformConfig = {
  buttonColor: 'secondary',
  buttonTitle: 'Трансформувати',
  buttonIcon: 'transform',
  placeholder:
    'Сюди треба ввести два стовпчики ID і source. Скопіюй з excel і встав сюди',
  radioGroup: null,
  action,
};
