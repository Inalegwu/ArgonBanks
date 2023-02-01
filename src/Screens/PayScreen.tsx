import React from "react";
import {
  Box,
  VStack,
  Pressable,
  HStack,
  Heading,
  Image,
  Text,
} from "native-base";
import { Feather } from "@expo/vector-icons";

export default function PayScreen({ navigation }: any) {
  return (
    <Box w="full" h="full" bg="gray.700">
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
      <Box
        h="full"
        bg="white"
        rounded="2xl"
        p={3}
        justifyContent="center"
        alignItems="center"
      >
        <Feather name="wifi" size={250} color="#000" />
        <Heading fontSize="xl" textAlign="center" mt={2} color="blue.800">
          Hold Your Phone Close To The Reader
        </Heading>
        <Pressable
          p={3}
          w="full"
          mt={20}
          mb={20}
          bg="blue.800"
          rounded="full"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontWeight="bold">
            Make a transfer payment instead
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}
