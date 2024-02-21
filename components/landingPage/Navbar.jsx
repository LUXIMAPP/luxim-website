import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../public/landingPage/logo.svg';
import AppButton from '../AppButton';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={`py-4 flex ${router.asPath.includes('thank-you') ? 'justify-center' : 'justify-between'} items-center px-4 lg:px-[120px] sticky top-0 bg-white z-50`}>
      <div className="cursor-pointer w-fit">
        <Image src={logo} alt="Luxim app logo" />
      </div>
      {router.asPath.includes('thank-you') ? null
        : (
          <AppButton
            title="Download Luxim"
            theme="brand.primary1"
            color="white"
            fontSize="14px"
            padding="8px 16px"
            onClick={() => window.open('https://download.luximapp.com/thank-you/', '_blank')}
          />
        )}
    </div>

  );
};
export default Navbar;
