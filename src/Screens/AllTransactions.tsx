import { Box, HStack, Icon, Pressable, Text, Heading } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function AllTransactions({ navigation }: any) {
  return (
    <Box w="full" h="full" bg="white">
      <HStack w="full" mt={10} p={3} justifyContent="space-between">
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon as={<Feather />} name="arrow-left" size={5} color="black" />
        </Pressable>
        <Box w="4/6">
          <Heading fontWeight="bold" fontSize="xl">
            Transactions
          </Heading>
        </Box>
      </HStack>
      <HStack
        w="5/6"
        justifyContent="space-evenly"
        bg="gray.300"
        p={2}
        rounded="full"
        m="auto"
      >
        <Box h="full" rounded="full" p={3}>
          <Text textAlign="center">1W</Text>
        </Box>
        <Box h="full" rounded="full" p={3}>
          <Text textAlign="center">1M</Text>
        </Box>
        <Box bg="blue.800" h="full" rounded="full" p={3}>
          <Text textAlign="center" color="white">
            3M
          </Text>
        </Box>
        <Box h="full" rounded="full" p={3}>
          <Text textAlign="center">6M</Text>
        </Box>
        <Box h="full" rounded="full" p={3}>
          <Text textAlign="center">ALL</Text>
        </Box>
      </HStack>
    </Box>
  );
}
