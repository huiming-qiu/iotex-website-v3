import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";
import BasicLayout from "../../Layouts/BasicLayout";
import imgOne from '@/assets/images/ucam/img_ucam1.png'
import imgTwo from '@/assets/images/ucam/img_ucam2.png'
import imgThree from '@/assets/images/ucam/img_ucam3.png'
import imgFour from '@/assets/images/ucam/img_ucam4.png'
import iconLogin from '@/assets/images/ucam/icon_based_login.png'
import iconEndToEnd from '@/assets/images/ucam/icon_End-to-End.png'
import iconEdge from '@/assets/images/ucam/icon_Edge.png'
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import {SectionContainer} from "@/pages/Pebble/SectionContainer";
import React from "react";
import {Footer} from "@/components/Footer";
import {Button} from "@/components/Button";
import {LogoCardItem} from "@/components/LogoCardItem";
import HighLight from "@/components/HighLight";

export const Ucam = observer(() => {
	const {lang} = useStore()
	const logos = [
		{
			icon: "/images/media-center/newsweek.png",
			iocn_active: "/images/media-center/newsweek_active.png",
			href: "https://www.newsweek.com/new-iotex-ucam-looks-provide-unrivaled-privacy-security-1517040"
		},
		{
			icon: "/images/media-center/logo_CoinDesk.png",
			iocn_active: "/images/media-center/logo_CoinDesk_active.png",
			href: "https://www.zdnet.com/article/new-ucam-security-camera-is-powered-by-the-blockchain/"
		},
		{
			icon: "/images/ucam/logo_zdnet.png",
			iocn_active: "/images/ucam/logo_zdnet_active.png",
			href: "https://www.coindesk.com/hardware-is-hard-two-blockchain-devices-win-plaudits-at-ces-2020",
			imgWidth:'auto'

		},
		{
			icon: "/images/media-center/logo_cointelegraph.png",
			iocn_active: "/images/media-center/logo_cointelegraph_active.png",
			href: "https://cointelegraph.com/news/blockchain-technology-now-powers-a-privacy-focused-security-camera"
		},
		{
			icon: "/images/media-center/logo_decrypt.png",
			iocn_active: "/images/media-center/logo_decrypt_active.png",
			href: "https://decrypt.co/15991/forget-amazon-ring-how-blockchain-could-secure-your-home"
		},
		{
			icon: "/images/ucam/logo_nerd_techy.png",
			iocn_active: "/images/ucam/logo_nerd_techy.png",
			href: "https://nerdtechy.com/tenvis-ucam-review"
		},
		{
			icon: "/images/ucam/911.png",
			iocn_active: "/images/ucam/911.png",
			href: "https://www.youtube.com/watch?v=tRYcuzOZP5M",
			imgWidth:'auto'
		},
		{
			icon: "/images/ucam/logo_thenetgu.png",
			iocn_active: "/images/ucam/logo_thenetgu_active.png",
			href: "https://www.youtube.com/watch?v=_BJ3cA2WcDI&t=44s",
			imgWidth:'auto'
		},
		{
			icon: "/images/ucam/logo_sarah.png",
			iocn_active: "/images/ucam/logo_sarah_active.png",
			href: "https://sarahscoop.com/ucam-security-camera-product-review/"
		},
	];

	return (
		<BasicLayout name={'ucam'}>
			<SectionContainer mt={40}>
				<Flex justifyContent={"space-between"} flexDirection={{base: 'column', md: 'column', xl: 'row'}}>
					<Box w={{lg: '100%', xl: '70%'}}>
						<Text
							fontWeight={'600'}
							fontSize={{base: '1rem', sm: '1rem', lg: '1.55rem', xl: '3.75rem', '2xl': '4.75rem'}}
						>Ucam -</Text>
						<Text
							mt={5}
							fontSize={{base: "2.25rem", sm: "3rem", lg: "3.5rem", xl: "5rem", "2xl": "7rem"}}
							fontWeight="semibold" color="white" textAlign="left" whiteSpace={{base: "inherit", md: "pre-line"}}>
							{lang.t("ucam.title")}
						</Text>
						<Text
							mt={10}
							fontSize={{base: '1rem', sm: '1rem', lg: '1.55rem', xl: '1.7rem', '2xl': '1.75rem'}}
							fontWeight={'500'}
							whiteSpace={{base: 'unset', md: 'pre-line'}}
						>
							{lang.t('ucam.caption')}
						</Text>
					</Box>
					<Box mt={40} width={'28%'} mx={'auto'}>
						<Image src={imgOne}/>
					</Box>
				</Flex>
			</SectionContainer>
			<SectionContainer mt={40}>
				<Flex justifyContent={'space-between'} flexDirection={{lg: 'column-reverse', xl: 'row'}}>
					<Box w={'28%'} mx={'auto'}>
						<Image src={imgTwo} mt={28}/>
					</Box>
					<Box w={{lg: '100%', xl: '70%'}}>
						<Text
							fontWeight="semibold"
							fontSize={{base: "2.25rem", sm: "3rem", lg: "3.5rem", xl: "4rem", "2xl": "6rem"}}
							whiteSpace={{base: "inherit", md: "pre-line"}}
						>{lang.t('ucam.title2')}</Text>
						<Text
							mt={10}
							maxWidth={{xl: '47rem'}}
							fontSize={{base: '1rem', sm: '1rem', lg: '1.55rem', xl: '1.7rem', '2xl': '1.75rem'}}
							fontWeight={'500'}
							opacity={'0.85'}
						>
							{lang.t('ucam.caption2')}
						</Text>
					</Box>
				</Flex>
			</SectionContainer>
			<SectionContainer mt={40}>
				<Box
					mx={'auto'}
					px={20}
					py={20}
					display={'flex'}
					flexDirection={'column'}
					alignItems={'center'}
					position={'relative'}
					_after={{
						position: 'absolute',
						top: '0',
						width: '100%',
						height: '100%',
						content: `""`,
						bg: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 133.06%)',
						opacity: '0.1',
						borderRadius: '20px',
						zIndex: -1
					}}
				>
					<Text
						fontWeight={'600'}
						textAlign={'center'}
						fontSize={'2rem'}
						pb={20}
						whiteSpace={{base: "inherit", md: 'inherit', lg: 'inherit', xl: "inherit", '2xl': 'pre-line'}}
					>{lang.t('ucam.title3')}</Text>
					<Button
						name={'Connect with the IoTeX team'} href={'https://iotex.io/enterprise'}
						size={{base: "80%", md: "50%", lg: "60%", xl: '50%', "2xl": "50%"}}/>
				</Box>
			</SectionContainer>
			<SectionContainer mt={40}>
				<Flex flexDirection={{base:'column',md:'row'}}>
					<Box width={{base:'100%',md:'85%'}}>
						<Text
							fontWeight="semibold"
							fontSize={{base: "2.25rem", sm: "3rem", lg: "3.5rem", xl: "4rem", "2xl": "6rem"}}
						>
							{lang.t('ucam.title4')}
						</Text>
						<Box fontSize={'1.25rem'} mt={5}>
							<Text>
								{lang.t('ucam.caption4')}
								<span style={{color: '#44FFB2FF'}}>{lang.t("ucam.caption4.keyword")}</span>
							</Text>
							<Text mt={10}>{lang.t("ucam.caption42")}</Text>
						</Box>
					</Box>
					<Box w={'50%'} mt={20} mx={'auto'}>
						<Image src={imgThree}/>
					</Box>
				</Flex>
			</SectionContainer>
			<SectionContainer mt={40}>
				<Flex
					bgImg={`url(${imgFour})`}
					bgSize={'55%'}
					bgRepeat={'no-repeat'}
					bgPosition={'bottom right'}
					justifyContent={'space-between'}
					flexDirection={{base:'column-reverse',md:'row',lg:'row',xl:'row'}}
				>
					<Flex flexDirection={'column'} width={{base:'100%',md:'40%'}} mt={{base:10,md:0}}>
						<Box>
							<Image src={iconLogin}/>
							<Text mt={5}
							      fontSize={{base: '1.75rem', md: '2rem',xl:'2.5rem'}} fontWeight="semibold"
							>
								{lang.t('ucam.sub.title1')}
							</Text>
							<Text mt={5}
							      fontWeight={'500'}
							      fontSize={{base:'1.25rem',xl:'1.75rem'}}
							      opacity={'0.85'}
							>
								{lang.t('ucam.sub.desc1')}
							</Text>
						</Box>
						<Box mt={16}>
							<Image src={iconEndToEnd}/>
							<Text
								mt={5}
								fontSize={{base: '1.75rem', md: '2rem',xl:'2.5rem'}}
								fontWeight="semibold"
							>
								{lang.t('ucam.sub.title2')}
							</Text>
							<Text
								mt={5}
								fontWeight={'500'}
								fontSize={{base:'1.25rem',xl:'1.75rem'}}
								opacity={'0.85'}

							>
								{lang.t('ucam.sub.desc2')}
							</Text>
						</Box>
						<Box mt={16}>
							<Image src={iconEdge}/>
							<Text
								mt={5}
								fontSize={{base: '1.75rem', md: '2rem',xl:'2.5rem'}}
								fontWeight="semibold"
							>{lang.t('ucam.sub.title3')}</Text>
							<Text
								mt={5}
								fontWeight={'500'}
								fontSize={{base:'1.25rem',xl:'1.75rem'}}
								opacity={'0.85'}
							>{lang.t('ucam.sub.desc3')}</Text>
						</Box>
					</Flex>
					<Box w={{base:'100%',md:'50%'}}>
						<Text
							fontWeight="semibold"
							fontSize={{base: "2.25rem", sm: "3rem", lg: "3.5rem", xl: "4rem", "2xl": "6rem"}}
						>{lang.t('ucam.title5')}
						</Text>
						<Text
							mt={20}
							color={'#FFFFFF'}
							fontWeight={'500'}
							fontSize={{base:'1.25rem',xl:'1.75rem'}}
							opacity={'0.85'}
						>{lang.t("ucam.caption5")}</Text>
					</Box>
				</Flex>
			</SectionContainer>

			<SectionContainer mt={40}>
				<Box>
					<Text
						fontSize={{base: "2rem", sm: "1.875rem", lg: "2.5rem", xl: "4rem"}}
						whiteSpace="pre-line"
						fontWeight="semibold"
						textAlign="center"
						mb="1.75rem"
					>
						{lang.t("ucam.title6")}
					</Text>
					<Box
						fontSize={{
							base: "0.875rem",
							md: "1rem",
							lg: "1.25rem",
							xl: "1.25rem",
							"2xl": "1.75rem",
						}}
						mb={{base: "4rem"}}
						opacity="0.85"
						fontWeight="medium"
						textAlign="center"
						mx="auto"
						whiteSpace={{base: "inherit", md: "pre-line"}}
					>
						<HighLight
							sourceStr={lang.t("ucam.caption61")}
							keyArr={[
								{
									word: lang.t("ucam.caption61.keyword")
								}
							]}
							markActiveStyle={{color: '#44FFB2FF'}}
						/>
					</Box>
					<Flex
						flexWrap="wrap"
						justifyContent="space-between"
						alignContent="space-between"
					>
						{logos.map((item, index) => {
							return (
								<Box
									key={index}
									mb="3rem"
									width={{base: "46%", lg: "30%"}}
									height={{
										base: "6rem",
										sm: "8rem",
										md: "9rem",
										"2xl": "11.625rem",
									}}
								>
									<a href={item.href} target="_blank">
										<LogoCardItem item={item} width="100%" height="100%" imgWidth={item?.imgWidth} isAnimation={false}/>
									</a>
								</Box>
							);
						})}
					</Flex>
					<Text
						fontSize={{
							base: "0.875rem",
							md: "1rem",
							lg: "1.25rem",
							xl: "1.25rem",
							"2xl": "1.75rem",
						}}
						mt={5}
						opacity="0.85"
						fontWeight="medium"
						textAlign="center"
						mx="auto"
						whiteSpace={{base: "inherit", md: "pre-line"}}
					>
						{lang.t("ucam.caption62")}
					</Text>
					<Text
						fontSize={{
							base: "0.875rem",
							md: "1rem",
							lg: "1.25rem",
							xl: "1.25rem",
							"2xl": "1.75rem",
						}}
						mt={10}
						opacity="0.85"
						fontWeight="medium"
						textAlign="center"
						mx="auto"
						whiteSpace={{base: "inherit", md: "pre-line"}}
					>
						{lang.t("ucam.caption63")}
					</Text>
				</Box>
				<Flex justifyContent={'center'} mt={28}>
					<Button name={'Buy it here'} href={'https://ucam.iotex.io/'} size={{base: "100%", md: "40%"}}/>
				</Flex>
			</SectionContainer>
			<Footer/>
		</BasicLayout>
	)
})