import { notFound } from 'next/navigation';

const splitBySemicolon = (text: string) => text.split(';').map((item) => item.trim());

async function fetchByKey<T>(dataArray: T[], key: keyof T, value: string): Promise<T> {
  const item = dataArray.find((entry) => String(entry[key]) === value);
  if (!item) notFound();
  return item;
}

export { fetchByKey, splitBySemicolon };
