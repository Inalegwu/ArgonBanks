import { Box, HStack, Icon, Pressable, Text, Heading } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MainStackParamList } from "../utils/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type AllScreenNavigatorProp=NativeStackNavigationProp<MainStackParamList,"AllTransactions">


type Props={
  navigation:AllScreenNavigatorProp
}

export default function AllTransactions({ navigation }: Props) {
  return (
    <Box w="full" h="full" bg="white">
      <HStack
        w="full"
        mt={8}
        p={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Pressable
          p={2}
          rounded="md"
          bg="blue.300"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Feather name="chevron-left" size={17} color="#fff"/>
        </Pressable>
        <Box flex={1} alignItems="center" alignContent="center">
          <Heading color="blueGray.900" fontWeight="bold" fontSize="2xl">
            Transactions
          </Heading>
        </Box>
      </HStack>
    </Box>
  );
}
