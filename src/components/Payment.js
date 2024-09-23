import React, { useEffect, useRef } from 'react';
import { Box, Button, Container, HStack, Image, Text } from "@chakra-ui/react";
import Cointree from "../assets/Cointree.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Payment = () => {
  const boxRef = useRef(null); // Ref for the box
  const imageRef = useRef(null); // Ref for the image

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, x: 100 }, // Start from the right
      {
        opacity: 1,
        x: 0,
        duration: 2, // Increase duration for a slower animation
        ease: "power3.out",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%", // Start the animation when the top of the box hits 80% of the viewport
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <>
      <Container maxW={"container.xl"} mt={{ base: "50px", md: "150px" }} mb={{ base: "50px", md: "120px" }} p={{ base: 5, md: 10 }}>
        <HStack display={"flex"} justifyContent={"center"} gap={"0px"} flexWrap={"wrap"}>
          {/* Box for Payment Info */}
          <Box
            ref={boxRef} // Attach ref for animation
            bg={"#203741"}
            borderRadius={"20px"}
            p={{ base: 10, md: 20 }}
            color={"white"}
            textAlign={"center"}
            flexBasis={{ base: "100%", lg: "50%" }}
          >
            <HStack>
              <Text
                p={2}
                fontSize={{ base: "1.5rem", md: "2.5rem" }}
                fontWeight={"bold"}
              >
                Make Money, Risk-Free
              </Text>
            </HStack>
            <HStack>
              <Text fontSize={{ base: "0.875rem", md: "1rem" }}>
                You pay for fulfillment only when you make a sale
              </Text>
            </HStack>
            <Box bg={"#17262b"} mt={5}>
              <HStack display={"flex"} justifyContent={"space-between"} p={{ base: 3, md: 5 }}>
                <HStack>
                  <Text fontSize={{ base: "0.875rem", md: "1rem" }}>You sell a t-shirt</Text>
                </HStack>
                <HStack>
                  <Text fontSize={{ base: "0.875rem", md: "1rem" }}>$30</Text>
                </HStack>
              </HStack>

              <HStack display={"flex"} justifyContent={"space-between"} p={{ base: 3, md: 5 }}>
                <HStack mb={5}>
                  <Text fontSize={{ base: "0.875rem", md: "1rem" }}>You pay for its production</Text>
                </HStack>
                <HStack mb={5}>
                  <Text fontSize={{ base: "0.875rem", md: "1rem" }}>$12</Text>
                </HStack>
              </HStack>
              <hr style={{ marginLeft: "20px", marginRight: "20px" }} />

              <HStack display={"flex"} justifyContent={"space-evenly"}>
                <HStack p={{ base: 3, md: 5 }}>
                  <Text color={"#18c75a"} fontSize={{ base: "1rem", md: "1.25rem" }} fontWeight={"bold"}>
                    You Profit
                  </Text>
                </HStack>
                <HStack>
                  <Text fontSize={{ base: "1rem", md: "1.25rem" }} fontWeight={"bold"} color={"#18c75a"}>
                    $30
                  </Text>
                </HStack>
              </HStack>
            </Box>
            <HStack mt={10} mb={5}>
              <Button
                bg={"#18c75a"}
                color={"white"}
                textAlign={"left"}
                p={{ base: 4, md: 6 }}
              >
                Start Selling
              </Button>
            </HStack>
            <HStack>
              <Text fontSize={{ base: "0.875rem", md: "1rem" }}>
                100% Free to use 900+ Products. Largest print network
              </Text>
            </HStack>
          </Box>

          {/* Image Section */}
          <HStack
            display={{ base: "none", lg: "flex" }}
            flexBasis={{ base: "100%", lg: "50%" }}
          >
            <Image ref={imageRef} src={Cointree} h={{ base: 300, md: 600 }} />
          </HStack>
        </HStack>
      </Container>
    </>
  );
}

export default Payment;
