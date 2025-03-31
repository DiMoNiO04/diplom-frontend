import Image from 'next/image';

interface ICategoryHeaderImageProps {
  img: string;
}

export const CategoryHeaderImage = ({ img }: ICategoryHeaderImageProps) => {
  return (
    <section className="w-full h-72 relative">
      <Image src={img} alt="" layout="fill" objectFit="cover" />
    </section>
  );
};
