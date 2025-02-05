import { RootObject } from "@/interfaces/users/basicInformation";
import { atom } from "jotai";

export const basicInformationAtom = atom<RootObject | null>(null);
