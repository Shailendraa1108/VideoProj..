import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

function Upload() {
  return (
    <Container
    maxW={"container.xl"}
    h={"100vh"}
    p={"16"}
    >
      <VStack
      color={"purple.500"}
      justifyContent={"center"}
      h={"full"}
     
      >
<AiOutlineCloudUpload size={"10vmax"}/>
<form>
  <HStack>
    <Input
    type='file'
   
    required
    css={{
      "&::file-selector-button":{
        border:"none",
        background:"white",
        width:"calc(100% + 36px)",
        marginLeft:"-10px",
        marginTop:"1%",
        cursor:"pointer",
        color:"purple"
      }


      
    }}
    />
    <Button colorScheme='purple' type='submit'>Upload</Button>
  </HStack>
</form>
      </VStack>
    </Container>
  )
}

export default Upload