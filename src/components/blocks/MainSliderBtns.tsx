import clsx from 'clsx';

const STYLES = {
  btn: `
    size-12 flex items-center justify-center bg-whiteLight transition-colors duration-300 hover:bg-white
    max-lg:size-8 max-lg:p-1
  `,
};

export const MainSliderBtns = () => {
  return (
    <div
      className={`
      flex justify-between items-center w-full absolute top-1/2 -translate-y-1/2 z-10 opacity-0
      transition-opacity duration-300 group-hover:opacity-100
      max-md:opacity-100
    `}
    >
      <button className={clsx('nextButtonSlider', STYLES.btn)}>
        <img src={'/icons/arrowLeft.svg'} alt="" width={32} height={32} />
      </button>
      <button className={clsx('nextButtonSlider', STYLES.btn)}>
        <img src={'/icons/arrowRight.svg'} alt="" width={32} height={32} />
      </button>
    </div>
  );
};
