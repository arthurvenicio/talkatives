export const cleanObj = (obj: any, fields: string[]) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([field]) => !fields.includes(field))
  );
};
