import { useEffect } from "react";
import { useAtom } from "jotai";
import { RootObject } from "@/interfaces/users/basicInformation";
import { basicInformationAtom } from "@/store/basicInformationAtom";

const fetchData = async (): Promise<RootObject> => {
  const response = await fetch("http://localhost:3000/employeeData");
  if (!response.ok) {
    throw new Error("Failed to fetch basic information");
  }
  return response.json();
};

const useFetchData = () => {
  const [basicInfo, setBasicInfo] = useAtom(basicInformationAtom);

  useEffect(() => {
    const getBasicInformation = async () => {
      try {
        const data = await fetchData();
        setBasicInfo(data);
      } catch (error) {
        console.error("Error fetching basic information:", error);
      }
    };

    getBasicInformation();
  }, [setBasicInfo]);

  return { basicInfo };
};

export default useFetchData;
