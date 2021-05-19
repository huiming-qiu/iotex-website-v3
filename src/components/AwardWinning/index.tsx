import React from 'react';
import { Box, Flex, Text  } from '@chakra-ui/react';
import { useStore } from '../../store';
import { LogoCardItem } from "../LogoCardItem/index"
import { observer } from 'mobx-react-lite';

export const AwardWinning = observer(() => {
  const { lang } = useStore();
  
  const logos = [
    {icon: '/images/icon-logo1.png', iocn_active: '/images/icon-logo1_s.png'},
    {icon: '/images/icon-logo2.png', iocn_active: '/images/icon-logo2_s.png'},
    {icon: '/images/icon-logo3.png', iocn_active: '/images/icon-logo3_s.png'},
    {icon: '/images/icon-logo4.png', iocn_active: '/images/icon-logo4_s.png'},
  ]

    return (
      <Box mx="auto">
        <Flex justifyContent="space-between" flexDirection={{base: "column", lg: "row"}}>
            <Flex flexWrap="wrap" maxWidth={{base: "100%", lg: "50%"}} justifyContent="space-between">
              {
                logos.map((item, index) => {
                  return <Box key={index} width="47%" mb={{base: "1rem", md: "2rem", lg: "2rem", "2xl": "3rem"}} h={{base: "15vw", lg: "46%", xl: "10rem","2xl": "9rem"}}>
                    <LogoCardItem item={item} width="100%" height="100%" />
                  </Box>
                })
              }
            </Flex>
            <Box maxWidth={{base: '100%', lg: "40%"}} mt={{base: '2rem', lg: 0}}>
              <Text fontSize={{base: "0.75rem", md: "1.25rem"}} mb={{base: "0.8rem", md: "0.5rem", "2xl": "2.875rem"}}>{lang.t("backed.by")}</Text>
              <Text fontSize={{base: "2rem", md: "1.875rem", lg: "2rem", xl: "3rem", "2xl": "4rem"}} mb={{base: "0.8rem", xl: "1.5rem"}} fontWeight="semibold">{lang.t("award.winning")}</Text>
              <Text fontSize={{base: "1rem", md: "1.25rem"}} fontWeight="medium" mb={{base: "2rem", xl: "2.875rem"}}>{lang.t("award.winning.content")}</Text>
              <Box className="commonBtnBox"  h={{base: "4rem", md: "6rem"}}>
                <a href="https://iotex.io/research" target="_blank" style={{width: "100%"}}>
                  <Box bg="btnBgColor" className="commonBtn" borderRadius="10px" maxWidth="448px" lineHeight={{base: "4rem", md: "6rem"}} cursor="pointer">
                    <Text fontSize={{base: "1.25rem", md: "1.75rem"}} color="btnTextColor" fontWeight="extrabold" textAlign="center">{lang.t("award.winning.btn")}</Text>
                  </Box>
                </a>
              </Box>
            </Box>
        </Flex>
      </Box>
    );
});
