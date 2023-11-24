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
  InputMaskStyled,
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
    firstName: false,
    lastName: false,
    email: false,
    roomCount: false,
    phone: false,
  });

  const handleFocus = (fieldName) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: false,
    }));
  };

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

  const validateName = (value) => {
    return value.trim() !== "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "roomCount") {
      if (value === "" || /^\d+$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({
      firstName: !validateName(formData.firstName),
      lastName: !validateName(formData.lastName),
      email: !validateEmail(formData.email),
      roomCount: !validateRoomCount(formData.roomCount),
      phone: !validatePhone(formData.phone),
    });

    if (
      validateName(formData.firstName) &&
      validateName(formData.lastName) &&
      validateEmail(formData.email) &&
      validateRoomCount(formData.roomCount) &&
      validatePhone(formData.phone)
    ) {
      const data = {
        user: { firstName: formData.firstName, lastName: formData.lastName, mail:formData.email, phone:formData.phone },
        order: { flatsCount:formData.roomCount, time: new Date() },
      };
      console.log("Данные отправлены:", data);
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
          onFocus={() => handleFocus("firstName")}
          error={errors.firstName}
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />

        <Label>Фамилия:</Label>
        <Input
          onFocus={() => handleFocus("lastName")}
          error={errors.lastName}
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />

        <Label>Телефон:</Label>
        <InputMaskStyled
          onFocus={() => handleFocus("phone")}
          error={errors.phone}
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
          onFocus={() => handleFocus("email")}
          error={errors.email}
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

        <Label>Количество помещений:</Label>
        <Input
          onFocus={() => handleFocus("roomCount")}
          error={errors.roomCount}
          type="text"
          name="roomCount"
          value={formData.roomCount}
          onChange={handleChange}
          pattern="[0-9]*"
        />

        <Button type="submit">Log In</Button>
      </Form>
      <>{console.log("errors", errors)}</>
    </FormContainer>
  );
};

export default LoginForm;
