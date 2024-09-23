import { Button, Center, Container,Box, Image, Text, VStack, HStack } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import centerImage from "../assets/center-img.png";
import B from "../assets/B.png";
import Etsy from "../assets/Etsy.png";
import More from "../assets/More.png";
import shopify from "../assets/shopify.png";
import square from "../assets/square.png";
import Bird from "../assets/bird.png";  // Import the bird image
import wixImage from "../assets/wix-img.png";
import designimg from "../assets/testdesign.png"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Connect = () => {
  const centerImageRef = useRef(null);
  const surroundingImageRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(centerImageRef.current, 
      { opacity: 0, scale: 0.5 }, 
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: centerImageRef.current,
          start: "top 80%",
          once: true
        }
      }
    );

    surroundingImageRefs.current.forEach((image, index) => {
      gsap.fromTo(image, 
        { opacity: 0, y: 100 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            once: true,
            delay: index * 0.1 
          }
        }
      );
    });

    gsap.fromTo(surroundingImageRefs.current[6], 
      { opacity: 0, y: 100 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: surroundingImageRefs.current[6],
          start: "top 80%",
          once: true
        }
      }
    );
  }, []);

  return (
    <Container maxW={"container.xl"} position="relative" h="auto" p={4} mb={12}>
      <Center>
        <VStack mt={20} p={10} spacing={4}>
          <Text fontWeight={"bold"} fontSize={{ base: "1.7rem", md: "3rem" }}>Connect Your Store</Text>
          <Text color={"lightgray"} fontSize={{ base: "0.85rem", md: "1.25rem" }} fontWeight={"400"}>
            Printify easily integrates with major e-commerce platforms and marketplaces
          </Text>
        </VStack>
      </Center>

      <Center position="relative" h="500px" flexWrap="wrap">
        <Image
          ref={centerImageRef}
          className="center-image"
          src={centerImage}
          h={{ base: "120px", md: "180px" }}
          p={5}
          m={5}
          bg={"#39b75d"}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        />

        <Image
          ref={el => surroundingImageRefs.current[0] = el}
          className="image-item"
          src={B}
          h={{ base: "80px", md: "100px" }}
          w={{ base: "80px", md: "100px" }}
          position="absolute"
          top={{ base: "10%", md: "20%" }}
          left={{ base: "5%", md: "10%" }}
        />
        <Image
          ref={el => surroundingImageRefs.current[1] = el}
          className="image-item"
          src={Etsy}
          h={{ base: "40px", md: "50px" }}
          position="absolute"
          top={{ base: "10%", md: "20%" }}
          right={{ base: "5%", md: "10%" }}
        />
        <Image
          ref={el => surroundingImageRefs.current[2] = el}
          className="image-item"
          src={More}
          h={{ base: "150px", md: "200px" }}
          w={{ base: "150px", md: "200px" }}
          position="absolute"
          bottom={{ base: "10%", md: "20%" }}
          left={{ base: "5%", md: "20%" }}
        />
        <Image
          ref={el => surroundingImageRefs.current[3] = el}
          className="image-item"
          src={shopify}
          h={{ base: "80px", md: "100px" }}
          w={{ base: "80px", md: "100px" }}
          position="absolute"
          bottom={{ base: "10%", md: "20%" }}
          right={{ base: "5%", md: "20%" }}
        />
        <Image
          ref={el => surroundingImageRefs.current[4] = el}
          className="image-item"
          src={square}
          h={{ base: "150px", md: "200px" }}
          w={{ base: "150px", md: "200px" }}
          position="absolute"
          top={{ base: "74%", md: "70%" }}
          left={{ base: "15%", md: "30%" }}
        />
        <Image
          ref={el => surroundingImageRefs.current[5] = el}
          className="image-item"
          src={wixImage}
          h={{ base: "40px", md: "50px" }}
          w={{ base: "40px", md: "50px" }}
          position="absolute"
          bottom={{ base: "60%", md: "70%" }}
          right={{ base: "5%", md: "30%" }}
        />

        <Image
          ref={el => surroundingImageRefs.current[6] = el} 
          className="image-item"
          src={Bird}
          h={{ base: "40px", md: "50px" }} 
          w={{ base: "40px", md: "50px" }} 
          position="absolute"
          top={{ base: "40%", md: "50%" }} 
          left={{ base: "80%", md: "90%" }} 
        />
      </Center>
      <Container mt={{ base: "100px", md: "200px" }} p={0} maxW="container.xl" position="relative">
  <Image 
    borderRadius="25px" 
    bg="#e2f7e3" 
    h={{ base: "150px", md: "180px" }} 
    w="100%" 
    src={designimg} 
    objectFit="cover" 
  />
  <HStack 
    w={{ base: "90%", md: "60%" }} 
    position="absolute" 
    top={{ base: "10%", md: "25%" }} 
    left={{ base: "5%", md: "20%" }} 
    spacing={{ base: 4, md: 8 }} 
    flexDirection={{ base: "column", md: "row" }} 
    alignItems={{ base: "center", md: "flex-start" }} 
    bg="rgba(255, 255, 255, 0.8)" 
    p={4} 
    borderRadius="25px" 
  >
    <Text 
      fontWeight="bold" 
      fontSize={{ base: "0.85rem", md: "1.5rem" }} 
      textAlign="center" 
      color="black"
    >
      Are you a large business looking <br /> for custom solutions?
    </Text>
    <Button size={{ base: "sm", md: "xl" }} height={"50px"} w={"200px"} mt={{ base: 2, md: 5 }} bg={"#39b75d"} color={"white"}>
      Talk to sales
    </Button>
  </HStack>
</Container>


    </Container>
  );
};

export default Connect;
