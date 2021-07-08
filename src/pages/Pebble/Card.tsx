import React from "react";
import {Flex, Image, Text} from "@chakra-ui/react";

export const Card = ({url, text,...props}) => {
	return (
		<Flex width={{md:"14rem",lg:'10rem',xl:'14rem'}}
		      height={{base:'15rem',md:'12rem',lg:'8rem',xl:'12rem'}}
		      borderRadius={'20px'}
		      background={'linear-gradient(147.16deg, rgba(255, 255, 255, 0.1) 14.71%, rgba(255, 255, 255, 0) 114.16%)'}
		      boxShadow='inset -1px -1px 0px rgba(255, 255, 255, 0.25)'
		      justifyContent='center'
		      alignItems='center'
		      direction={'column'}
		      marginTop={{base:'1rem',md:0}}
					{...props}
		>
			<Image src={url} alt={text} width={{md:'4rem',lg:'3rem'}} height={{md:'4rem',lg:'3rem'}}/>
			<Text textAlign='center' fontSize='1.12rem' fontWeight={'semibold'}>{text}</Text>
		</Flex>
	)
}
