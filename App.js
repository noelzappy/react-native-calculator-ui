import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { height, width } from "react-native-dimension";
import Button from "./Button";

export default function App() {
  const [numberPartOne, setNumberPartOne] = useState("");
  const [numberPartTwo, setNumberPartTwo] = useState("");
  const [mathSign, setMathSign] = useState("");

  const buttonSet1 = [
    {
      name: "AC",
      onPress: () => {
        setNumberPartOne("");
        setNumberPartTwo("");
      },
    },
    {
      name: "C",
      onPress: () => {
        setNumberPartOne("");
        setNumberPartTwo("");
      },
    },
    {
      name: "%",
      onPress: () => {
        setMathSign("%");
      },
    },
    {
      name: "/",
      onPress: () => setMathSign("/"),
    },
  ];

  const buttonSet2 = [
    {
      name: "7",
      onPress: () => {
        if (mathSign === "") {
          setNumberPartOne(7);
        } else {
          setNumberPartTwo(7);
        }
      },
    },
    {
      name: "8",
      onPress: () => {
        if (mathSign === "") {
          setNumberPartOne(8);
        } else {
          setNumberPartTwo(8);
        }
      },
    },
    {
      name: "9",
      onPress: () => {
        if (mathSign === "") {
          setNumberPartOne(9);
        } else {
          setNumberPartTwo(9);
        }
      },
    },
    {
      name: "*",
      onPress: () => setMathSign("*"),
    },
  ];

  const buttonSet3 = [
    {
      name: "4",
      onPress: () => {
        if (mathSign === "") {
          setNumberPartOne(4);
        } else {
          setNumberPartTwo(4);
        }
      },
    },
    {
      name: "5",
      onPress: () => {
        if (mathSign === "") {
          setNumberPartOne(5);
        } else {
          setNumberPartTwo(5);
        }
      },
    },
    {
      name: "6",
      onPress: () => {
        if (mathSign === "") {
          setNumberPartOne(6);
        } else {
          setNumberPartTwo(6);
        }
      },
    },
    {
      name: "-",
      onPress: () => setMathSign("-"),
    },
  ];

  const buttonSet4 = [
    {
      name: "1",
      onPress: () => {
        if (mathSign === "") {
          setNumberPartOne(1);
        } else {
          setNumberPartTwo(1);
        }
      },
    },
    {
      name: "2",
      onPress: () => {
        if (mathSign === "") {
          setNumberPartOne(2);
        } else {
          setNumberPartTwo(2);
        }
      },
    },
    {
      name: "3",
      onPress: () => {
        if (mathSign === "") {
          setNumberPartOne(3);
        } else {
          setNumberPartTwo(3);
        }
      },
    },
    {
      name: "+",
      onPress: () => setMathSign("+"),
    },
  ];

  const buttonSet5 = [
    {
      name: "0",
      onPress: () => {
        if (mathSign === "") {
          setNumberPartOne(0);
        } else {
          setNumberPartTwo(0);
        }
      },
    },
    {
      name: " ",
      onPress: () => {},
    },
    {
      name: " ",
      onPress: () => {},
    },
    {
      name: "=",
      onPress: calculate,
    },
  ];

  function calculate() {}
  return (
    <SafeAreaProvider>
      <View
        style={{
          height: height(40),
        }}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={["#F3A63A", "#E36579"]}
          start={{ x: 0.9, y: 0.1 }}
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            flex: 1,
          }}
        >
          <Text
            style={{ color: "white", fontSize: height(10), padding: width(2) }}
          >
            336
          </Text>
          <Text
            style={{ color: "white", fontSize: height(5), padding: width(2) }}
          >
            24 * 14
          </Text>
        </LinearGradient>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {buttonSet1.map((value, index) => (
            <Button
              title={value.name}
              onPress={value.onPress}
              style={{
                backgroundColor: "#EAEAEA",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: height(12),
              }}
            />
          ))}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {buttonSet2.map((value, index) => (
            <Button
              title={value.name}
              onPress={value.onPress}
              style={{
                backgroundColor:
                  index !== buttonSet2.length - 1 ? "#fff" : "#EAEAEA",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: height(12),
              }}
            />
          ))}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {buttonSet3.map((value, index) => (
            <Button
              title={value.name}
              onPress={value.onPress}
              style={{
                backgroundColor:
                  index !== buttonSet3.length - 1 ? "#fff" : "#EAEAEA",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: height(12),
              }}
            />
          ))}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {buttonSet4.map((value, index) => (
            <Button
              title={value.name}
              onPress={value.onPress}
              style={{
                backgroundColor:
                  index !== buttonSet4.length - 1 ? "#fff" : "#EAEAEA",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: height(12),
              }}
            />
          ))}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {buttonSet5.map((value, index) => {
            if (index !== buttonSet5.length - 1) {
              return (
                <Button
                  title={value.name}
                  onPress={value.onPress}
                  style={{
                    backgroundColor:
                      index !== buttonSet5.length - 1 ? "#fff" : "#EAEAEA",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    height: height(12),
                  }}
                />
              );
            } else {
              return (
                <LinearGradient
                  // Button Linear Gradient
                  colors={["#F3A63A", "#E36579"]}
                  start={{ x: 0.9, y: 0.1 }}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <Button
                    title={value.name}
                    onPress={value.onPress}
                    style={{
                      // backgroundColor: "#EAEAEA",
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      height: height(12),
                    }}
                    textStyle={{ color: "white" }}
                  />
                </LinearGradient>
              );
            }
          })}
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
