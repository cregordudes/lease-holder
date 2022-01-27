import Image from "next/image";
import {Box, Flex, Text, Avatar} from '@chakra-ui/react';
import {FaBed, FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import milify from 'millify'
import Link  from "next/link";
import defaultImage from "../assets/default.jpg"

function Property({ property: {coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID }}:any) {
  const priceD:number = price * 0.27;
  return (
    <Box>
      <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="space-between" cursor="pointer">
      <Box>
        <Link href={`/property/${externalID}`} passHref>
          <Image src={coverPhoto ? coverPhoto.url : defaultImage} alt="house-for-rent" width={380} height={250} />
        </Link>
      </Box>
      <Box w="full">
        <Flex paddingTop={2} alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">{isVerified && <GoVerified/>}</Box>
            <Text fontWeight="bold" fontSize="lg">$ {milify(priceD)} {rentFrequency && `/ ${rentFrequency}`}</Text>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url}/>
          </Box>
        </Flex>
        <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
          {rooms} <FaBed/> | {baths} <FaBath/> | {milify(area)} sqft <BsGridFill/>
        </Flex>
        <Link href={`/property/${externalID}`} passHref>
          <Text fontSize="lg">
            {title.length > 30 ? `${title.substring(0, 30)}...` : title}
          </Text>
        </Link>
      </Box>
     </Flex>
     </Box>
   );
}

export default Property;
