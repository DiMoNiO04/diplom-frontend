interface IRecipeInfoBlockProps {
  title: string;
  value: string | number;
}

const STYLES = {
  BLOCK: `
    flex flex-col gap-y-2 border-r border-gray-300 pr-3 max-md:pr-0 
    max-md:border-none max-md:flex-row max-md:items-center max-md:justify-between max-md:w-full
  `,
  BLOCK_TITLE: 'font-unbounded text-xl max-md:text-lg',
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
