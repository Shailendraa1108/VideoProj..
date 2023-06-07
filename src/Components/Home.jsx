// import { Box, Heading, Image } from '@chakra-ui/react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/game1.jpg';
import img2 from '../assets/game2.jpg';



const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };


const Home=() =>{
    return (
        <Box>
            <MyCarousel />
            <Container maxW={"container.xl"} maxH={"100vh"} p="16">
                <Heading
                textTransform="uppercase"
                py={"2"}
                w={"fit-content"}
                borderBottom={"2px solid"}
                m={"auto"}
                

                >
                    Service
                </Heading>
                <Stack
                h={"full"}
                p={"4"}
                alignItems={"center"}
                direction={["column","row"]}
                >
                    <Image src={img1} h={["40","400"]} 
                    filter={"hue-rotate(-130deg)"}
                     borderRadius={"50%"} />
 
               
                <Text letterSpacing={"widest"} lineHeigth={"190%"}  p={["4","16"]}  textAlign={"center"}>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                 It has roots in a piece of classical Latin literature from 45 BC, 
                 making it over 2000 years old. Richard McClintock, a Latin professor
                  at Hampden-Sydney College in Virginia, looked up one of the more obscure
                   Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                   the cites of the word in classical literature, discovered the undoubtable
                    source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibu
                    s Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written 
                    in 45 BC. This book is a treatise on the theory of ethics, very popular 
                    during the Renaissance. The first line of Lorem Ipsum, 
                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32

                </Text>
              

                </Stack>
                
            </Container>
          
           
        </Box>

    )

}


const MyCarousel = () => (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          Future is Gaming
        </Heading>
      </Box>
  
      <Box w="full" h={'100vh'}>
        <Image src={img1} h="full" w={'full'} objectFit={'cover'}  />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>
  
      <Box w="full" h={'100vh'}>
        <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Night life is cool
        </Heading>
      </Box>
    </Carousel>
  );
  
  export default Home;