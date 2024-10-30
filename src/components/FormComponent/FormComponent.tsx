import React, { useState } from "react";
import { Form, message } from "antd";
import axios from "axios";
import * as Styles from "./FormComponent.styled";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormComponentProps {
  onSubmit: (message: string) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: FormValues) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/contact", values);
      onSubmit(response.data.message);
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      if (axios.isAxiosError(error)) {
        message.error(error.response?.data?.message || "Произошла ошибка при отправке формы.");
      } else {
        message.error("Произошла ошибка при отправке формы.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Styles.FormContainer>
      <Form onFinish={onFinish}>
        <p>Name</p>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Введите ваше имя!" }]}
        >
          <Styles.StyledInput placeholder="Имя" />
        </Form.Item>
        <p>Email</p>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Введите ваш email!" }]}
        >
          <Styles.StyledInput placeholder="Email" />
        </Form.Item>
        <p>Message</p>
        <Form.Item
          name="message"
          rules={[{ required: true, message: "Введите ваше сообщение!" }]}
        >
          <Styles.StyledTextArea placeholder="Сообщение" />
        </Form.Item>
        <Form.Item>
          <Styles.StyledButton type="primary" htmlType="submit" loading={loading}>
            Отправить
          </Styles.StyledButton>
        </Form.Item>
      </Form>
    </Styles.FormContainer>
  );
};

export default FormComponent;

