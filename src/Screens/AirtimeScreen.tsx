import { Box, Pressable, HStack, Select, Input, Text } from "native-base";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

export default function AirtimeScreen({ navigation }: any) {
  const [provider, setProvider] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(phoneNumber);
  return (
    <Box w="full" h="full" bg="white">
      <HStack w="full" p={3} mt={10}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          p={3}
          bg="gray.600"
          _pressed={{ bg: "gray.400" }}
          rounded="md"
        >
          <Feather name="arrow-left" size={20} color="#fff" />
        </Pressable>
      </HStack>
      <Box w="full" h="full">
        <Select
          selectedValue={provider}
          accessibilityLabel="choose provider"
          placeholder="Choose Provider"
          p={3}
          ml={3}
          mt={4}
          mr={3}
          bg="white"
          borderWidth={0.5}
          rounded="lg"
          onValueChange={(itemValue) => setProvider(itemValue)}
        >
          <Select.Item label="Airtel" value="airtel" />
          <Select.Item label="MTN" value="mtn" />
          <Select.Item label="GLO" value="glo" />
        </Select>
        <Input
          mr={3}
          ml={3}
          bg="white"
          borderWidth={0.5}
          placeholder="Enter Phone Number"
          p={4}
          mt={4}
          keyboardType="numeric"
          onChangeText={(e) => {
            setPhoneNumber(e);
          }}
        />
        <Pressable
          p={4}
          ml={3}
          mr={3}
          mt={10}
          rounded="full"
          bg="blue.800"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontWeight="bold" color="white">
            Buy Airtime
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}
