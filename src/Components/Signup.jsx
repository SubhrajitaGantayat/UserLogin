import React from 'react'

import './login.css'

import { FcGoogle } from "react-icons/fc";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Checkbox,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';


function Signup() {

    //for eyebutton of password
    const [passward, setPassward] = useState("");
    const [show, setShow] = useState(false);
    //for eye button of confirm password
    const [confirmpassward, setConfirmPassward] = useState("");
    const [show1, setShow1] = useState(false);
     
    
    // const [userArr, setuserArr] = useState([]);
    // const [username, setUserdata] = useState("");
    // const [email, setEmaildata] = useState("");
    // const [phonenumber, setPhdata] = useState("");
    // const [pass, setPassData] = useState("");
    // const [confirmpass, setConData] = useState("");

    // const submitHandler = (e) => {
    //     e.preventDefault();
        
    //     if ((username, email, phonenumber, pass, confirmpass)) {
    //     if (pass === confirmpass) {
    //         setuserArr([
    //         ...userArr,
    //         {
    //             username: username,
    //             email: email,
    //             phonenumber: phonenumber,
    //             pass: pass,
    //             confirmpass : confirmpass
    //         },
    //         ]);
    //         alert("User Account Created");
    //     } else {
    //         alert("Please Re confirm password");
    //     }
    //     } else {
    //     alert("Please Fill in all the details");
    //     }
    // };
    // localStorage.setItem("users", JSON.stringify(userArr));
    

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      //bg={useColorModeValue('gray.50', 'gray.800')}
      bg={'black'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
       
        <Box
          rounded={'lg'}
          //bg={useColorModeValue('white', 'gray.700')}
          //boxShadow={'lg'}
             background= {'linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)'}
            backdropFilter= {'blur(25px)'}
             boxShadow= {'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}
          p={8}>
          <Stack spacing={4}>
          <Stack align={'center'}>
          <Heading color={"white"} fontSize={'4xl'} textAlign={'center'}>
            CREATE ACCOUNT
          </Heading>
        </Stack>
          <FormControl align={'center'}>
              <Button >
                <span>
                  <FcGoogle />
                </span>
                <Text fontSize={"lg"} color={"gray.600"}>
                  Sign in with google account
                </Text>
              </Button>
            </FormControl>

            <FormLabel >
            <Text fontSize={"lg"} color={"white"} align={'center'}>
                  OR
                </Text>
            </FormLabel>
           
            <FormControl color={"white"} id="firstName" isRequired>
                <FormLabel>Full Name</FormLabel>
                  <Input type="text" autoComplete="off"  
                  // value={username} onChange={(e) => setUserdata(e.target.value)} 
                  />
            </FormControl> 
           
            <FormControl color={"white"} id="email" isRequired>
              <FormLabel>Email </FormLabel>
              <Input type="email" autoComplete="off" 
              // value={email} onChange={(e) => setEmaildata(e.target.value)}
              />
            </FormControl>

            <FormControl color={"white"} id="phonenumber" isRequired>
              <FormLabel>Phone Number </FormLabel>
              <Input type="tel" autoComplete="off" 
              // value={phonenumber} onChange={(e) => setPhdata(e.target.value)}
              />
            </FormControl>

            <div className="login_password_div">
            <FormControl color={"white"} id="password" isRequired>
              <FormLabel >Password</FormLabel>
              <Input type={ show ? "passward" : "text" } onChange={ (e) => setPassward(e.target.value) } autoComplete="off" 
              //value={pass} onChange={(e) => setPassData(e.target.value)}
              />
              <span className="signup_eye" onClick={ () => setShow(!show)}>
                { show ?  <BsFillEyeSlashFill /> : <BsEyeFill /> }
              </span>
            </FormControl>
            </div>

            <div className="login_password_div">
            <FormControl color={"white"} id="confirmpassword" isRequired>
              <FormLabel >Confirm Password</FormLabel>
              <Input type={ show1 ? "text" : "confirmpassward" } onChange={ (e) => setConfirmPassward(e.target.value) } autoComplete="off"
               //value={confirmpass} onChange={(e) => setConData(e.target.value)}
               />
              <span className="signup_eye" onClick={ () => setShow1(!show1)}>
                { show1 ?  <BsFillEyeSlashFill /> : <BsEyeFill /> }
              </span>
            </FormControl>
            </div>
            
            <Stack spacing={10} pt={2}>
                <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
                >
                 <Checkbox color={"white"}>
                  By agreeing you agree with our
                  <span style={{ color: "blue" }}> Terms & Condition</span>
                </Checkbox>
                </Stack>
                <Button 
                // onClick={submitHandler}
                loadingText="Submitting"
                bg={"blackAlpha.900"}
                color={"white"}
                _hover={{
                  bg: "blackAlpha.800",
                }}>
                Create Account
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text color={"white"} align={'center'}>
                Already have an account? <Link color={'blue'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Signup
