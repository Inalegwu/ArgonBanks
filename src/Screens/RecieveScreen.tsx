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
import { MainStackParamList } from "../utils/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RecieveScreenNavigatorProp=NativeStackNavigationProp<MainStackParamList,"Recieve">

type Props={
  navigation:RecieveScreenNavigatorProp;
}

export default function RecieveScreen({ navigation }: Props) {
  return (
    <VStack w="full" h="full" bg="gray.100">
      <HStack w="full" p={4} mt={8}>
        <Pressable
          p={2}
          bg="blue.300"
          rounded="md"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="arrow-left" size={17} color="#fff" />
        </Pressable>
      </HStack>
      <Box w="full" h="3/6" p={10} mt={10}>
        <Image
          source={require("../../assets/qr.png")}
          w="full"
          resizeMode="contain"
          h="full"
          alt="qr-code"
        />
      </Box>
      <VStack justifyContent="center" alignItems="center">
        <Heading textAlign="center" fontSize="3xl" color="blue.300">
          Scan The QR Code on The Senders Device
        </Heading>
        <Text mt="2" color="gray.400" w="5/6" textAlign="center" fontSize={12}>
          Or Enter Your Account Number ( 0012345678 ) on The Senders Device
        </Text>
      </VStack>
    </VStack>
  );
}
