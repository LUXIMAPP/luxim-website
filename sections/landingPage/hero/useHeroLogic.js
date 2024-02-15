import credit from '../../../public/landingPage/credit.svg';
import location from '../../../public/landingPage/location.svg';
import logistics from '../../../public/landingPage/logistics.svg';

const useHeroLogic = () => {
  const whyLuximList = [
    {
      icon: credit,
      heading: 'Built for You to Sell in Lagos',
      description:
            'Snap, Upload, Sell. Effortlessly create a catalogue and enjoy daily sales on Luxim.',
      bgColor: '#EAFBF1',
      iconBg: '#BFF3D4',
    },
    {
      icon: location,
      heading: 'We have your Logistics Covered',
      description:
            'Forget delivery worries. With our dedicated shipping service in Lagos, we ensure prompt delivery from Lekki to Ikorodu and beyond.',
      bgColor: '#EDEBFA',
      iconBg: '#C8C2F0',
    },
    {
      icon: logistics,
      heading: 'Zero Capital Required',
      description:
            'Listing on Luxim is entirely free. Just take a photo, list an item, and start earning!',
      bgColor: '#F6F8D3',
      iconBg: '#E9EE95',
    },
  ];

  const getRadiusValue = (arr, index) => {
    if (index === 0) {
      return { base: '8px 8px 0 0', lg: '8px 0 8px 0' };
    }
    if (index === arr.length - 1) {
      return { base: '0 0 8px 8px', lg: '0 8px 8px 0' };
    }
    return '0 0 0 0';
  };
  return { getRadiusValue, whyLuximList };
};

export default useHeroLogic;
