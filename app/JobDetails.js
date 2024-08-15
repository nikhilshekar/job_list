import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const JobDetails = ({ route }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        style={styles.backBtn}
        title="Go back Home"
        onPress={() => navigation.navigate("Home")}
      />
      <View style={styles.contents}>
        <Text style={styles.companyName}>{route.params.job.company_name}</Text>
        <Text style={styles.category}>{route.params.job.job_category}</Text>
        <Text style={styles.title}>{route.params.job.title}</Text>
        <View style={styles.flex}>
            <Text style={styles.bold}>Place: </Text>
            <Text>{route.params.job.primary_details.Place}</Text>
        </View>
        <View style={styles.flex}>
            <Text style={styles.bold}>Experience: </Text>
            <Text>{route.params.job.primary_details.Experience}</Text>
        </View>
        <View style={styles.flex}>
            <Text style={styles.bold}>Qualification: </Text>
            <Text>{route.params.job.primary_details.Qualification}</Text>
        </View>
        <View style={styles.flex}>
            <Text style={styles.bold}>Salary: </Text>
            <Text>{route.params.job.primary_details.Salary}</Text>
        </View>
        <View style={styles.flex}>
            <Text style={styles.bold}>Phone Number: </Text>
            <Text>+91 {route.params.job.whatsapp_no}</Text>
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop:50
  },
  contents: {
    paddingVertical: 30,
  },
  companyName: {
    fontSize: 25,
    fontWeight:'bold',
    marginBottom:5
  },
  category:{
    fontSize:15,
    fontWeight:'bold',
    marginBottom:15
  },
  title:{
    marginBottom:10
  },
  flex:{
    flexDirection:'row',
    marginBottom:5
  },
  bold:{
    fontWeight:'bold'
  }
});

export default JobDetails;
