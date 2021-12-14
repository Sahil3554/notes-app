import React, { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const Note = ({ note, styles, deleteNote, setEdit, editNote }) => {
  const [noteText, setNoteText] = useState(note.name);
  return (
    <View style={styles.note} key={note.id}>
      {note.isEdit ? (
        <TextInput
          value={noteText}
          onChangeText={(e) => setNoteText(e)}
          style={{ backgroundColor: "#0ff", width: "50%" }}
        />
      ) : (
        <Text>{noteText}</Text>
      )}

      <View style={styles.flexRow}>
        {note.isEdit ? (
          <Button title="Save" onPress={() => editNote(note.id, noteText)} />
        ) : (
          <Button title="Edit" onPress={() => setEdit(note.id)} />
        )}

        <Button
          title="Delete"
          color="red"
          onPress={() => deleteNote(note.id)}
        />
      </View>
    </View>
  );
};

export default Note;
