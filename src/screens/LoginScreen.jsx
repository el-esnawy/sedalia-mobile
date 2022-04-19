import React, { useState, useEffect } from "react";
import { StyleSheet, KeyboardAvoidingView, ScrollView, Button, View, ActivityIndicator } from "react-native";
import Colors from "../constants/color";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { checkCredentials, userLogin } from "../store/asyncThunk/userThunk";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { token, loading } = useSelector((state) => state.user);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    dispatch(checkCredentials());

    if (token) {
      navigation.navigate("admin dashboard");
    }
  }, [token]);

  const authHandler = async () => {
    dispatch(userLogin({ identifier, password }));
  };
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={50} style={styles.screen}>
      <LinearGradient colors={[`${Colors.accent}`, `${Colors.primary}`]} style={styles.gradient}>
        <Card style={styles.card}>
          {loading && <ActivityIndicator color={Colors.primary} />}
          <ScrollView style={styles.InnerCard}>
            <Input
              id="email"
              label="E-Mail"
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="next"
              errorMessage="Please Enter a unique Identifier"
              textChangeHandler={(text) => {
                setIdentifier(text);
              }}
              value={identifier}
            />
            <Input
              id="password"
              label="Password"
              secureTextEntry
              keyboardType="default"
              autoCapitalize="none"
              errorMessage="Password"
              textChangeHandler={(text) => {
                setPassword(text);
              }}
              value={password}
              minLength={5}
            />
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button
              title={"Log In"}
              onPress={() => {
                authHandler();
              }}
            />
          </View>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    width: "80%",
    maxWidth: 400,
    padding: 30,
    maxHeight: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 10,
    width: 200,
  },
  InnerCard: {
    width: "100%",
  },
});

export default LoginScreen;
