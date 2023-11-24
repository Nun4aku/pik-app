// LoginForm.js
import React, { useState } from "react";
import * as styles from "./styles";

const {
  FormContainer,
  BackgroundImage,
  Form,
  Label,
  Input,
  ErrorMessage,
  Button,
} = styles;

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    roomCount: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    roomCount: "",
  });

  const validateEmail = (email) => {
    // Простая проверка на наличие символа @ в email (для демонстрационных целей)
    return email.includes("@");
  };

  const validateRoomCount = (count) => {
    // Простая проверка, что количество помещений является цифрой
    return /^\d+$/.test(count);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Производим валидацию при изменении данных
    if (name === "email") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value) ? "" : "Некорректный email",
      }));
    } else if (name === "roomCount") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        roomCount: validateRoomCount(value) ? "" : "Введите число",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверяем валидность данных перед отправкой
    if (
      validateEmail(formData.email) &&
      validateRoomCount(formData.roomCount)
    ) {
      console.log("Данные отправлены:", formData);
    } else {
      console.log("Форма содержит ошибки");
    }
  };

  return (
    <FormContainer>
      <BackgroundImage />
      <Form onSubmit={handleSubmit}>
        <Label>Имя:</Label>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <Label>Фамилия:</Label>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <Label>Телефон:</Label>
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <Label>Email:</Label>
        <Input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <Label>Количество помещений:</Label>
        <Input
          type="text"
          name="roomCount"
          value={formData.roomCount}
          onChange={handleChange}
        />
        {errors.roomCount && <ErrorMessage>{errors.roomCount}</ErrorMessage>}

        <Button type="submit">Log In</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
