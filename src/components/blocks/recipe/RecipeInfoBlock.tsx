interface IRecipeInfoBlockProps {
  title: string;
  value: string | number;
}

const STYLES = {
  BLOCK: 'flex flex-col gap-y-2 border-r border-gray-300 pr-3',
  BLOCK_TITLE: 'font-unbounded text-xl',
  BLOCK_TXT: 'font-unbounded italic text-greyLight',
};

export const RecipeInfoBlock = ({ title, value }: IRecipeInfoBlockProps) => {
  return (
    <div className={STYLES.BLOCK}>
      <div className={STYLES.BLOCK_TITLE}>{title}</div>
      <div className={STYLES.BLOCK_TXT}>{value}</div>
    </div>
  );
};
