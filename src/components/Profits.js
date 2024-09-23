import React from 'react';
import { Container, HStack, Image, Stack, Text } from "@chakra-ui/react";

const Profits = () => {
    const profits = [
        {
            id: "1",
            img: "https://printify.com/pfh/assets/legacy/higher-profits.svg",
            title: "Higher Profits",
            desc: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
        },
        {
            id: "2",
            img: "https://printify.com/pfh/assets/legacy/robust-scaling.svg",
            title: "Robust Scaling",
            desc: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
        },
        {
            id: "3",
            img: "https://printify.com/pfh/assets/legacy/best-selection.svg",
            title: "Best Selection",
            desc: "With 900+ products and top quality brands, you can choose the best products for your business."
        }
    ];

    return (
        <Container maxW={"1200px"} mt={48}>
            <HStack 
                mt={5} 
                spacing={{ base: "20px", md: "50px" }} 
                display={"flex"} 
                flexWrap="wrap" 
                justifyContent="center"
            >
                {
                    profits.map((item) => (
                        <CardDetails key={item.id} img={item.img} title={item.title} desc={item.desc} />
                    ))
                }
            </HStack>
        </Container>
    );
};

const CardDetails = ({ img, title, desc }) => {
    return (
        <Stack 
            pb={5} 
            mb={10} 
            textAlign="center" 
            width={{ base: "100%", sm: "45%", md: "30%" }} 
        >
            <Image src={img} 
                   h={{ base: "100px", md: "150px" }} 
                   w={{ base: "100px", md: "150px" }} 
                   mx="auto" 
            />
            <HStack justifyContent="center">
                <Text 
                    fontWeight={"bold"} 
                    fontSize={{ base: "1.2rem", md: "1.5rem" }} 
                    mt={5} 
                    mb={2}
                >
                    {title}
                </Text>
            </HStack>
            <HStack justifyContent="center">
                <Text 
                    fontWeight={"500"} 
                    color={"#737373"} 
                    fontSize={{ base: "0.9rem", md: "1rem" }} 
                >
                    {desc}
                </Text>
            </HStack>
        </Stack>
    );
};

export default Profits;
