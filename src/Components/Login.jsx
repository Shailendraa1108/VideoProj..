import { Button, Container, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Login() {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <VStack
          alignItems={"stretch"}
          w={["full", "96"]}
          my={"16"}
          m={"auto"}
          spacing={'8'}
        >
          <Heading>Welcome Back</Heading>
          <Input placeholder='Email'
            type='email'
            required
            focusBorderColor={'purple.600'}
          />
          <Input placeholder='password'
            type='password'
            required
            focusBorderColor={'purple.600'}
          />

          <Button type='submit' colorScheme='purple'>
            <Link to="/login">login</Link>
          </Button>
          <Button type='submit' color={"purple"} background={"white"} alignSelf={"flex-end"}>
            <Link to="/forgetpassword">Forget password</Link>
          </Button>
          <Text textAlign={"right"}>
            New User...
            <Button type='submit' color={"purple"}  background={"white"}>
              <Link to="/signup"> SignUp</Link>
            </Button>
          </Text>

        </VStack>
      </form>
    </Container>
  )
}

export default Login