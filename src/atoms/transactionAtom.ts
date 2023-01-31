import { atom } from "jotai";
import { Transaction } from "../utils/types";

let transactionAtom = atom<Transaction>({});

export default transactionAtom;
