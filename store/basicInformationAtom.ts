import { RootObject } from "@/interfaces/users/basicInformation";
import { atom } from "jotai";

// Create an atom for RootObject
export const basicInformationAtom = atom<RootObject | null>(null); 