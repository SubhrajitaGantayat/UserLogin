import React , {useState} from 'react'
import './login.css'

import { BsEyeFill,BsFillEyeSlashFill} from "react-icons/bs";

import { Center, Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import {
  Button,
  FormControl,
  Flex,
  Input,
  Stack,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';

function OtpVerify() {

    
    const [otp1, setOtp1data] = useState("");
    const [otp2, setOtp2data] = useState("");
    const [otp3, setOtp3data] = useState("");
    const [otp4, setOtp4data] = useState("");
    const [otp5, setOtp5data] = useState("");
    const [otp6, setOtp6data] = useState("");

    const submitHandler = (e) => {
      console.log(otp1);
      console.log(otp2);
      console.log(otp3);
      console.log(otp4);
      console.log(otp5);
      console.log(otp6);
    };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      //bg={useColorModeValue('gray.50', 'gray.800')}
      bg={'black'}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        //bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        //boxShadow={'lg'}
        background= {'linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)'}
            backdropFilter= {'blur(25px)'}
             boxShadow= {'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}
        p={6}
        my={10}>

        <Center>
          <Heading color={"white"} lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            OTP VERIFICATION
          </Heading>
        </Center>

        <Center
          fontSize={{ base: 'sm', sm: 'md' }} 
          color={"white"}>
          Enter the OTP sent to your registered email
        </Center>
       
        <FormControl color={"white"}>
          <Center>
            <HStack>
              <PinInput >
                <PinInputField value={otp1}
                  onChange={(e) => setOtp1data(e.target.value)}
                  autoComplete="off"/>
                <PinInputField value={otp2}
                  onChange={(e) => setOtp2data(e.target.value)}
                  autoComplete="off" />
                <PinInputField value={otp3}
                  onChange={(e) => setOtp3data(e.target.value)}
                  autoComplete="off"/>
                <PinInputField value={otp4}
                  onChange={(e) => setOtp4data(e.target.value)}
                  autoComplete="off"/>
                <PinInputField value={otp5}
                  onChange={(e) => setOtp5data(e.target.value)}
                  autoComplete="off"/>
                <PinInputField value={otp6}
                  onChange={(e) => setOtp6data(e.target.value)}
                  autoComplete="off"/>
              </PinInput>
            </HStack>
          </Center>
        </FormControl>

        <FormControl >
                <Text fontSize={"lg"} color={"white"} align={'center'}>
                  Time remaining 05:00 mins
                </Text>
        </FormControl>
        
        <Stack spacing={6}>
          <Button
            onClick={submitHandler}
             bg={"blackAlpha.900"}
             color={"white"}
             _hover={{
               bg: "blackAlpha.800",
            }}>
            VERIFY
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default OtpVerify
