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

export default function RecieveScreen({ navigation }: any) {
  return (
    <VStack w="full" h="full" bg="gray.700">
      <HStack w="full" p={4} mt={8}>
        <Pressable
          p={3}
          bg="white"
          rounded="md"
          _pressed={{ bg: "gray.400" }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="arrow-left" size={20} color="#000" />
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
        <Heading textAlign="center" color="white">
          Scan The QR Code on The Senders Device
        </Heading>
        <Text mt="2" color="gray.500" textAlign="center" fontSize={12}>
          Or Enter Your Account Number ( 0012345678 ) on The Senders Device
        </Text>
      </VStack>
    </VStack>
  );
}
