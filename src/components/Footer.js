import React from 'react';
import { Center, Container, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import twit from "../assets/twit.png";
import face from "../assets/face.png";
import linkdin from "../assets/linkdin.png";
import insta from "../assets/insta.png";

const Footer = () => {
  return (
    <>
      <Container maxW={"container.xl"} py={4}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4} m={2} mb={8}>
          <GridItem>
            <Image src={logo} h={10} mx={{ base: "auto", md: "0" }} />
          </GridItem>

          <GridItem>
            <HStack justifyContent={{ base: "center", md: "flex-end" }} spacing={4}>
              <Image cursor={"pointer"} src={insta} h={8} w={8} />
              <Image cursor={"pointer"} src={face} h={8} w={8} />
              <Image cursor={"pointer"} src={twit} h={8} w={8} />
              <Image cursor={"pointer"} src={linkdin} h={8} w={8} />
            </HStack>
          </GridItem>
        </Grid>

        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={8}
          mt={8}
        >
          <GridItem>
            <VStack alignItems={"flex-start"} spacing={2}>
              <Text color={"black"} fontWeight={"bold"}>
                Integrations
              </Text>
              <VStack alignItems={"flex-start"} spacing={1}>
                <Text>Shopify</Text>
                <Text>Etsy</Text>
                <Text>eBay</Text>
                <Text>TikTok Shop</Text>
                <Text>PrestaShop</Text>
                <Text>BigCommerce</Text>
                <Text>Wix</Text>
                <Text>WooCommerce</Text>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack alignItems={"flex-start"} spacing={2}>
              <Text color={"black"} fontWeight={"bold"}>
                Discover
              </Text>
              <VStack alignItems={"flex-start"} spacing={1}>
                <Text>Blog</Text>
                <Text>Guides</Text>
                <Text>Products</Text>
                <Text>Shopify print-on-demand</Text>
                <Text>Woocommerce print-on-demand</Text>
                <Text>Wix print-on-demand</Text>
                <Text>Squarespace print-on-demand</Text>
                <Text>Make Your Own Shirt</Text>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack alignItems={"flex-start"} spacing={2}>
              <Text color={"black"} fontWeight={"bold"}>
                Start selling
              </Text>
              <VStack alignItems={"flex-start"} spacing={1}>
                <Text>Custom T-shirts</Text>
                <Text>Custom Hoodies</Text>
                <Text>Custom Mugs</Text>
                <Text>Custom Socks</Text>
                <Text>Custom Backpacks</Text>
                <Text>Custom Branding</Text>
                <Text>Sell on Social Media</Text>
                <Text>Free T-shirt Designs</Text>
              </VStack>
            </VStack>
          </GridItem>

          <GridItem>
            <VStack alignItems={"flex-start"} spacing={2}>
              <Text color={"black"} fontWeight={"bold"}>
                Printify
              </Text>
              <VStack alignItems={["flex-start"]} spacing={1}>
                <Text>Print on Demand</Text>
                <Text>Print Providers</Text>
                <Text>Printify Express Delivery</Text>
                <Text>Become a Partner</Text>
                <Text>About</Text>
                <Text>Printify Quality Promise</Text>
                <Text>Jobs</Text>
                <Text>Webinars</Text>
              </VStack>
            </VStack>
          </GridItem>
        </Grid>
      </Container>

      <Container maxW={"100%"} bg={"#f7f7f7"} color={"gray"} p={6} mt={16}>
        <Center>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
            gap={4}
            mb={4}
            fontSize={"0.95rem"}
          >
            <Text textAlign={"center"}>Intellectual Property Policy</Text>
            <Text textAlign={"center"}>Terms of Service</Text>
            <Text textAlign={"center"}>Privacy Policy</Text>
            <Text textAlign={"center"}>Security</Text>
          </Grid>
        </Center>

        <Center>
          <Text fontSize={"0.85rem"} color={"black"}>
            © 2024 Printify, Inc. All rights reserved.
          </Text>
        </Center>
      </Container>
    </>
  );
};

export default Footer;
