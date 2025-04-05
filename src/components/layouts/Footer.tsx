import { FooterCopyright, FooterHeader, FooterMenu } from '../blocks/footer';

export const Footer = () => {
  return (
    <footer className="shadow-customSlide bg-whiteDark pt-8 pb-4">
      <div className="custom-container">
        <div className="flex items-start justify-between pb-6">
          <FooterHeader />
          <FooterMenu />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};
