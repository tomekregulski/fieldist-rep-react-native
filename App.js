import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);

  const baseURL = 'https://fieldist-back-end.herokuapp.com/api/users';

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const res = response.data;
      setData(res);
      console.log(res);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome to Fieldist Rep App!</Text>
      {data.length ? (
        <View>
          <Text>There are {data.length} users in the system</Text>
          <Text>Here are their first names</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(user) => user.id.toString()}
            data={data}
            renderItem={({ item }) => {
              return <Text>{item.first_name}</Text>;
            }}
          />
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100,
    justifyContent: 'center',
  },
});
