import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import NotesView from "./components/NotesView";

export default function App() {
  const [notes, setNotes] = useState([{ name: "test", id: 1, isEdit: true }]);
  const [text, setText] = useState("");
  const addNote = () => {
    if (text != "") {
      setNotes([{ name: text, id: notes.length + 1, isEdit: false }, ...notes]);
      setText("");
    }
  };
  const deleteNote = (id) => {
    const updatedNote = notes.filter((note) => note.id != id);
    setNotes([...updatedNote]);
  };
  const editNote = (id, text) => {
    const index = notes.findIndex((note) => note.id == id);
    const newNotes = [...notes];
    newNotes[index].name = text;
    newNotes[index].isEdit = false;

    setNotes(newNotes);
  };
  const setEdit = (id) => {
    const index = notes.findIndex((note) => note.id == id);
    const newNotes = [...notes];
    newNotes[index].isEdit = true;
    setNotes(newNotes);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Notes App</Text>
      <View style={[styles.flexRow]}>
        <TextInput
          style={{ backgroundColor: "#0ff", width: "70%" }}
          value={text}
          placeholder="Enter Note Here"
          onChangeText={(e) => setText(e)}
        />
        <Button title="Add" onPress={() => addNote()} />
      </View>
      <NotesView
        notes={notes}
        styles={styles}
        deleteNote={deleteNote}
        setEdit={setEdit}
        editNote={editNote}
      />
      <StatusBar style="auto" />
      <Text>2021&copy;Sahil Tagra</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#00a0a0",
  },
  note: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    margin: 5,
    padding: 5,
    borderRadius: 3,
  },
  flexRow: { display: "flex", flexDirection: "row" },
});
