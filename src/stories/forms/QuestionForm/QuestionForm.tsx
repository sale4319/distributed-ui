import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { QuestionIconToolTip } from "../../tool-tips";
import { PrimaryButton } from "../../buttons";
import { QuestionFormMessages, DefaultMessages } from "../../utils/Messages";

import styles from "./QuestionForm.module.css";

type FormValues = {
  answerOne: string;
  answerTwo: string;
};

type FormErrors = {
  answerOne?: string;
  answerTwo?: string;
};

type QuestionFormProps = {
  questionIconSize?: "small" | "medium" | "large";
  handleUnlock?: () => void;
  firstQuestion?: string;
  firstHint?: string;
  firstPlaceholder?: string;
  secondQuestion?: string;
  secondHint?: string;
  secondPlaceholder?: string;
  successMessage?: string;
};

export const QuestionForm = ({
  questionIconSize = "medium",
  handleUnlock,
  firstQuestion = "What is your first question?",
  firstHint = "What is your first hint?",
  firstPlaceholder = "What is your first placeholder?",
  secondQuestion = "What is your second question?",
  secondHint = "What is your second hint?",
  secondPlaceholder = "What is your second placeholder?",
  successMessage = "What is your success message?",
}: QuestionFormProps) => {
  const initialValues: FormValues = { answerOne: "", answerTwo: "" };

  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{
    [key in keyof FormValues]?: boolean;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    setFormErrors(validate(formValues));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setTouched({ answerOne: true, answerTwo: true });
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
    }
  };

  const validate = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    const a1 = "React";
    const a2 = "React";
    const regex1 = RegExp("^$|^" + a1 + "|^([FG]?\\d{5}|\\d{5}[AB])$");
    const regex2 = RegExp("^$|^" + a2 + "|^([FG]?\\d{5}|\\d{5}[AB])$");

    if (!values.answerOne) {
      errors.answerOne = QuestionFormMessages.REQUIRED;
    } else if (values.answerOne.length < 4) {
      errors.answerOne = QuestionFormMessages.SHORT;
    } else if (!regex1.test(values.answerOne)) {
      errors.answerOne = QuestionFormMessages.FIRST_Q_WRONG;
    }

    if (!values.answerTwo) {
      errors.answerTwo = QuestionFormMessages.REQUIRED;
    } else if (values.answerTwo.length < 4) {
      errors.answerTwo = QuestionFormMessages.SHORT;
    } else if (!regex2.test(values.answerTwo)) {
      errors.answerTwo = QuestionFormMessages.SECOND_Q_WRONG;
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
      if (handleUnlock) handleUnlock();
    }
  }, [formErrors, isSubmitting, handleUnlock]);

  return (
    <div className={styles.formContainer}>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className={styles.successMessage}>{successMessage}</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formRow}>
          <label
            className={[styles.formLabel, styles["light"]].join(" ")}
            htmlFor="answerOne"
          >
            {firstQuestion}
            <QuestionIconToolTip size={questionIconSize} content={firstHint} />
          </label>
          <input
            placeholder={firstPlaceholder}
            type="text"
            name="answerOne"
            id="answerOne"
            value={formValues.answerOne}
            onBlur={handleOnBlur}
            onChange={handleChange}
            className={
              touched.answerOne && formErrors.answerOne
                ? styles.formInputError
                : styles.formInput
            }
          />
          {touched.answerOne && formErrors.answerOne && (
            <span className={styles.error}>{formErrors.answerOne}</span>
          )}
        </div>

        <div className={styles.formRow}>
          <label
            className={[styles.formLabel, styles["light"]].join(" ")}
            htmlFor="answerTwo"
          >
            {secondQuestion}
            <QuestionIconToolTip size={questionIconSize} content={secondHint} />
          </label>
          <input
            placeholder={secondPlaceholder}
            type="text"
            name="answerTwo"
            id="answerTwo"
            value={formValues.answerTwo}
            onBlur={handleOnBlur}
            onChange={handleChange}
            className={
              touched.answerTwo && formErrors.answerTwo
                ? styles.formInputError
                : styles.formInput
            }
          />
          {touched.answerTwo && formErrors.answerTwo && (
            <span className={styles.error}>{formErrors.answerTwo}</span>
          )}
        </div>
        <PrimaryButton
          size={"medium"}
          label={DefaultMessages.SUBMIT_BUTTON}
          buttonType="submit"
          mode="up"
        />
      </form>
    </div>
  );
};
