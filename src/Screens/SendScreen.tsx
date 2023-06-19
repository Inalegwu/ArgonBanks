import React from "react";
import {
  Box,
  HStack,
  Pressable,
  Heading,
  Input,
  VStack,
  KeyboardAvoidingView,
  Text,
} from "native-base";
import { Feather } from "@expo/vector-icons";
import { Platform } from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import { MainStackParamList } from "../utils/types";

type SendScreenNavigatorProps=NativeStackNavigationProp<MainStackParamList,"Send">

type Props={
  navigation:SendScreenNavigatorProps
}

export default function SendScreen({ navigation }: Props) {
  return (
    <KeyboardAvoidingView
      w="full"
      h="full"
      bg="gray.700"
      behavior={Platform.OS === "android" ? "padding" : "height"}
    >
      <HStack p={4} mt={8}>
        <Pressable
          p={3}
          bg="white"
          rounded="md"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="arrow-left" size={20} color="#000" />
        </Pressable>
      </HStack>
      <Box w="full" h="3/6" justifyContent="center" alignItems="center">
        <Heading>QR Code Scanner Goes Here</Heading>
      </Box>
      <VStack w="full" h="3/6" justifyContent="center" alignItems="center">
        <Box w="full" justifyContent="center" alignItems="center">
          <Heading color="gray.500">Enter Account Number</Heading>
          <Input
            w="full"
            p={4}
            mt={2}
            w="5/6"
            m="auto"
            borderWidth={0}
            _focus={{ bg: "white", outlineColor: "none" }}
            bg="gray.500"
            rounded="md"
            mb={4}
          />
          <Pressable
            w="5/6"
            m="auto"
            justifyContent="center"
            alignItems="center"
            rounded="full"
            bg="orange.400"
            p={4}
            mb={20}
          >
            <Text fontWeight="bold" color="white">
              Send
            </Text>
          </Pressable>
        </Box>
      </VStack>
    </KeyboardAvoidingView>
  );
}
