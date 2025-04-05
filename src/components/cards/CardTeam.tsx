import { ITeamAuthor } from '@/utils/interfaces';

export const CardTeam = ({ name, description, img }: ITeamAuthor) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 rounded-full overflow-hidden">
        <img src={img} alt={name} width={163} height={163} />
      </div>
      <h3 className="mb-1 text-black text-center font-unbounded">{name}</h3>
      <p className="text-center text-greyLight italic text-sm">{description}</p>
    </div>
  );
};
