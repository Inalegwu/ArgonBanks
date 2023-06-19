export interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: number;
  isDeduction: boolean;
  time: string;
  narration?: string;
}

export interface Card {
  id: number;
  card_number: string;
  card_amount: number;
  holder_name: string;
}

export type MainStackParamList={
  Login:undefined;
  Home:undefined;
  ForgotPin:undefined;
  CreateAccount:undefined;
  AllTransactions:undefined;
  Pay:undefined;
  Send:undefined;
  Recieve:undefined;
  Airtime:undefined;
}