import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

export const AnswerButton = ({children, color, title, onPress, disabled, bgColor }) => {

  return (
    <View style={{ width: 250, margin: 5 }}>
      <Button
        title={title ?? ""}
        color={color === "light" ? "white" : color ?? "#383B8F"}
        titleStyle={{
          color: color === "light" ? "white" : color ?? "#383B8FAB",
        }}
        onPress={onPress}
        disabled={disabled}
        containerStyle={{
          borderColor: "#383B8F",
          borderRadius: 10,
          borderWidth: 2,
          backgroundColor: bgColor ?? "white",
          padding: 5,
        }}
        buttonStyle={{ justifyContent: "flex-start"}}
        type='clear'>
{        {children}}
      </Button>
    </View>
  );
};
