import React, { useState } from "react";
import {
  Box,
  Heading,
  HStack,
  Input,
  VStack,
  Pressable,
  Text,
} from "native-base";

const inputs = [1, 2, 3, 4, 5];

export default function Pin({ navigation }: any) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <VStack h="full" bg="white" w="full" justifyContent="space-between">
      <VStack w="full" h="5/6" mt="10" justifyContent="space-around">
        <VStack w="full" alignItems="center" justifyContent="center">
          <Heading fontSize="2xl" color="blue.800">
            First Mobile
          </Heading>
          <Text color="gray.300" fontSize="sm">
            Please Enter Your Pin
          </Text>
          <HStack mt={2} mb={2}>
            {[...Array(5).keys()].map((item, index) => {
              return (
                <Input
                  p={3}
                  ml={2}
                  mr={2}
                  w="10"
                  h="10"
                  keyboardType="number-pad"
                  fontSize="lg"
                  key={index}
                  secureTextEntry={true}
                  borderWidth={0}
                  textAlign="center"
                  _focus={{
                    bg: "gray.300",
                    outlineColor: "none",
                    borderWidth: "0",
                  }}
                  isFocused={activeIndex === index ? true : false}
                  numberOfLines={1}
                  onChangeText={(e) => {
                    setActiveIndex(index + 1);
                  }}
                  bg="gray.300"
                  rounded="md"
                />
              );
            })}
          </HStack>
          <Pressable
            onPress={() => {
              navigation.navigate("ForgotPin");
            }}
            w="4/6"
            m="auto"
            left="1"
            p={2}
          >
            <Text
              color="red.400"
              textAlign="center"
              fontWeight="bold"
              fontSize="sm"
            >
              Forgot Pin ?{" "}
            </Text>
          </Pressable>
        </VStack>
      </VStack>
      <Pressable
        onPress={() => {
          navigation.navigate("Home");
        }}
        w="5/6"
        m="auto"
        p={3}
        bg="blue.800"
        rounded="full"
      >
        <Text textAlign="center" color="white" fontWeight="bold" fontSize="lg">
          Login
        </Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate("CreateAccount");
        }}
        w="3/6"
        m="auto"
        mt={3}
        mb={4}
        p={3}
      >
        <Text textAlign="center" color="blue.800">
          New User ? Create Account
        </Text>
      </Pressable>
    </VStack>
  );
}
