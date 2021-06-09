import React from "react";
import {observer} from "mobx-react-lite";
import BasicLayout from "../../Layouts/BasicLayout";
import {Box, Flex, Image, SimpleGrid, Text} from "@chakra-ui/react";
import {useStore} from "@/store/index";
import {Button} from "@/components/Button";
import {Card} from "./Card";
import {Footer} from "@/components/Footer";
import Form from "./Form";
import {Title} from "./Title";
import {SectionContainer} from "./SectionContainer";
import {Caption} from "./Caption";

const Pebble = () => {
	const {lang} = useStore()
	const PART_4_ICON_TEXT = [
		{icon: 'Assistive_Technologies.png', text: lang.t('supply_chain')},
		{icon: 'COMMERCIA.png', text: lang.t('contract_settlement')},
		{icon: 'Mobile_Asset_Tracking.png', text: lang.t('remote_monitoring')},
		{icon: 'TRANSPORTATION.png', text: lang.t('transportation_logistics')},
		{icon: 'Fixed_Assets.png', text: lang.t('mobile_asset_tracking')},
		{icon: 'INDUSTRIAL_PROCESSES.png', text: lang.t('process_automation')},
	]
	return (
		<BasicLayout>
			{/*part 1*/}
			<Flex
				backgroundImage='url(images/pebble/img_pebble.png)'
				marginTop='10rem'
				justifyContent='center'
				backgroundRepeat='no-repeat'
				minHeight={{base: '1000px', md: '1300px'}}
				backgroundPosition={{
					base: 'bottom 0px right 0px',
					md: 'bottom -50px right -230px',
					lg: 'bottom -50px right -230px',
					xl: 'bottom -160px right -280px'
				}}
				backgroundSize={'100%'}
			>
				<SectionContainer>
					<Flex flexDirection={{base: 'column', md: 'row'}}>
						<Box paddingTop={{base:'0',md:'4rem'}} maxWidth={'900px'}>
							<Text
								fontSize={{base: '1.75rem', sm: '1.75rem', lg: '1.75rem', xl: '3rem', '2xl': '3rem'}}
								fontWeight={'semibold'}>{lang.t('pebble')}
							</Text>
							<Title text={lang.t('pebble.title')} maxWidth='900px'/>
							<Caption text={lang.t('pebble.caption')} marginTop={'24px'} />
							<Box marginTop={'64px'}>
								<Button name={lang.t('buy_on_crowdsupply')}
								        href='https://www.crowdsupply.com/iotex/pebble-tracker'
								        size={{base: "100%", xl: "40%", "2xl": "40%"}}
								/>
							</Box>
						</Box>
						<Flex justifyContent={{base:'center',md:'end'}} marginTop={{base: '5rem', md: '0rem'}} width={'800px'}>
							<Image src='images/pebble/pebble_1.png' width={{base: '50%', md: '471px'}} height={{md: '912.74px'}}/>
						</Flex>
					</Flex>
				</SectionContainer>
			</Flex>

			{/*	part 2*/}
			<Box marginTop={{md: '-15rem'}}>
				<SectionContainer>
					<Flex justifyContent={'center'} mx={"auto"}>
						<Flex direction={{base: 'column-reverse', md: 'row', sm: 'column-reverse'}} minHeight={'900px'}
						      justifyContent={'space-between'}
						      width={'100%'}>
							<SimpleGrid columns={[1, 1, 1, 2]} spacing='16px'>
								<Flex flexDirection={'column'} justifyContent={'space-evenly'} mx={'auto'}>
									<Card url='images/pebble/icon_location.png' text='LOCATION'/>
									<Card url='images/pebble/icon_temperature.png' text='CLIMATE'/>
								</Flex>
								<Flex flexDirection={'column'} justifyContent={'space-evenly'} mx={'auto'}>
									<Card url='images/pebble/icon_vibration.png' text='MOTION'/>
									<Card url='images/pebble/icon_sunlight.png' text='LIGHT'/>
									<Card url='images/pebble/icon_connectivity.png' text='CELLULAR-IOT'/>
								</Flex>
							</SimpleGrid>
							<Flex maxWidth={'700px'} flexDirection={'column'} justifyContent={'center'}>
								<Text fontSize={{base: '2.5rem', sm: '2.5rem', lg: '2.5rem', xl: '5rem', '2xl': '5rem'}}
								      fontWeight={'semibold'}

								>
									{lang.t('pebble.section1.title')}
								</Text>
								<Text
									fontSize={{base: '0.75rem', sm: '1rem', lg: '1.25rem', xl: '1.5rem', '2xl': '1.75rem'}}
									fontWeight={'semibold'}
								>
									{lang.t('pebble.section1.caption')}
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</SectionContainer>
			</Box>

			{/*part 3*/}
			<SectionContainer>
				<Flex justifyContent={'center'}
				      flexDirection={'column'}>
					<Text fontSize={{base: '2.5rem', sm: '2.5rem', lg: '2.5rem', xl: '5rem', '2xl': '5rem'}}
					      fontWeight={'semibold'}
					      textAlign={'center'}
					>
						{lang.t('pebble.section2.title1')}
					</Text>
					<Text fontSize={{base: '2.5rem', sm: '2.5rem', lg: '2.5rem', xl: '5rem', '2xl': '5rem'}}
					      fontWeight={'semibold'}
					      textAlign={'center'}
					>
						{lang.t('pebble.section2.title2')}
					</Text>
					<img src={'images/pebble/pebble_section2_bg.png'} style={{marginTop: '80px'}}/>
				</Flex>
			</SectionContainer>

			{/*	part 4*/}
			<Box
				background={'url(images/pebble/part4_bg.png) no-repeat'}
				minHeight={'700px'}
				padding={'63px 0 132px 0'}
				marginTop={{base:'5rem',md:'15rem'}}
			>
				<SectionContainer>
					<Flex
						direction={{base: 'column', md: 'row'}}
						justifyContent={'space-between'}
					>
						<Box maxWidth={'700px'}>
							<Title text={lang.t('title')}/>
							<Caption text={lang.t("dev.subtitle4")} marginTop={'24px'}/>
						</Box>
						<SimpleGrid columns={[1, 2]} spacing={'20px'}>
							{
								PART_4_ICON_TEXT.map((item) => {
									return (
										<Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} key={item.icon}>
											<img src={`images/pebble/${item.icon}`} alt={item.text} width={'48px'}
											     height={'48px'}/>
											<Text marginTop={'1rem'}>{item.text}</Text>
										</Flex>
									)
								})
							}
						</SimpleGrid>
					</Flex>
				</SectionContainer>
			</Box>

			{/*part5*/}
			<Box
				marginTop={'180px'}
				minHeight={'1000px'}
				backgroundImage={'url(images/pebble/img_pebble.png)'}
				backgroundRepeat={'no-repeat'}
			>
				<SectionContainer>
					<SimpleGrid columns={[1, 2]}>
						<Box>
							<Flex
								background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
								boxShadow={'inset -1px -1px 0px rgba(255, 255, 255, 0.25)'}
								width={{base: '100%', md: '556px'}}
								height={'453px'}
								flexDirection={'column'}
								justifyContent={'space-around'}
								alignItems={'center'}
								borderRadius={'20px'}
							>
								<Image src="images/pebble/Nordic_Semiconductor.png" alt="Nordic_Semiconductor" width={'310px'}
								       height={'90.73px'}/>
								<Image src="images/pebble/IoTeX_logo.png" alt="IoTeX_logo" width={'310px'} height={'90.73px'}/>
							</Flex>
						</Box>
						<Box marginTop={{base: '5rem', sm: '0', md: '0'}}>
							<Title text={lang.t('pebble.section3.title')}/>
							<Caption text={lang.t('pebble.section3.caption')} marginTop={'24px'}/>
							<Box marginTop={'64px'}>
								<Button name={lang.t('buy_on_crowdsupply')} href={'https://www.crowdsupply.com/iotex/pebble-tracker'}
								        size={{base: "100%", xl: "60%", "2xl": "60%"}}/>
							</Box>
						</Box>
					</SimpleGrid>
				</SectionContainer>
			</Box>

			{/*part6*/}
			<Box
				bgImage={'url(images/pebble/aperture.png)'}
				bgRepeat={'no-repeat'}
			>
				<SectionContainer>
					<Flex flexDirection={'column'} alignItems={'center'}>
						<Title text={lang.t('pebble.section4.title')} maxWidth={'800px'} textAlign={'center'}/>
						<Caption text={lang.t('pebble.section4.caption')} maxWidth={'1200px'} textAlign={'center'}
						         marginTop={'24px'}/>
						<img src="images/pebble/pebble_section4_bg.png" alt="pebble_section4_bg" style={{marginTop: '109px'}}/>
						<SimpleGrid
							columns={[1, 2, 2, 4]}
							spacing={16}
							marginTop={'88px'}
							padding={'0 5rem'}
						>
							<Box>
								<img src="images/pebble/PMT_logo.png" alt="PMT_logo"/>
							</Box>
							<Box>
								<img src="images/pebble/TDK-Logo.png" alt="TDK-Logo"/>
							</Box>
							<Box>
								<img src="images/pebble/Bosch_logo.png" alt="Bosch_logo"/>
							</Box>
							<Box>
								<img src="images/pebble/nordic_logo.png" alt="nordic_logo"/>
							</Box>
						</SimpleGrid>
					</Flex>

				</SectionContainer>
			</Box>

			{/*part7*/}
			<SectionContainer>
				<SimpleGrid columns={[1, 2]} spacing={{sm: '3rem', md: '3rem', lg: '5rem'}}>
					<Box
					>
						<img src="images/pebble/pebble_section5_bg.png" alt="pebble_section5_bg"
						/>
					</Box>
					<Flex maxWidth={'766px'} flexDirection={'column'} justifyContent={"center"}>
						<Title text={lang.t('pebble.section5.title')} textAlign={'left'}/>
						<Text marginTop={'24px'}>{lang.t('pebble.section5.caption')}</Text>
						<Box marginTop={'64px'}>
							<Button name={lang.t("get_started_with_iotex")}
							        href={'https://docs.iotex.io/developer/hardware/pebble.html'}
							        size={{base: "100%", xl: "60%", "2xl": "60%"}}
							/>
						</Box>
					</Flex>
				</SimpleGrid>
			</SectionContainer>

			{/*part 8*/}
			<Flex
				backgroundImage={'url(images/pebble/pebble_section_6_bg.png)'}
				minHeight={'546px'}
				mx={"auto"}
				justifyContent={'center'}
				flexDirection={'column'}
				marginTop={'74px'}
			>
				<SectionContainer>
					<Title text={lang.t('pebble.section6.title')}/>
					<Text
						marginTop={'24px'}
						textAlign={'center'}
						fontSize={{base: '0.75rem', sm: '1rem', lg: '1.25rem', xl: '1.5rem', '2xl': '1.75rem'}}
					>
						{lang.t('pebble.section6.caption')}
					</Text>
				</SectionContainer>
			</Flex>
			<Form/>
			<Footer/>
		</BasicLayout>
	)
}

export default observer(Pebble)