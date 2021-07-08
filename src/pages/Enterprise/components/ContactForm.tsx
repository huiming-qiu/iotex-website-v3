import React, {useState} from "react";
import {
	Box,
	Flex,
	FormControl,
	FormErrorMessage,
	Heading,
	Input,
	Text,
	Textarea,
	Button as CButton
} from "@chakra-ui/react";
import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";



const ContactForm = () => {
	const {lang} = useStore()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [company, setCompany] = useState("")
	const [interest, setInterest] = useState("")
	const [errors, setErrors] = useState({})
	const handleSubmit = () => {
		const errors = {
			name: !name,
			email: !email,
			company: !company,
			interest: !interest
		}
		setErrors(errors)
	}
	return (
		<Box
			css={{
				backgroundImage: "url(/images/enterprise/form_bg_2.png)",
				backgroundRepeat: "no-repeat",
			}}
			backgroundPosition={{base:'left top 5rem',md:'left top'}}
			backgroundSize={{base:'100%',md:'50%'}}
			pt={'10rem'}
		>

			<Box
				id='form1'
				maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}
				mx="auto"
				borderRadius="1.125rem"
				px={{base:5,md:24}}
				py={{base:10,md:20}}
				marginTop={{
					base: '5rem',
					md: '8rem'
				}}
				position={"relative"}
				_before={{
					content:`""`,
					position:"absolute",
					top:'0',
					left:0,
					right:0,
					bottom:0,
					background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 133.06%)",
					opacity:0.1,
					boxShadow: "inset -1px -1px 0px rgba(172, 208, 254, 0.25)",
					backdropFilter: "blur(100px)",
					borderRadius:"1.125rem"
				}}
			>
				<Heading fontSize={'2.25rem'} textAlign={'center'} lineHeight={'2rem'}>{lang.t('enterprise.form.title')}</Heading>
				<Text mt={4} fontSize={'1.12rem'} textAlign={'center'}>{lang.t('enterprise.form.subtitle')}</Text>
				<Flex flexDirection={'column'} marginTop={'4.4rem'}>

					<Flex justifyContent={'space-between'} flexDirection={{base:'column',md:'row'}}>
						<Box width={{base:'100%',md:'49%'}}>
							<FormControl
								isInvalid={errors['name']}
								isRequired
							>
								<Input
									borderRadius={'9.6px'}
									border={'1px solid rgba(255, 255, 255, 0.2)'}
									minHeight={'4.5rem'}
									background={'rgba(255, 255, 255, 0.1)'}
									_placeholder={{color: 'white', fontWeight: 'semibold'}}
									placeholder={lang.t("your.name")}
									size="lg"
									value={name}
									onChange={(e) => setName(e.target.value)}
									borderColor="rgba(255, 255, 255, 0.2)"
								/>
								<FormErrorMessage>{'required'}</FormErrorMessage>
							</FormControl>
						</Box>
						<Box width={{base:'100%',md:'49%'}} mt={{base:5,md:0}}>
							<FormControl
								isInvalid={errors['email']}
								isRequired
							>
								<Input
									borderRadius={'9.6px'}
									border={'1px solid rgba(255, 255, 255, 0.2)'}
									minHeight={'4.5rem'}
									backgroundColor={'rgba(255, 255, 255, 0.1)'}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									_placeholder={{color: 'white', fontWeight: 'semibold'}}
									placeholder={lang.t("email")}
									borderColor="rgba(255, 255, 255, 0.2)"
									size="lg"/>
								<FormErrorMessage>{'required'}</FormErrorMessage>
							</FormControl>
						</Box>
					</Flex>
					<Box mt={5}>
						<FormControl
							isInvalid={errors['company']}
							isRequired
						>
							<Input
								borderRadius={'9.6px'}
								border={'1px solid rgba(255, 255, 255, 0.2)'}
								minHeight={'4.5rem'}
								backgroundColor={'rgba(255, 255, 255, 0.1)'}
								value={company}
								onChange={(e) => setCompany(e.target.value)}
								_placeholder={{color: 'white', fontWeight: 'semibold'}}
								placeholder={lang.t("company.name")}
								borderColor="rgba(255, 255, 255, 0.2)"
								size="lg"/>
							<FormErrorMessage>{'required'}</FormErrorMessage>
						</FormControl>
					</Box>
					<Box mt={5}>
						<FormControl
							isInvalid={errors['interest']}
							isRequired
						>
							<Textarea
								borderRadius={'9.6px'}
								border={'1px solid rgba(255, 255, 255, 0.2)'}
								backgroundColor={'rgba(255, 255, 255, 0.1)'}
								value={interest}
								onChange={(e) => setInterest(e.target.value)}
								rows={10}
								borderColor="rgba(255, 255, 255, 0.2)"
								padding={'1rem'}
								size={'large'}
								resize={'none'}
								_placeholder={{color: 'white', fontWeight: 'semibold'}}
								placeholder={lang.t("question")}  />
							<FormErrorMessage>{'required'}</FormErrorMessage>
						</FormControl>
					</Box>
					<Box textAlign={'center'} marginTop={'4.4rem'}>
						<CButton
							onClick={handleSubmit}
							backgroundColor={'#44FFB2'}
							color={'black'} size="lg"
							width={'15rem'}
							h={'4.5rem'}
							w={{base:'15rem',md:'20rem'}}
						>
							{lang.t('request')}
						</CButton>
					</Box>
				</Flex>
			</Box>
		</Box>
	)
}

export default observer(ContactForm)
