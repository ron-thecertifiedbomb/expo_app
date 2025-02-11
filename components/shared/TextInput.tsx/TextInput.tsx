import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, Text, StyleSheet } from 'react-native';

interface FormTextInputProps {
  control: any;
  name: string;
  label: string;
  rules?: any;
  errors?: any;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'decimal-pad'; // Add more options if needed
  secureTextEntry?: boolean;
}

const FormTextInput: React.FC<FormTextInputProps> = ({
  control,
  name,
  label,
  rules,
  errors,
  keyboardType = 'default', // Default to 'default'
  secureTextEntry = false,  // Allow secureTextEntry for password fields
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            placeholder={label}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry} // For password field
          />
          {errors && errors[name] && (
            <Text style={styles.error}>{errors[name].message}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#C0C0C0',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 2, // Add space between fields
  },
  error: {
    color: 'red',
  },
});

export default FormTextInput;
