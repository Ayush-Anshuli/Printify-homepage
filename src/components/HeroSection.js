import { Button, Container, Heading, HStack, Image, Text, Stack, Box } from '@chakra-ui/react';
import React from 'react';
import GreenTick from "../assets/tick.png";
import hero from "../assets/main-logo-2.png";

const HeroSection = () => {
  return (
    <>
      <Container maxW={["1200px"]} maxH={"100vh"} mt={10}>
        <Box
          display={"flex"}
          flexDirection={["column", "column", "row"]}  // Stacks vertically on small screens
          gap={["20px", "30px", "200px"]}  // Adjusts gap on small screens
          alignItems={["center", "center", "flex-start"]}
        >
          
          {/* Left Section: Heading and CTA */}
          <Stack mt={[5, 10, 36]} w={["100%", "100%", "auto"]} alignItems={["center", "center", "flex-start"]}>
            <Heading fontSize={["2xl", "3xl", "3.5rem"]} textAlign={["center", "center", "left"]}>
              Create and sell  custom products
            </Heading>

            {/* Feature list */}
            <HStack mt={2} color={"gray"} fontWeight={"bold"}>
              <Image src={GreenTick} h={5} />
              <Text>100% Free to use</Text>
            </HStack>
            <HStack color={"gray"} fontWeight={"bold"}>
              <Image src={GreenTick} h={5} />
              <Text>100% Free to use</Text>
            </HStack>
            <HStack color={"gray"} fontWeight={"bold"}>
              <Image src={GreenTick} h={5} />
              <Text>100% Free to use</Text>
            </HStack>

            {/* CTA Buttons */}
            <HStack mt={8} mb={5} w={["100%", "auto"]} justifyContent={["center", "center", "flex-start"]}>
              <Button color={"white"} bg={"#39b75d"} w={["100%", "auto"]}>
                Start for free
              </Button>
              <Button w={["100%", "auto"]}>
                How it works?
              </Button>
            </HStack>

            <Text color={"#39b75d"} fontWeight={"bold"} textAlign={["center", "center", "left"]}>
              Trusted by over 8M sellers around the world
            </Text>
          </Stack>

          {/* Right Section: Image */}
          <HStack mt={[5, 10, 36]} w={["100%", "auto"]} justifyContent={["center", "center", "flex-start"]} position="relative">
            <Image 
              src={hero} 
              h={[350, 450, 500]}  // Increased height for different screen sizes
              w={[350, 450, 900]}  // Increased width for different screen sizes
              maxW="100%"  // Ensures it doesn't overflow the container
              objectFit="contain"  // Maintains the aspect ratio
            />
          </HStack>

        </Box>
      </Container>
    </>
  );
}

export default HeroSection;
