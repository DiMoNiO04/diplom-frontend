import { IIcon } from '@/utils/interfaces';

export const CopyIcon = ({ size = 24 }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-orange group-hover:stroke-black transition-all duration-300"
    >
      <path d="M9.08203 14.9157L14.9157 9.08203" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13.4564 16.3746L11.0257 18.8053C10.2521 19.5787 9.20292 20.0131 8.10902 20.013C7.01513 20.0129 5.96606 19.5783 5.19256 18.8048C4.41906 18.0313 3.98447 16.9823 3.98438 15.8884C3.98428 14.7945 4.41869 13.7453 5.19206 12.9717L7.62274 10.541"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.3766 13.4583L18.8073 11.0276C19.5807 10.254 20.0151 9.20487 20.015 8.11098C20.0149 7.01708 19.5803 5.96801 18.8068 5.19451C18.0333 4.42101 16.9842 3.98642 15.8903 3.98633C14.7964 3.98623 13.7473 4.42064 12.9737 5.19401L10.543 7.62469"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
