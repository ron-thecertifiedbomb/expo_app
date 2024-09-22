import { RootObject } from "@/interfaces/users/userList";
import { atom } from "jotai";

export const DataAtom = atom<RootObject | null>(null);

export const filterAtom = atom("");