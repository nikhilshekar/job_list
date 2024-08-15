import { StatusBar } from "expo-status-bar";
import { TabView, SceneMap } from "react-native-tab-view";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { useEffect, useState } from "react";
import JobList from "./JobList";
import Bookmark from "./Bookmark";

const FirstRoute = () => (
  <View style={{ flex: 1}}>
    <JobList  />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1}}>
    <Bookmark />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const Home = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Job List" },
    { key: "second", title: "Bookmark" },
  ]);

  return (
    
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        style={{marginTop:40}}
      />
   
  );
};

export default Home;
