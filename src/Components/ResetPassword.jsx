import React , {useState} from 'react'
import './login.css'
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';

function ResetPassword() {

    //for eyebutton of password
    const [passward, setPassward] = useState("");
    const [show, setShow] = useState(false);
    //for eye button of confirm password
    const [confirmpassward, setConfirmPassward] = useState("");
    const [show1, setShow1] = useState(false);


    // const [pwd, setPassdata] = useState("");
    // const [confirmpwd, setCondata] = useState("");
    // const submitHandler = (e) => {
    //   console.log(pwd);
    //   console.log(confirmpwd);
    // };


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
          RESET PASSWORD
        </Heading>

        <div className="login_password_div">
            <FormControl color={"white"} id="password" isRequired>
              <FormLabel >Password</FormLabel>
              <Input type={ show ? "text" : "passward" } onChange={ (e) => setPassward(e.target.value) } autoComplete="off" 
              // value={pwd}
              // onChange={(e) => setPassdata(e.target.value)}
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
              //  value={confirmpwd}
              //  onChange={(e) => setCondata(e.target.value)}
               />
              <span className="signup_eye" onClick={ () => setShow1(!show1)}>
                { show1 ?  <BsFillEyeSlashFill /> : <BsEyeFill /> }
              </span>
            </FormControl>
            </div>
        <Stack spacing={6}>
          <Button
          //onClick={submitHandler}
           bg={"blackAlpha.900"}
           color={"white"}
           _hover={{
             bg: "blackAlpha.800",
            }}>
            RESET PASSWORD
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default ResetPassword
