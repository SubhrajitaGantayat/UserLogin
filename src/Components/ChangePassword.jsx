import React, {useState} from 'react'

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

function ChangePassword() {

    //for eyebutton of oldpassword
    const [oldpassward, setOldPassward] = useState("");
    const [show1, setShow1] = useState(false);
     //for eyebutton of newpassword
     const [newpassward, setNewPassward] = useState("");
     const [show2, setShow2] = useState(false);
    //for eye button of confirm password
    const [confirmpassward, setConfirmPassward] = useState("");
    const [show3, setShow3] = useState(false);


    // const [oldpwd, setPassdata] = useState("");
    // const [newpwd, setNewdata] = useState("");
    // const [confirmpwd, setCondata] = useState("");

    // const submitHandler = (e) => {
    //   console.log(oldpwd);
    //   console.log(newpwd);
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
        CHANGE PASSWORD
      </Heading>

      <div className="login_password_div">
          <FormControl color={"white"} id="password" isRequired>
            <FormLabel >Old Password</FormLabel>
            <Input type={ show1 ? "text" : "oldpassward" } onChange={ (e) => setOldPassward(e.target.value) } autoComplete="off" 
            // value={oldpwd}
            // onChange={(e) => setPassdata(e.target.value)}
            />
            <span className="signup_eye" onClick={ () => setShow1(!show1)}>
              { show1 ?  <BsFillEyeSlashFill /> : <BsEyeFill /> }
            </span>
          </FormControl>
          </div>

      <div className="login_password_div">
          <FormControl color={"white"} id="password" isRequired>
            <FormLabel >New Password</FormLabel>
            <Input type={ show2 ? "text" : "newpassward" } onChange={ (e) => setNewPassward(e.target.value) } autoComplete="off" 
            // value={newpwd}
            // onChange={(e) => setNewdata(e.target.value)}
            />
            <span className="signup_eye" onClick={ () => setShow2(!show2)}>
              { show2 ?  <BsFillEyeSlashFill /> : <BsEyeFill /> }
            </span>
          </FormControl>
          </div>

          <div className="login_password_div">
          <FormControl color={"white"} id="confirmpassword" isRequired>
            <FormLabel >Confirm Password</FormLabel>
            <Input type={ show3 ? "text" : "confirmpassward" } onChange={ (e) => setConfirmPassward(e.target.value) } autoComplete="off"
            //  value={confirmpwd}
            //  onChange={(e) => setCondata(e.target.value)}
             />
            <span className="signup_eye" onClick={ () => setShow3(!show3)}>
              { show3 ?  <BsFillEyeSlashFill /> : <BsEyeFill /> }
            </span>
          </FormControl>
          </div>

      <Stack spacing={6}>
        <Button
        //  onClick={submitHandler}
         bg={"blackAlpha.900"}
         color={"white"}
         _hover={{
           bg: "blackAlpha.800",
          }}>
          CHANGE PASSWORD
        </Button>
      </Stack>
    </Stack>
  </Flex>
  )
}

export default ChangePassword
