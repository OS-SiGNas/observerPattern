export const $ = <E extends Element>(query: string): E => {
  const element = document.querySelector<E>(query);

  if (element === null) {
    class $QuerySelectorError extends Error {}
    throw new $QuerySelectorError(`Element ${query} is null`);
  }

  return element;
};
