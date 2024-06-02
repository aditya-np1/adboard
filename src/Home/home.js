import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const home = () => {
  return (
    <Flex color="white" >
      <Flex w="100%" flexDir="column" ml="5%" mr="20%" color="White">
        {/* ml=margin left, mr=margin right */}
        <Text fontWeight="700" fontSize={30}>
          jai swaminarayan
        </Text>
        <Link to="/Register_Shop">Shop Registration</Link>
        <Link to="/shopShow">Publish Your Ads</Link>
      </Flex>
    </Flex>
  );
}
export default home;