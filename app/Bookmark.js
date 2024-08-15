import { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "./Card";

const Bookmark = () => {
  const [bookmarkList, setBookmarkList] = useState([]);

  const getItem = async () => {
    try {
      const value = await AsyncStorage.getItem("bookmark");
      return value != null ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Error getting item:", error);
      return null;
    }
  };

  const handleRemove = async () => {
    try {
      await AsyncStorage.removeItem("bookmark");
      setBookmarkList([]);
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  useEffect(() => {
    setBookmarkList(getItem());
  }, []);

  return (
    <ScrollView>
      {bookmarkList && (
        <Card>
          <Text style={styles.title}>{bookmarkList}</Text>
          <Button  title="Remove" onPress={() => handleRemove()}></Button>
        </Card>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 25,
    fontWeight:'bold',
    marginBottom: 15,
  },
});

export default Bookmark;
