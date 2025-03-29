import { Row, Col, message } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import { sendTelegramMessage } from "../../common/utils/telegram";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit, resetForm } =
    useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      try {
        console.log("Form submitted with values:", {
          name: values.name,
          email: values.email,
          message: values.message,
        });

        const success = await sendTelegramMessage(
          values.name || "",
          values.email || "",
          values.message || ""
        );

        if (success) {
          message.success(t("Message sent successfully!"));
          resetForm();
        } else {
          message.error(
            t("Failed to send message. Please check the console for details.")
          );
          console.error(
            "Message sending failed. Check the console for more details."
          );
        }
      } catch (error) {
        console.error("Form submission error:", error);
        if (error instanceof Error) {
          message.error(t("Error: ") + error.message);
        } else {
          message.error(
            t("An unexpected error occurred. Please try again later.")
          );
        }
      }
    }
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={onSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder={t("Your Name")}
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder={t("Your Email")}
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder={t("Your Message")}
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
