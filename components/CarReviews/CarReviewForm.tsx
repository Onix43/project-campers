"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { BookingSchema } from "./validationSchema";
import css from "./CarReviews.module.css";
import Button from "../Button/Button";
import { postBooking } from "@/lib/api/campresApi";
import toast, { Toaster } from "react-hot-toast";

interface CarReviewFormProps {
  camperId: string;
}

export default function CarReviewForm({ camperId }: CarReviewFormProps) {
  const initialValues = {
    name: "",
    email: "",
  };

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      const toSend = {
        ...values,
        camperId,
      };
      const respose = await postBooking(toSend);
      toast.success(respose.message, {
        duration: 4000,
      });
    } catch {
      toast.error("Something went wrong, please try later");
    }
    resetForm();
  };

  return (
    <section className={css.formContainer}>
      <Toaster />
      <div className={css.formHeader}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.inputGroup}>
              <Field
                name="name"
                placeholder="Name*"
                className={`${css.input} ${errors.name && touched.name ? css.errorBorder : ""}`}
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.errorMsg}
              />
            </div>

            <div className={css.inputGroup}>
              <Field
                name="email"
                type="email"
                placeholder="Email*"
                className={`${css.input} ${errors.email && touched.email ? css.errorBorder : ""}`}
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.errorMsg}
              />
            </div>

            <Button type="submit" className={css.submitBtn}>
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
