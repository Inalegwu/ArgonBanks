import { Box, Pressable, HStack, Select, Input, Text } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { MainStackParamList } from "../utils/types";

type AirtimeScreenNavigatorProp=NativeStackNavigationProp<MainStackParamList,"Airtime">


type Props={
  navigation:AirtimeScreenNavigatorProp
}

const PROVIDERS=["AIRTEL","MTN","GLO","9MOBILE","SPECTRANET"]

export default function AirtimeScreen({ navigation }: Props) {
  const [provider, setProvider] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");

  
  const handleBuyAirtime=React.useCallback(()=>{
    console.log(`Buying ${provider} airtime for ${phoneNumber}`)
  },[phoneNumber,provider])
  
  
   return (
    <Box w="full" h="full" bg="white">
      <HStack w="full" p={3} mt={10}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          p={2}
          bg="blue.300"
          _pressed={{ bg: "gray.400" }}
          rounded="md"
        >
          <Feather name="arrow-left" size={17} color="#fff" />
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
          {PROVIDERS.map((item,index)=>(<Select.Item bg={provider===item?"blue.300":"white"} fontWeight="bold" fontSize={15} rounded="md" p={3} alignItems="center" color={provider===item?"white":"$gray.500"} key={index} label={item} value={item}/>))}
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
          bg="blue.300"
          justifyContent="center"
          alignItems="center"
          onPress={handleBuyAirtime}
        >
          <Text fontWeight="bold" color="white">
            Buy Airtime
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}
