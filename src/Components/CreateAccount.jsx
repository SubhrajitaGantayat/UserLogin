import React from "react";
//import { useNavigate } from "react-router-dom";
import "./login.css";
import { FcGoogle } from "react-icons/fc";
import { useToast } from "@chakra-ui/react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Checkbox,
  Heading,
  Text,
  Link,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { PasswordField } from "./passwordfield";

const data = JSON.parse(localStorage.getItem("users")) || [];

function Signup() {
  //const navigate = useNavigate();
  const toast = useToast();
  const [password, setPassword] = useState("");
  const [confirmpassward, setConfirmPassward] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmaildata] = useState("");
  const [phonenumber, setPhdata] = useState("");
  const [checkbox, setcheckbox] = useState(false);

  let passwordpattern = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

  const handleCheckbox = () => {
    setcheckbox(!checkbox);
  };

  const handleLogin = () => {
    //  navigate("/login");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    

    if (
      email === "" &&
      password === "" &&
      userName === "" &&
      phonenumber === "" &&
      confirmpassward === ""
    ) {
      toast({
        title: "Please Fill in the details",
        description: "",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    } else {
      //username validation
      if (userName === "") {
        toast({
          title: "Please enter username",
          description: "",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        return;
      }
      //email validation
      if (email === "") {
        if (!email) {
          toast({
            title: "Please enter email id",
            description: "",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          return;
        }
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        toast({
          title: "Invalid Email Address",
          description: "",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        return;
      }
      //phone number validation
      if (phonenumber === "") {
        if (!"phonenumber") {
          toast({
            title: "Please enter the phonenumber",
            description: "",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          return;
        }
      } else if (phonenumber.length !== 10) {
        toast({
          title: "Please enter valid Mobile Number",
          description: "",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        return;
      }
      //password validation
      if (password === "") {
          toast({
            title: "Please enter your password",
            description: "",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          return;
      } 
      
      // if (!passwordpattern.test(password)) {
      //   toast({
      //     title:
      //       "Please Enter a password with atleast One Uppercase letter,One Lowercase Letter,One numeric and one special character",
      //     description: "",
      //     status: "warning",
      //     duration: 3000,
      //     isClosable: true,
      //     position: "top",
      //   });
      //   return;
      // }
      if (confirmpassward === "") {
        toast({
          title: "Please Fill in Confirm Password.",
          description: "",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        return;
      }
      if (password !== confirmpassward) {
        toast({
          title: "Passwords are not matching",
          description: "",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        return;
      }
      if (checkbox === false) {
        toast({
          title: "Please tick the checkbox",
          description: "",
          status: "warning",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        return;
      }
    }
    if (
      userName &&
      email &&
      phonenumber &&
      password &&
      confirmpassward &&
      password === confirmpassward
    ) {
      const obj = {
        token: Date.now(),
        username: userName,
        email: email,
        phonenumber: phonenumber,
        pass: password,
        confirmpass: confirmpassward,
      };
      data.push(obj);
      localStorage.setItem("users", JSON.stringify(data));
      localStorage.setItem("token", data[0].token);
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      // navigate("/login");
    }
  };
  console.log(password);
  return (
    // <Flex align={"center"} justify={"center"} pt="2%">
    //   <Stack>
    //     <Box
    //       rounded={"lg"}
    //       boxShadow={
    //         "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    //       }
    //       p="2%"

    //     >
    //       <Stack>
    //         <Stack align={"center"}>
    //           <Heading
    //             bgGradient="linear(to-l, #7928CA, #FF0080)"
    //             bgClip="text"
    //             fontSize={"4xl"}
    //             fontWeight={"bold"}
    //           >
    //             CREATE ACCOUNT
    //           </Heading>
    //         </Stack>
    //         <FormControl align={"center"}>
    //           <Button>
    //             <span>
    //               <FcGoogle />
    //             </span>
    //             <Text color="black" fontSize={"lg"}>
    //               Sign in with google account
    //             </Text>
    //           </Button>
    //         </FormControl>

    //         <FormLabel>
    //           <Text color="black" fontSize={"lg"} align={"center"}>
    //             or
    //           </Text>
    //         </FormLabel>

    //         <FormControl id="firstName" isRequired>
    //           <Input
    //             borderColor="grey"
    //             value={userName}
    //             onChange={(e) => setUserName(e.target.value)}
    //             type="text"
    //             autoComplete="off"
    //           />
    //         </FormControl>

    //         <FormControl id="email" isRequired>
    //           <Input
    //             borderColor="grey"
    //             value={email}
    //             onChange={(e) => setEmaildata(e.target.value)}
    //             type="email"
    //             autoComplete="off"
    //           />
    //         </FormControl>

    //         <FormControl id="phonenumber" isRequired>
    //           <Input
    //             borderColor="grey"
    //             value={phonenumber}
    //             onChange={(e) => setPhdata(e.target.value)}
    //             type="tel"
    //             autoComplete="off"
    //           />
    //         </FormControl>

    //         <div className="login_password_div">
    //           <FormControl id="password" isRequired>
    //             <InputGroup>
    //               <Input
    //                 borderColor="grey"
    //                 value={passward}
    //                 onChange={(e) => setPassward(e.target.value)}
    //                 type={shownewPassword ? "text" : "password"}
    //               />
    //               <InputRightElement h={"full"}>
    //                 <Button
    //                   variant={"ghost"}
    //                   onClick={() =>
    //                     setShownewPassword((showPassword) => !showPassword)
    //                   }
    //                 >
    //                   {shownewPassword ? <ViewIcon /> : <ViewOffIcon />}
    //                 </Button>
    //               </InputRightElement>
    //             </InputGroup>
    //           </FormControl>
    //         </div>

    //         <div className="login_password_div">
    //           <FormControl id="password" isRequired>
    //             <InputGroup>
    //               <Input
    //                 color="black"
    //                 borderColor="grey"
    //                 value={confirmpassward}
    //                 onChange={(e) => setConfirmPassward(e.target.value)}
    //                 type={showconfirmPassword ? "text" : "password"}
    //               />
    //               <InputRightElement h={"full"}>
    //                 <Button
    //                   variant={"ghost"}
    //                   onClick={() =>
    //                     setShowconfirmPassword((showPassword) => !showPassword)
    //                   }
    //                 >
    //                   {showconfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
    //                 </Button>
    //               </InputRightElement>
    //             </InputGroup>
    //           </FormControl>
    //         </div>

    //         <Stack>
    //           <Stack
    //             direction={{ base: "column", sm: "row" }}
    //             align={"start"}
    //             justify={"space-between"}
    //           >
    //             <Checkbox color="black" borderColor="grey" size="sm">
    //               By agreeing you agree with our
    //               <span style={{ color: "blue" }}> Terms & Condition</span>
    //             </Checkbox>
    //           </Stack>
    //           <Button
    //             onClick={submitHandler}
    //             size="sm"
    //             bgColor="black"
    //             color="white"
    //             borderRadius="30px"
    //             transition={"all ease-in-out 100ms"}
    //             _hover={{ backgroundColor: "black", transform: "scale(1.05)" }}
    //           >
    //             Create Account
    //           </Button>
    //         </Stack>

    //         <Stack>
    //           <Text color="black" align={"center"}>
    //             Already have an account?{" "}
    //             <Link color={"blue"} onClick={handleLogin}>
    //               Login
    //             </Link>
    //           </Text>
    //         </Stack>
    //       </Stack>
    //     </Box>
    //   </Stack>
    // </Flex>
    <Flex align={"center"} justifyContent={"center"} h="100vh">
      <Box>
        <VStack
          w="100%"
          textAlign={"center"}
          m="auto"
          rounded={"lg"}
          boxShadow={
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
          }
          p="2%"
        >
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize={"4xl"}
            fontWeight={"bold"}
          >
            CREATE ACCOUNT
          </Heading>
          <FormControl align={"center"}>
            <Button>
              <span>
                <FcGoogle />
              </span>
              <Text ml="3%" color="black" fontSize={"xs"}>
                Sign in with google account
              </Text>
            </Button>
          </FormControl>
          <Text color="black" fontSize={"sm"} align={"center"}>
            or
          </Text>
          <VStack spacing={3}>
            <FormControl id="firstName" isRequired>
              <Input
                w="75%"
                size="sm"
                placeholder="Full Name"
                borderColor="grey"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                autoComplete="off"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <Input
                w="75%"
                size="sm"
                placeholder="Email"
                borderColor="grey"
                value={email}
                onChange={(e) => setEmaildata(e.target.value)}
                type="email"
                autoComplete="off"
              />
            </FormControl>
            <FormControl id="phonenumber" isRequired>
              <Input
                w="75%"
                size="sm"
                placeholder="Phone Number"
                borderColor="grey"
                value={phonenumber}
                onChange={(e) => setPhdata(e.target.value)}
                type="number"
                autoComplete="off"
              />
            </FormControl>
            <PasswordField
              id="passward"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <PasswordField
              id="confirmpassward"
              value={confirmpassward}
              onChange={(e) => setConfirmPassward(e.target.value)}
              placeholder="Confirm Password"
            />
            <Flex
              justifyContent={"space-between"}
              w="75%"
              m="auto"
              mt="2%"
              mb="2%"
            >
              <Checkbox
                color="black"
                borderColor="grey"
                size="sm"
                value={checkbox}
                onChange={handleCheckbox}
              >
                By agreeing you agree with our{" "}
                <Link color="blue" href="/termsandconditions">
                  Terms and Conditions
                </Link>
              </Checkbox>
            </Flex>
          </VStack>
          <Button
            onClick={submitHandler}
            size="sm"
            w="75%"
            bgColor="black"
            color="white"
            borderRadius="30px"
            transition={"all ease-in-out 100ms"}
            _hover={{ backgroundColor: "black", transform: "scale(1.05)" }}
          >
            Create Account
          </Button>
          <Text color="black" align={"center"} fontSize="sm" mt="2%">
            Already have an account?
            <Link color={"blue"} href="/login">
              Login
            </Link>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
}

export default Signup;
