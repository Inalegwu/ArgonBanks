import { Transaction } from "../utils/types";

const TRANSACTION_HISTORY: Array<Transaction> = [
  {
    id: 1,
    title: "Spotify Subscription",
    date: "Monday 12th November 2022",
    amount: 900,
    isDeduction: true,
    time: "2:56PM",
  },
  {
    id: 2,
    title: "Netflix Subscription",
    date: "Monday 12th November 2022",
    amount: 900,
    isDeduction: true,
    time: "4:56PM",
  },
  {
    id: 3,
    title: "Bought Airtime",
    date: "Tuesday 1st January 2022",
    amount: 900,
    isDeduction: true,
    time: "2:56PM",
  },
  {
    id: 4,
    title: "Payment Recieved From Mum",
    date: "2 Days Ago",
    amount: 10000,
    isDeduction: false,
    time: "11:00AM",
  },
];

export default TRANSACTION_HISTORY;
