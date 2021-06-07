import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { Box, Text, Link, useBreakpointValue } from '@chakra-ui/react';
import BgOne from '@/assets/images/research/card1.png';
import BgTwo from '@/assets/images/research/card2.png';
import BgThree from '@/assets/images/research/card3.png';
import BgFour from '@/assets/images/research/card4.png';

export const Card = observer(
  ({
    title,
    desc,
    readMoreHref,
    langArr = [],
    showOneDescOnSmallScrren = false,
    h = 'auto'
  }: {
    title: string;
    desc: string[];
    readMoreHref: string;
    langArr?: Array<{ name: string; href: string }>;
    showOneDescOnSmallScrren?: boolean;
    h?: string;
  }) => {
    const { lang } = useStore();
    const isSmallScreen = useBreakpointValue({ base: true, lg: false })

    const getBg = () => {
      const cards = [BgOne, BgTwo, BgThree, BgFour];
      return cards[Math.floor(Math.random() * 4)];
    };
    return (
      <Box
        mx="auto"
        css={{
          background:
            'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          boxShadow: 'inset -1px -1px 0px rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(100px)',
          borderRadius: '20px'
        }}
        _hover={{
          boxShadow: 'none',
          backgroundImage: `url('${getBg()}')`
        }}
      >
        <Box
          h={h}
          p={{base:'1rem', lg: '2rem'}}
          _hover={{ backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}
        >
          <Text
            fontSize={{ base: '22px', lg: '30px' }}
            lineHeight={{ base: '26px', lg: '39px' }}
            fontWeight="600"
          >
            {title}
          </Text>
          {(showOneDescOnSmallScrren && isSmallScreen ? desc.slice(0, 1) : desc).map((item, index) => (
            <Text
              key={index}
              fontSize={{ base: '14px', lg: '18px' }}
              lineHeight={{ base: '20px', lg: '24px' }}
              pt="4"
            >
              {item}
            </Text>
          ))}
          <Text color="#44FFB2" pt="4">
            <Link
              isExternal
              fontSize={{ base: '14px', lg: '16px' }}
              href={readMoreHref}
              pr={{ base: 4, lg: 16 }}
            >
              {lang.t('research.readmore')}
            </Link>
            {langArr.map((lang, index) => {
              return (
                <Link
                  fontSize={{ base: '14px', lg: '16px' }}
                  key={index}
                  href={lang.href}
                  isExternal
                  pl={{ base: 2, lg: 4 }}
                >
                  {lang.name}
                </Link>
              );
            })}
          </Text>
        </Box>
      </Box>
    );
  }
);