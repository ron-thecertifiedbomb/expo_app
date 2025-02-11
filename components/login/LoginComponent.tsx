import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { User } from "./types"; // Ensure this is correctly imported
import { timeCreated } from "@/helpers.tsx/lib"; // Ensure timeCreated is a valid function
import FormTextInput from "../shared/TextInput.tsx/TextInput";
import Button from "../shared/Button/Button";
import { useAuthenticateUser } from "@/hooks/useAuthenticateUser";
import Container from "../shared/Container";
import { LogInFormStyles } from "./LoginComponentStyles";
import useIsMobile from "@/helpers.tsx/useMoblie";
const LogInForm: React.FC = () => {
  const isMobile = useIsMobile();
  const logInStyles = LogInFormStyles(isMobile);

  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>(); // Using User interface with react-hook-form

  const { mutate, error, isLoading } = useAuthenticateUser(); // Use custom hook

  // Form submission handler
  const onSubmit = (data: User) => {
    const payload: User = {
      ...data,
      timeCreated: timeCreated(), // Assuming timeCreated() returns a string
      isLoggedIn: true,
    };

    console.log("payload", payload);

    mutate(payload, {
      onError: () => reset(), // Reset form if authentication fails
    });
  };

  // Navigation to registration page
  const handleNavigateToRegistration = () =>
    navigation.navigate("registration" as never);

  return (
    <Container style={styles.container}>
      <View
        style={logInStyles.formContent}
      >
        <FormTextInput
          control={control}
          name="username"
          label="Username"
          rules={{ required: "Username is required" }}
          errors={errors}
        />
        <FormTextInput
          control={control}
          name="password"
          label="Password"
          rules={{ required: "Password is required" }}
          errors={errors}
        />

        {error && <Text style={{ color: "red", marginTop: 5 }}>{error}</Text>}

        <TouchableOpacity onPress={handleNavigateToRegistration}>
          <Text>Click here to register</Text>
        </TouchableOpacity>

        <Button
          title={"Log In"}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
          disabled={isLoading} // Disable button while loading
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LogInForm;
