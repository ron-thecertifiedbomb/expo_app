import { DataAtom, filterAtom } from "@/store/dataAtom";
import { useAtom } from "jotai";
import React, { useMemo } from "react";
import { Text, View, TextInput } from "react-native";

const UsersList = () => {
  const [data] = useAtom(DataAtom);
  const [filter, setFilter] = useAtom(filterAtom);

  const filteredData = useMemo(() => {
    return Array.isArray(data)
      ? data.filter((e) => e.name.toLowerCase().includes(filter.toLowerCase()))
      : [];
  }, [data, filter]);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Users</Text>
      <Text style={{ marginTop: 8 }}>Filter Users:</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginTop: 8,
          paddingHorizontal: 8,
        }}
        value={filter}
        onChangeText={setFilter} // React Native uses onChangeText
        placeholder="Type to filter..."
      />
      {filteredData.length > 0 ? (
        filteredData.map((elem) => (
          <View key={elem.id} style={{ marginTop: 8 }}>
            <Text>{elem.name}</Text>
          </View>
        ))
      ) : (
        <View style={{ marginTop: 8 }}>
          <Text>No users found.</Text>
        </View>
      )}
    </View>
  );
};

export default UsersList;
