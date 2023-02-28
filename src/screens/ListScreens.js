import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ListScreens = () => {
  const userList = [
    { nama: "Friend #1", age: '20' },
    { nama: "Friend #2", age: '21' },
    { nama: "Friend #3", age: '30' },
    { nama: "Friend #4", age: '15' },
    { nama: "Friend #5", age: '20' },
    { nama: "Friend #6", age: '20' },
    { nama: "Friend #7", age: '20' },
    { nama: "Friend #8", age: '20' },
    { nama: "Friend #9", age: '20' },
  ];
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(userList) => userList.nama}
        data={userList}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.nama} - Age {item.age}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 10,
    marginVertical: 50
  },
});

export default ListScreens;
