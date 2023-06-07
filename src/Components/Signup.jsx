import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <Container maxW={'container.xl'} h={"100vh"} p={"16"}>
        <form >
            
<VStack 
spacing={"8"}
alignItems={"stretch"}
w={["full", "96"]}
m={"auto"}
my={"16"}
>
    <Heading alignSelf={"center"}>VIDEO HUB</Heading>
    <Avatar boxSize={"30"} alignSelf={"center"}/>
<Input
type='text'
placeholder='Name'
required
focusBorderColor='purple.500'

/>
<Input
type='email'
placeholder='Enter your mail'
required
focusBorderColor='purple.500'

/>
<Input
type='password'
placeholder='password'
required
focusBorderColor='purple.500'

/>
<Button colorScheme='purple' w={"full"}>SignUp</Button>
<Text textAlign={"right"}>
   Already Signed Up...{""}
    <Button background={"white"} color={"purple.600"}
    variant={"link"}
    type='submit'
    >Login</Button>
</Text>
</VStack>
        </form>

    </Container>
//     <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
//     <form>
//       <VStack
//         alignItems={'stretch'}
//         spacing={'8'}
//         w={['full', '96']}
//         m={'auto'}
//         my={'16'}
//       >
//         <Heading>VIDEO HUB</Heading>
//         <Avatar alignSelf={'center'} boxSize={'32'} />

//         <Input
//           placeholder={'Name'}
//           type={'text'}
//           required
//           focusBorderColor={'purple.500'}
//         />
//         <Input
//           placeholder={'Email'}
//           type={'email'}
//           required
//           focusBorderColor={'purple.500'}
//         />
//         <Input
//           placeholder={'Password'}
//           type={'password'}
//           required
//           focusBorderColor={'purple.500'}
//         />

//         <Button colorScheme={'purple'} type={'submit'}>
//           Sign Up
//         </Button>

//         <Text textAlign={'right'}>
//           Already Signed Up?{' '}
//           <Button variant={'link'} colorScheme={'purple'}>
//             <Link to={'/login'}>Login In</Link>
//           </Button>
//         </Text>
//       </VStack>
//     </form>
//   </Container>
  )
}

export default Signup