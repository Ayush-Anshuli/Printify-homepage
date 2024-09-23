import React, { useState } from 'react';
import {
  Container,
  HStack,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [ishoverworks, setIshoverworks] = useState(false);
  const [isHoverService, setIshoverService] = useState(false);
  const [ishoverUsecase, setIshoverUsecase] = useState(false);
  const [ishoverHelp, setIshoverHelp] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container maxW={"1400px"} mt={2} mb={2}>
        <HStack display={"flex"} justifyContent={"space-between"}>
          <IconButton
            display={{ base: "block", md: "none" }}
            icon={<HamburgerIcon />}
            onClick={onOpen}
            aria-label="Open Menu"
            variant="outline"
          />

          <HStack>
            <Image src={logo} h={10} />
          </HStack>

          
          <HStack spacing={10} display={{ base: "none", md: "flex" }}>
            <Text color={'gray'}>Catalog</Text>
            <Menu isOpen={ishoverworks}>
              <MenuButton onMouseEnter={() => setIshoverworks(true)} onMouseLeave={() => setIshoverworks(false)}>
                <Text _hover={{ cursor: "pointer" }} color={'gray'}>
                  How It works?
                </Text>
              </MenuButton>
              <MenuList onMouseEnter={() => setIshoverworks(true)} onMouseLeave={() => setIshoverworks(false)}>
                <MenuItem>How Printify Works</MenuItem>
                <MenuItem>Printify on Demand</MenuItem>
                <MenuItem>Printify Quality Promise</MenuItem>
                <MenuItem>Want to Sell</MenuItem>
              </MenuList>
            </Menu>
            <Text color={'gray'}>Pricing</Text>
            <Text color={'gray'}>Blog</Text>
            <Menu isOpen={isHoverService}>
              <MenuButton onMouseEnter={() => setIshoverService(true)} onMouseLeave={() => setIshoverService(false)}>
                <Text _hover={{ cursor: "pointer" }} color={'gray'}>
                  Services
                </Text>
              </MenuButton>
              <MenuList onMouseEnter={() => setIshoverService(true)} onMouseLeave={() => setIshoverService(false)}>
                <MenuItem>Printify Studio</MenuItem>
                <MenuItem>Printify Express Delivery</MenuItem>
                <MenuItem>Transfer Products</MenuItem>
                <MenuItem>Order In Bulk</MenuItem>
                <MenuItem>Experts Program</MenuItem>
              </MenuList>
            </Menu>
            <Menu isOpen={ishoverUsecase}>
              <MenuButton onMouseEnter={() => setIshoverUsecase(true)} onMouseLeave={() => setIshoverUsecase(false)}>
                <Text _hover={{ cursor: "pointer" }} color={'gray'}>
                  Use-cases
                </Text>
              </MenuButton>
              <MenuList onMouseEnter={() => setIshoverUsecase(true)} onMouseLeave={() => setIshoverUsecase(false)}>
                <MenuItem>Merch for Fans</MenuItem>
                <MenuItem>Merch for eCommerce</MenuItem>
                <MenuItem>Merch for Enterprises</MenuItem>
                <MenuItem>Grow your Store</MenuItem>
              </MenuList>
            </Menu>
            <Menu isOpen={ishoverHelp}>
              <MenuButton onMouseEnter={() => setIshoverHelp(true)} onMouseLeave={() => setIshoverHelp(false)}>
                <Text _hover={{ cursor: "pointer" }} color={'gray'}>
                  Need help?
                </Text>
              </MenuButton>
              <MenuList onMouseEnter={() => setIshoverHelp(true)} onMouseLeave={() => setIshoverHelp(false)}>
                <MenuItem>Help Center</MenuItem>
                <MenuItem>Contacts</MenuItem>
                <MenuItem>My Requests</MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          
          <HStack display={{ base: "none", md: "flex" }}>
            <Button>Log in</Button>
            <Button color={"white"} bg={"#39b75d"}>Sign up</Button>
          </HStack>
        </HStack>
      </Container>
      <hr />

      
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <Text>Catalog</Text>
              <Text>Pricing</Text>
              <Text>Blog</Text>
              
              
              <Accordion allowToggle width="100%">
                <AccordionItem>
                  <AccordionButton>
                    <Text flex="1" textAlign="left">
                      How It works?
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <VStack align="start">
                      <Text>How Printify Works</Text>
                      <Text>Printify on Demand</Text>
                      <Text>Printify Quality Promise</Text>
                      <Text>Want to Sell</Text>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton>
                    <Text flex="1" textAlign="left">
                      Services
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <VStack align="start">
                      <Text>Printify Studio</Text>
                      <Text>Printify Express Delivery</Text>
                      <Text>Transfer Products</Text>
                      <Text>Order In Bulk</Text>
                      <Text>Experts Program</Text>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton>
                    <Text flex="1" textAlign="left">
                      Use-cases
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <VStack align="start">
                      <Text>Merch for Fans</Text>
                      <Text>Merch for eCommerce</Text>
                      <Text>Merch for Enterprises</Text>
                      <Text>Grow your Store</Text>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton>
                    <Text flex="1" textAlign="left">
                      Need help?
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <VStack align="start">
                      <Text>Help Center</Text>
                      <Text>Contacts</Text>
                      <Text>My Requests</Text>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Button w={"full"}>Log in</Button>
              <Button w={"full"} color={"white"} bg={"#39b75d"}>Sign up</Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
