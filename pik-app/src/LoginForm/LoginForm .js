// LoginForm.js
import React, { useState } from "react";
import * as styles from "./styles";

const {
  FormContainer,
  BackgroundImage,
  Form,
  Label,
  Input,
  HorizontalInputs,
  VerticalInputs,
  Button,
  InputMaskStyled,
} = styles;

const LoginForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    roomCount: "",
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    roomCount: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const labelNames = {
    firstName: "Имя",
    lastName: "Фамилия",
    email: "Email",
    roomCount: "Количество помещений",
    phone: "Телефон",
  };

  const horizontal = ["firstName", "lastName"];
  const vertical = ["email", "roomCount", "phone"];

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
    setFormSubmitted(true); // Устанавливаем, что форма была отправлена

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
        user: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          mail: formData.email,
          phone: formData.phone,
        },
        order: { flatsCount: formData.roomCount, time: new Date() },
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
        <HorizontalInputs>
          {horizontal.map((name) => (
            <styles.OneInput key={name}>
              <Label>{labelNames[name]}:</Label>
              <Input
                onFocus={() => handleFocus(name)}
                error={(formSubmitted && errors[name]).toString()}
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
              />
            </styles.OneInput>
          ))}
        </HorizontalInputs>

        <VerticalInputs>
          {vertical.map((name) => (
            <styles.OneInput key={name}>
              <Label>{labelNames[name]}:</Label>
              {name === "phone" ? (
                <InputMaskStyled
                  onFocus={() => handleFocus(name)}
                  error={(formSubmitted && errors[name]).toString()}
                  mask="+7 (999) 999-99-99"
                  maskChar="_"
                  type="text"
                  name={name}
                  placeholder="+7"
                  value={formData[name]}
                  onChange={handleChange}
                />
              ) : (
                <Input
                  onFocus={() => handleFocus(name)}
                  error={(formSubmitted && errors[name]).toString()}
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                />
              )}
            </styles.OneInput>
          ))}
        </VerticalInputs>

        <Button type="submit">Log In</Button>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
