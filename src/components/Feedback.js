import { Container, HStack, Image, Stack, Text, IconButton, Box, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import char1 from "../assets/char1.png";
import char2 from "../assets/char2.jpeg";
import char3 from "../assets/char3.png";
import char4 from "../assets/char4.png";
import stars from "../assets/stars.png";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Feedback = () => {
    const slidCrawsel = [
        {
            img: char1,
            title: "Robert A. Voltaire",
            name: "Store link",
            stars: stars,
            desc: "Printify has been an incredible service for us musicians unable to keep large amounts of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!"
        },
        {
            img: char2,
            title: "Quinten Barney",
            name: "Etsy Merchant",
            stars: stars,
            desc: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top-notch, and their platform just keeps getting better and better."
        },
        {
            img: char3,
            title: "Nikki",
            name: "Store link",
            stars: stars,
            desc: "Printify has been an amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze."
        },
        {
            img: char4,
            title: "Spencer, Brett, and Kyle",
            name: "Store link",
            stars: stars,
            desc: "Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly."
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    // GSAP Animation Refs
    const textLeftRef = useRef(null);
    const textRightRef = useRef(null);
    const carouselRef = useRef(null); // New ref for the whole carousel

    useEffect(() => {
        // Animate both texts: one from left, one from right on scroll
        gsap.fromTo(
            textLeftRef.current,
            { opacity: 0, x: -100 }, // Start from the left
            {
                opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
                scrollTrigger: {
                    trigger: textLeftRef.current, // Trigger animation when this element enters the viewport
                    start: "top 80%", // Adjust based on when you want the animation to start
                    toggleActions: "play none none none"
                }
            }
        );

        gsap.fromTo(
            textRightRef.current,
            { opacity: 0, x: 100 }, // Start from the right
            {
                opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.3,
                scrollTrigger: {
                    trigger: textRightRef.current,
                    start: "top 80%", // Start the animation when the top of the element hits 80% of the viewport height
                    toggleActions: "play none none none"
                }
            }
        );

        // Animate the whole carousel from the bottom when it scrolls into view
        gsap.fromTo(
            carouselRef.current,
            { opacity: 0, y: 100 }, // Start from below the viewport
            {
                opacity: 1, y: 0, duration: 1.5, ease: "power3.out",
                scrollTrigger: {
                    trigger: carouselRef.current, // Trigger animation when the carousel enters the viewport
                    start: "top 85%", // Start when the top of the carousel hits 85% of the viewport
                    toggleActions: "play none none none"
                }
            }
        );
    }, []);

    return (
        <Container maxW={"100%"} bg={"#f7f7f7"} mb={10} mt={"150px"}>
            <Container maxW={"container.xl"} mb={12}>
                <HStack display={"flex"} gap={"50px"} mb={12} flexDirection={["column", "row"]}>
                    {/* Left Text - From Left Animation */}
                    <HStack mt={["50px", "100px", "150px"]} ref={textLeftRef}>
                        <Text fontSize={["2xl", "1.5rem", "2.5rem"]} mt={12} fontWeight={"bold"} textAlign={["center", "left"]}>
                            Trusted by over 8M sellers around the world
                        </Text>
                    </HStack>

                    {/* Right Text - From Right Animation */}
                    <HStack mt={["20px", "50px", "150px"]} ref={textRightRef}>
                        <Text p={5} w={["100%", "400px"]} color={"gray"} fontWeight={"bold"} textAlign={["center", "left"]}>
                            Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
                        </Text>
                    </HStack>
                </HStack>

                {/* Carousel section - Apply animation on scroll */}
                <Box ref={carouselRef}>
                    <Slider {...settings}>
                        {slidCrawsel.map((item) => (
                            <CardDetails key={item.title} img={item.img} title={item.title} name={item.name} stars={item.stars} desc={item.desc} />
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Container>
    );
}

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon />}
            onClick={onClick}
            position="absolute"
            right="20px"
            top="90%"
            transform="translateY(-50%)"
            bg="white"
            borderRadius="50%"
            boxShadow="md"
            zIndex="1"
        />
    );
}

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <IconButton
            aria-label="Previous"
            icon={<ChevronLeftIcon />}
            onClick={onClick}
            position="absolute"
            left="10px"
            top="90%"
            transform="translateY(-50%)"
            bg="white"
            borderRadius="50%"
            boxShadow="md"
            zIndex="1"
        />
    );
}

const CardDetails = ({ img, title, name, stars, desc }) => {
    return (
        <Box
            p={[4, 8, 10]}
            mb={12}
            borderRadius="md"
            boxShadow="lg"
            bg="white"
            transition="0.2s"
            _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
        >
            <Flex align="center" direction={["column", "row"]} textAlign={["center", "left"]}>
                <Image src={img} h={100} w={100} borderRadius="full" mr={[0, 4]} mb={[4, 0]} />
                <Stack spacing={1}>
                    <Text fontWeight={"bold"} fontSize={["lg", "xl", "1.5rem"]}>{title}</Text>
                    <Text color={"#39b75d"}>{name}</Text>
                    <HStack justify={["center", "left"]}>
                        {Array(4).fill("").map((_, index) => (
                            <Image key={index} h={5} w={5} src={stars} />
                        ))}
                    </HStack>
                </Stack>
            </Flex>
            <Text fontWeight={"bold"} color={"gray"} mt={4} fontSize={["sm", "md", "lg"]}>{desc}</Text>
        </Box>
    );
}

export default Feedback;
