import React, { useState } from "react";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast ,
} from "@chakra-ui/react";

function Login() {

  //eye button for password
  const [password, setPassward] = useState("");
  const [show, setShow] = useState(false);

  //for toast
  
  // const [email, setEmaildata] = useState("");
  // const [pass, setPassdata] = useState("");
  // const data = JSON.parse(localStorage.getItem("users"));

  // const toast = useToast();

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   let flag = 0;
  //   console.log(typeof data);
  //   data.map((el) => {
  //     if (email === el.email && pass === el.pass) {
  //       alert("logged in");
  //       toast({
  //         title: "Account created.",
  //         description: "We've created your account for you.",
  //         status: "success",
  //         duration: 3000,
  //         isClosable: true,
  //       });
  //     } else {
  //       flag = 1;
  //     }
  //   });
  //   if (flag === 1) {
  //     toast({
  //       title: "Account created.",
  //       description: "We've created your account for you.",
  //       status: "error",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   }

  return (
    //<div className="login_parent_div">
    //  <div className="login_first_child" >
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
     //bg={useColorModeValue("gray.50", "gray.800")}
     bg={'black'}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
           //bg={useColorModeValue("white", "gray.700")}
           //boxShadow={"lg"}
           background= {'linear-gradient(90deg, rgba(254, 254, 254, 0.56) 1.09%, rgba(255, 255, 255, 0.16) 100%)'}
            backdropFilter= {'blur(25px)'}
             boxShadow= {'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'}
          p={8}
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} 
            color={"white"}
            >
              LOGIN
            </Heading>
            <Text fontSize={"lg"} 
            color={"white"}
            >
              Log in and start managing your profile
            </Text>
          </Stack>

          <br/>

          <Stack spacing={4}>
            <FormControl align={"center"}>
              <Button>
                <span>
                  <FcGoogle />
                </span>
                <Text fontSize={"lg"} color={"gray.600"}>
                  Log in with google account
                </Text>
              </Button>
            </FormControl>

            <FormLabel >
            <Text fontSize={"lg"} color={"white"} align={'center'}>
                  OR
                </Text>
            </FormLabel>

            <FormControl color={"white"} id="email" isRequired>
              <FormLabel >Email address</FormLabel>
              <Input type="email"  autoComplete="off" 
              // value={email}
              // onChange={(e) => setEmaildata(e.target.value)}
              />
            </FormControl>

            <div className="login_password_div">
              <FormControl color={"white"} id="password" isRequired>
                <FormLabel >Password</FormLabel>
                <Input
                  type={show ? "text" : "password"}
                  onChange={(e) => setPassward(e.target.value)}
                  autoComplete="off"
                  // value={password}
                  // onChange={(e) => setPassdata(e.target.value)}
                />
                <span className="login_eye" onClick={() => setShow(!show)}>
                  {show ? <BsFillEyeSlashFill /> : <BsEyeFill />}
                </span>
              </FormControl>
            </div>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox color={"white"}>Remember me</Checkbox>
                <Link color={"blue"}>Forgot password?</Link>
              </Stack>
              <Button
                // onClick={submitHandler}
                bg={"blackAlpha.900"}
                color={"white"}
                _hover={{
                  bg: "blackAlpha.800",
                }}
              >
                Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text color={"white"} align={'center'}>
                Don't have an account? <Link color={'blue'}>Create Account</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    //</div>
    //</div>
  );
}

export default Login;
