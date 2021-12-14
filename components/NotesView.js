import React from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Note from "./Note";

const NotesView = ({ notes, styles, deleteNote, setEdit, editNote }) => {
  return (
    <ScrollView style={{ width: "100%", backgroundColor: "#0ff", margin: 2 }}>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          styles={styles}
          deleteNote={deleteNote}
          setEdit={setEdit}
          editNote={editNote}
        />
      ))}
    </ScrollView>
  );
};

export default NotesView;
