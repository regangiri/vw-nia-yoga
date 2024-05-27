import Image from 'next/image';
import useNavbar from './hooks';

const Navbar = () => {
  const { navbar } = useNavbar();
  if (navbar) {
    return (
      <div className="bg-primary bg-opacity-70 backdrop-filter backdrop-blur-sm sticky top-0 md:h-12 z-50 h-16 flex items-center justify-center">
        <div className="md:flex md:space-x-10 md:justify-center justify-center py-3">
          <div className="relative w-48 md:w-64 h-28 pt-4 md:pt-3.5">
            <Image
              src="/images/logoputih.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Navbar;
