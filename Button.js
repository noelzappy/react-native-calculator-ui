import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { height, width } from "react-native-dimension";

export default function Button({ title, onPress, style, textStyle }) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={{ fontSize: height(5), color: "grey", ...textStyle }}>
        {" "}
        {title}{" "}
      </Text>
    </TouchableOpacity>
  );
}
