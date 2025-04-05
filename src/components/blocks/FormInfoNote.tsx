import { TextDef } from '../ui';

export const FormInfoNote = () => {
  return (
    <div className="flex flex-col gap-y-1 mb-4">
      <p className="italic text-orange">* Все поля обязательны для заполнения</p>
      <TextDef title='Для разделения на пункты использовать <span className="text-orange">;</span>' />
    </div>
  );
};
