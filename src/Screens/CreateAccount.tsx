import React from "react";
import {
  Box,
  Heading,
  HStack,
  VStack,
  Text,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Input,
  Checkbox,
  Pressable,
  KeyboardAvoidingView,
} from "native-base";
import { Platform } from "react-native";

export default function CreateAccount({ navigation }: any) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      h="full"
      w="full"
      bg="white"
    >
      <VStack h="3/6">
        <Box mt={16} p={3} alignItems="flex-start" justifyContent="flex-start">
          <Heading fontSize="3xl">Create Your Account</Heading>
          <Text mt={1} fontSize="md" color="gray.500">
            Get closer to your finances 😎
          </Text>
        </Box>
        <VStack p={3} mt={4}>
          <Text fontSize="md" fontWeight="bold" color="black" mb={2}>
            Enter phone number
          </Text>
          <Input
            mt={2}
            placeholder="(+234) 811 792 4196"
            borderWidth={0.5}
            placeholderTextColor="gray.400"
            bg="gray.100"
            borderColor="gray.100"
            _focus={{ bg: "gray.100", borderColor: "gray.300" }}
            p={4}
            rounded="md"
          />
        </VStack>
        <VStack p={3} mt={1}>
          <Text fontSize="md" fontWeight="bold" color="black" mb={2}>
            Your Password
          </Text>
          <Input
            mt={2}
            borderWidth={0.5}
            placeholder="*************"
            placeholderTextColor="gray.400"
            p={4}
            bg="gray.100"
            borderColor="gray.100"
            _focus={{ bg: "gray.100", borderColor: "gray.300" }}
            rounded="md"
          />
        </VStack>
        <HStack p={3} justifyContent="flex-start" alignItems="center">
          {/* <Checkbox
            value="yes"
            size="md"
            accessibilityLabel="accept-terms"
            defaultIsChecked
          /> */}
          <Text w="5/6" ml={2} fontSize="xs" color="gray.400">
            By signing up you are agreeing to the{" "}
            <Text color="blue.800" fontSize="xs">
              Terms & Conditions
            </Text>
            ,
            <Text color="blue.800" fontSize="xs">
              Usage Rules
            </Text>{" "}
            and{" "}
            <Text color="blue.800" fontSize="xs">
              Privacy Policy
            </Text>
          </Text>
        </HStack>
      </VStack>
      <Box h="5/6" w="full">
        <Pressable p={4} w="5/6" m="auto" rounded="full" bg="blue.800">
          <Text textAlign="center" color="white" fontSize="md">
            Create Account
          </Text>
        </Pressable>
        <Pressable p={3}>
          <Text textAlign="center" color="blue.800" fontSize="sm">
            Already Have an Account ? Sign Up
          </Text>
        </Pressable>
      </Box>
    </KeyboardAvoidingView>
  );
}
