import { useState } from "react";
import { notification } from "antd";

interface IValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: IValues = {
  name: "",
  email: "",
  message: "",
};

export const useForm = (validate: (values: IValues) => IValues) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: IValues;
  }>({
    values: { ...initialValues },
    errors: { ...initialValues },
  });


  const resetForm = () => {
    setFormState({
      values: { ...initialValues },
      errors: { ...initialValues },
    });
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormUrl =
        "https://docs.google.com/forms/d/e/1FAIpQLSfzDom5QBeFOLV0_scnJ-8pxF0T9EIts-PMNcqeVRkmRUaz6g/formResponse";

    const formData = new FormData();
    formData.append("entry.2005620554", formState.values.name);
    formData.append("entry.1045781291", formState.values.email);
    formData.append("entry.1065046570", formState.values.message);

    try {
      await fetch(googleFormUrl, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      notification.success({
        message: "Success",
        description: "Your message has been sent!",
      });

      return Promise.resolve(); // ✅ Ensure it returns a resolved promise
    } catch (error) {
      console.error("Form submission error:", error);
      notification.error({
        message: "Error",
        description: "Failed to send message. Try again later.",
      });

      return Promise.reject(error); // ❌ Prevent reset if submission fails
    }
  };


  const handleChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    resetForm,
    values: formState.values,
    errors: formState.errors,
  };
};
