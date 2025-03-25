import clsx from 'clsx';
import Image from 'next/image';

const STYLES = {
  btn: 'size-12 flex items-center justify-center bg-whiteLight transition-colors duration-300 hover:bg-white',
};

export const MainSliderBtns = () => {
  return (
    <div className="flex justify-between items-center w-full absolute top-1/2 -translate-y-1/2 z-10">
      <button className={clsx('nextButtonSlider', STYLES.btn)}>
        <Image src={'/icons/arrowLeft.svg'} alt="" width={32} height={32} />
      </button>
      <button className={clsx('nextButtonSlider', STYLES.btn)}>
        <Image src={'/icons/arrowRight.svg'} alt="" width={32} height={32} />
      </button>
    </div>
  );
};
