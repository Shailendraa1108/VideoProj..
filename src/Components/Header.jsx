import React from 'react'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Button, DrawerHeader, useDisclosure, VStack, HStack } from "@chakra-ui/react"
import { BiMenuAltLeft } from "react-icons/bi"
// import { Link } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function Header() {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclosure()

    return (
        <div>
            <Button
                zIndex={'overlay'}
                pos={'fixed'}
                top={'4'}
                left={'4'}
                colorScheme="purple"
                p={'0'}
                w={'10'}
                h={'10'}
                borderRadius={'full'}
                onClick={onOpen}
            >
                <BiMenuAltLeft size={"20"} />
            </Button>
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement='left'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>VEDANT AND GEETA </DrawerHeader>
                    <DrawerBody>
                        <VStack alignItems="flex-start">
                            <Button
                                variant={"ghost"}
                                colorScheme='purple'
                                onClick={onClose}>
                                <Link to={"/"}>Home </Link>

                            </Button>
                            <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                                <Link to={"/videos"}>Videos </Link>

                            </Button>
                            <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                                <Link to={"/videos?catagory=free"}>Free Videos</Link>

                            </Button>
                            <Button variant={"ghost"} colorScheme='purple' onClick={onClose}>
                                <Link to={"/upload"}>Video Upload </Link>

                            </Button>
                        </VStack>
                        <HStack
                            pos={"absolute"}
                            bottom={"10"}
                            justifyContent={"space-evenly"}
                            w={"full"}
                            left={"0"}


                        >
                            <Button colorScheme={"purple"} onClick={onClose} >
                                <Link to={"/login"}>  login</Link>
                            </Button>
                            <Button colorScheme={"purple"} variant={"outline"}>
                                <Link to={"/signup"}>  SignUp</Link>
                            </Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>



            </Drawer>


        </div>
    )
}

export default Header