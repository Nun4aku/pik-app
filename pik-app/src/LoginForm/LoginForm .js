// LoginForm.js
import React, { useState } from "react";
import * as styles from "./styles";

const { FormContainer, BackgroundImage, Form, Label, Input, ErrorMessage, Button, InputMaskStyled } = styles;

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
    phone: "",
  });

  const validateEmail = (email) => {
    return email.includes("@");
  };

  const validateRoomCount = (count) => {
    return /^\d+$/.test(count);
  };

  const validatePhone = (phone) => {
    // Простая проверка на наличие символов +7 (999) 999-99-99 в телефоне
    return /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

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
    } else if (name === "phone") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: validatePhone(value) ? "" : "Некорректный номер телефона",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(formData.email) && validateRoomCount(formData.roomCount) && validatePhone(formData.phone)) {
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
        <InputMaskStyled
          mask="+7 (999) 999-99-99"
          maskChar="_"
          type="text"
          name="phone"
          placeholder="+7"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

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
