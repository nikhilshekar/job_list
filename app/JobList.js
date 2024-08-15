import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const JobList = () => {
  const [jobList, setJobList] = useState([]);
  const navigation = useNavigation();

  const fetchData = async () => {
    await fetch("https://testapi.getlokalapp.com/common/jobs?page=1")
      .then((res) => res.json())
      .then((data) => {
        setJobList(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleBookmark = async (job) => {
    try {
      await AsyncStorage.setItem("bookmark", JSON.stringify(job.company_name));
    } catch (error) {
      console.error("Error merging item:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {jobList?.map(
        (job, i) =>
          job.company_name && (
            <TouchableOpacity
              key={i}
              onPress={() => navigation.navigate("JobDetails", { job: job })}
            >
              <Card>
                <Text style={styles.companyName}> {job.company_name}</Text>
                <Text style={styles.title}>{job.title}</Text>
                <Button
                  style={styles.bookmarkBtn}
                  title="Bookmark"
                  onPress={() => handleBookmark(job)}
                />
              </Card>
            </TouchableOpacity>
          )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  companyName: {
    fontSize: 18,
  },
  title: {
    fontSize: 10,
    marginBottom: 15,
  },
});

export default JobList;
