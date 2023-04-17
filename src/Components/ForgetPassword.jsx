import React, {useState} from 'react'
import './login.css'
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    FormLabel,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
//   type ForgotPasswordInputs = {
//     email: string;
//   };


function ForgetPassword() {

  const [email, setEmaildata] = useState("");

  const submitHandler = (e) => {
    console.log(email);
  };

  return (
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    //bg={useColorModeValue('gray.50', 'gray.800')}
    bg={'black'}>
    <Stack
        align={'center'}
      spacing={4}
      w={'full'}
      maxW={'md'}
      //bg={useColorModeValue('white', 'gray.700')}
      rounded={'xl'}
      //boxShadow={'lg'}
      background= {'linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)'}
            backdropFilter= {'blur(25px)'}
             boxShadow= {'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}
      p={6}
      my={12}>
      <Heading color={"white"} lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
        Forgot password?
      </Heading>
      <Text
        fontSize={{ base: 'sm', sm: 'md' }}
        color={"white"}>
        No worries, we will send you reset instructions
      </Text>
      <FormControl color={"white"}  id="email">
      <FormLabel >Email address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmaildata(e.target.value)}
          autoComplete="off"
        />
      </FormControl>
      <Stack spacing={6}>
        <Button
          onClick={submitHandler}
          bg={"blackAlpha.900"}
          color={"white"}
          _hover={{
            bg: "blackAlpha.800",
          }}>
          Reset Password
        </Button>
      </Stack>
    </Stack>
  </Flex>
  )
}

export default ForgetPassword
