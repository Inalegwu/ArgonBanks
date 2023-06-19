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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainStackParamList } from "../utils/types";


type PayScreenNavigationProp=NativeStackNavigationProp<MainStackParamList,"Pay">

type Props={
  navigation:PayScreenNavigationProp;
}

export default function PayScreen({ navigation }: Props) {
  return (
    <Box w="full" h="full" bg="gray.700">
      <HStack p={4} mt={8}>
        <Pressable
          p={2}
          rounded="md"
          bg="blue.300"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="arrow-left" size={17} color="#fff" />
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
        <Feather name="wifi" size={250} color="black" />
        <Heading fontSize="xl" textAlign="center" mt={4} color="blue.300">
          Hold Your Phone Close To The Reader
        </Heading>
        <Pressable
          p={3}
          w="full"
          mt={20}
          mb={20}
          bg="blue.300"
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
