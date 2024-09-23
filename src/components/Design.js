import React, { useEffect } from 'react';
import { Container, HStack, Image, Stack, Text, Box } from "@chakra-ui/react";
import Slider from "react-slick"; // Import Slider from react-slick
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin
import Collection from "../assets/collection.png";
import design from "../assets/design.png";
import wix from "../assets/wix.png";
import pritishirt from "../assets/pritishirt.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#39b75d",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#39b75d",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const Design = () => {
  useEffect(() => {
    // GSAP animation for cards coming from the left on scroll
    const cards = gsap.utils.toArray(".card");
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: -100, // Start from the left
          opacity: 0, // Hidden before scroll
        },
        {
          x: 0, // Move to original position
          opacity: 1, // Fade in
          duration: 0.5, // Animation duration
          ease: "power3.out", // Smooth easing
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Start when the top of the element is at 80% of the viewport
            toggleActions: "play none none none", // Play once, no reverse
            stagger: {
              amount: 0.2, // Delay for each card
              from: "start", // Start staggering from the first card
            },
          },
        }
      );
    });

    // GSAP animation for text coming from the bottom
    gsap.utils.toArray(".animated-text").forEach((text) => {
      gsap.fromTo(
        text,
        {
          y: 50, // Start from below
          opacity: 0, // Hidden before scroll
        },
        {
          y: 0, // Move to original position
          opacity: 1, // Fade in
          duration: 2, // Animation duration
          ease: "power3.out", // Smooth easing
          scrollTrigger: {
            trigger: text,
            start: "top 80%", // Start when the top of the element is at 80% of the viewport
            toggleActions: "play none none none", // Play once, no reverse
          },
        }
      );
    });
  }, []);

  const slidingDetails = [
    {
      img: pritishirt,
      name: "CREATE",
      title: "custom products",
      desc: "Easily add your designs to a wide range of products using our free tools"
    },
    {
      img: wix,
      name: "SELL",
      title: "on your terms",
      desc: "You choose the products, sale, price, and where to sell"
    },
    {
      img: design,
      name: "WE HANDLE",
      title: "fulfillment",
      desc: "Once an order is placed, we automatically handle all the printing and delivery"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <Container maxW="100%" bg="#f7f7f7" mt={5}>
      <Container maxW={["95%", "90%", "80%", "70%", "60%"]} mx="auto">
        <HStack
          flexDirection={{ base: "column", md: "column", lg: "row" }}
          spacing={0}
          mb={12}
          alignItems="center"
        >
          <Image
            pos="relative"
            borderRadius={{ base: "40px 40px 0 0", lg: "40px" }}
            mt={{ base: 8, lg: 16 }}
            mb={0}
            src={Collection}
            h={{ base: "250px", sm: "300px", md: "400px", lg: "500px", xl: "600px" }}
            w={{ base: "100%", md: "100%", lg: "40%" }}
            objectFit="cover"
          />
          <Stack
            bg="white"
            p={{ base: 6, md: 10 }}
            h="auto"
            w={{ base: "100%", md: "100%", lg: "auto" }}
            mt={{ base: 4, lg: 16 }}
            justifyContent="center"
            gap={"0px"}
          >
            <Text
              className="animated-text"
              fontSize={{ base: "1.5rem", sm: "1.8rem", md: "2.2rem", lg: "2.5rem" }}
              fontWeight="bold"
              textAlign={{ base: "center", md: "center", lg: "left" }}
              ml={{ base: 0, lg: 4 }}
            >
              Easily add your design to a wide range of products
            </Text>

            <Text
              className="animated-text"
              fontSize={{ base: "1rem", md: "1.1rem" }}
              color="gray"
              fontWeight="400"
              textAlign={{ base: "center", md: "center", lg: "left" }}
              ml={{ base: 0, lg: 4 }}
              mt={4}
              w={{ base: "100%", lg: "80%" }}
              pl={{ base: 0, lg: 4 }}
            >
              With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
            </Text>

            <Text
              className="animated-text"
              cursor="pointer"
              color="#39b75d"
              fontWeight="bold"
              fontSize={{ base: "1rem", md: "1.1rem" }}
              textAlign={{ base: "center", md: "center", lg: "left" }}
              ml={{ base: 0, lg: 4 }}
              mt={6}
            >
              All Products →
            </Text>
          </Stack>
        </HStack>
      </Container>

      <Container maxW="70%" textAlign="center">
        <Box display={{ base: "block", lg: "none" }}>
          <Slider {...settings}>
            {slidingDetails.map((item) => (
              <SingleCard
                key={item.name}
                img={item.img}
                name={item.name}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </Slider>
        </Box>

        <HStack
          display={{ base: "none", lg: "flex" }}
          gap="50px"
          justify="center"
        >
          {slidingDetails.map((item) => (
            <SingleCard
              key={item.name}
              img={item.img}
              name={item.name}
              title={item.title}
              desc={item.desc}
              className="card" // Add class for GSAP targeting
            />
          ))}
        </HStack>
      </Container>
    </Container>
  );
};

const SingleCard = ({ img, name, title, desc }) => {
  return (
    <Stack display="flex" gap="10px" mb={12} textAlign="center" mt={24} className="card"> {/* Add class here */}
      <HStack justify="center">
        <Image src={img} h={180} alt={name} />
      </HStack>
      <HStack justify="center">
        <Text color={"#39b75d"} fontSize={"1.25rem"} fontWeight="bold">{name}</Text>
      </HStack>
      <HStack justify="center">
        <Text fontWeight="bold" fontSize={"1.4rem"}>{title}</Text>
      </HStack>
      <HStack justify="center">
        <Text color={"gray"} fontWeight={400}>{desc}</Text>
      </HStack>
    </Stack>
  );
};

export default Design;
