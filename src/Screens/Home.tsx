import React, { useCallback, useRef } from "react";
import {
  Avatar,
  Box,
  FlatList,
  Heading,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from "native-base";
import BottomSheet, { BottomSheetRefProps } from "../components/BottomSheet";
import transactionAtom from "../atoms/transactionAtom";
import { useAtom } from "jotai";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import { Card, MainStackParamList, Transaction } from "../utils/types";
import TRANSACTION_HISTORY from "../data/transactions";
import CARDS from "../data/cards";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface FlatListProps {
  item: Transaction;
  index: number;
}

interface CardListProps {
  item: Card;
  index: number;
}

const actions = [
  {
    action: "Pay",
    name: "pay",
    icon_name: "credit-card",
  },
  {
    action: "Send",
    name: "send money",
    icon_name: "credit-card",
  },
  {
    action: "Recieve",
    name: "receive money",
    icon_name: "credit-card",
  },
  {
    action: "Airtime",
    name: "buy airtime",
    icon_name: "phone",
  },
];

type HomeNavigationProp=NativeStackNavigationProp<MainStackParamList,"Home">

type Props={
  navigation:HomeNavigationProp
}

export default function Home({ navigation }: Props) {
  const ref = useRef<BottomSheetRefProps>(null);
  const [transaction, setTransaction] = useAtom(transactionAtom);

  const onPress = useCallback((tx: any) => {
    setTransaction(tx);
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-400);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Box w="full" h="full" bg="gray.200">
        <Box w="full" h="3/6" bg="gray.800">
          <HStack w="full" mt={8} p={4}>
            <VStack w="5/6">
              <Text fontSize="md" color="gray.400">
                What's Good 😎
              </Text>
              <Heading mt="1" fontSize="2xl" color="white" fontWeight="bold">
                Inalegwu
              </Heading>
            </VStack>
          </HStack>
          <FlatList
            w="full"
            mt="2"
            p={3}
            data={CARDS}
            snapToInterval={96}
            decelerationRate="fast"
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }: CardListProps) => {
              return (
                <Box
                  key={index}
                  h="40"
                  w="80"
                  ml={2}
                  mr={2}
                  bg={index % 2 === 0 ? "orange.300" : "blue.300"}
                  rounded="md"
                >
                  <VStack w="full" h="full">
                    <HStack p={3}>
                      <VStack>
                        <Heading color="white" fontWeight="bold" fontSize="2xl">
                          {item.holder_name}
                        </Heading>
                        <Text mt={1} color="gray.100" fontSize="xs">
                          {item.card_number}
                        </Text>
                      </VStack>
                    </HStack>
                    <HStack p={3}>
                      <Heading fontSize="4xl" fontWeight="bold" color="white">
                        N {item.card_amount}
                      </Heading>
                    </HStack>
                  </VStack>
                </Box>
              );
            }}
          />
          <HStack justifyContent="space-evenly" alignItems="center" mb={4}>
            {actions.map((item, index) => {
              return (
                <VStack
                  key={index}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Pressable
                    p={4}
                    h="12"
                    w="12"
                    bg="gray.500"
                    _pressed={{ bg: "gray.400" }}
                    rounded="full"
                    onPress={() => {
                      navigation.navigate(item.action)
                    }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Feather
                      name={`${item.icon_name}`}
                      size={16}
                      color="#fff"
                    />
                  </Pressable>
                  <Text color="white" fontWeight="medium" fontSize="xs" mt={3}>
                    {item.name.toLocaleUpperCase()}
                  </Text>
                </VStack>
              );
            })}
          </HStack>
        </Box>
        <Box w="full" h="3/6" bg="white">
          <HStack
            w="full"
            p={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize="xl">
              Recent Transactions
            </Text>
            <Pressable
              p={2}
              onPress={() => {
                navigation.navigate("AllTransactions");
              }}
            >
              <Text color="blue.800">See All</Text>
            </Pressable>
          </HStack>
          <FlatList
            data={TRANSACTION_HISTORY}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }: FlatListProps) => {
              return (
                <Pressable
                  key={index}
                  w="full"
                  _pressed={{ bg: "gray.100" }}
                  onPress={() => {
                    onPress(item);
                  }}
                  p={4}
                  mt={2}
                  mb={1}
                  borderBottomColor="gray.200"
                  borderBottomWidth={0.4}
                >
                  <HStack>
                    <HStack w="5/6" space={1} alignItems="center">
                      <Box w="12" h="12" rounded="full" bg="gray.200"></Box>
                      <VStack space={1} p={1} mt={1}>
                        <Heading fontSize="sm" fontWeight="bold" color="black">
                          {item.title}
                        </Heading>
                        <Text fontSize="xs" color="gray.400">
                          {item.date}
                        </Text>
                      </VStack>
                    </HStack>
                    <VStack w="1/6" alignItems="flex-end" mt={1}>
                      <Text
                        fontSize="sm"
                        fontWeight="bold"
                        color={
                          item.isDeduction === true ? "red.500" : "green.600"
                        }
                      >
                        {item.isDeduction === true
                          ? "-₦" + item.amount
                          : "₦" + item.amount}
                      </Text>
                      <Text fontSize="sm" color="gray.400">
                        {item.time}
                      </Text>
                    </VStack>
                  </HStack>
                </Pressable>
              );
            }}
          />
        </Box>
        <BottomSheet ref={ref}>
          <Box w="full" h="full" bg="white">
            <HStack w="full" justifyContent="flex-end">
              <Pressable
                p={3}
                onPress={() => {
                  onPress({});
                }}
              >
                <Icon as={<Ionicons />} name="close" color="black" size={6} />
              </Pressable>
            </HStack>
            <VStack p={4}>
              <Box>
                <Heading>{transaction?.title}</Heading>
                <Text color="gray.400" mt={1}>
                  {transaction?.date}
                </Text>
                <Text mt={1} color="gray.400">
                  {transaction?.narration
                    ? transaction?.narration
                    : "No Narration"}
                </Text>
              </Box>
              <Box
                w="20"
                mt="2"
                rounded="full"
                bg={transaction?.isDeduction === true ? "red.200" : "green.200"}
              >
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  color={
                    transaction?.isDeduction === true ? "red.600" : "green.600"
                  }
                >
                  {transaction.isDeduction === true ? "Expense" : "Income"}
                </Text>
              </Box>
            </VStack>
            <Box w="full" h="full">
              <VStack w="full" h="3/6" p={5}>
                <Heading color="red.600" fontSize="3xl">
                  ₦{transaction.amount}
                </Heading>
              </VStack>
            </Box>
          </Box>
        </BottomSheet>
      </Box>
    </GestureHandlerRootView>
  );
}
