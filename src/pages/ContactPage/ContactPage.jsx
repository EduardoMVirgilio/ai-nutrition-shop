import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Button from "../../components/common/Button/Button";
import { toast } from "react-hot-toast";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "Debe tener al menos 2 caracteres")
      .required("El nombre es requerido"),
    lastName: Yup.string()
      .min(2, "Debe tener al menos 2 caracteres")
      .required("El apellido es requerido"),
    email: Yup.string()
      .email("Email inválido")
      .required("El email es requerido"),
    subject: Yup.string()
      .min(5, "Debe tener al menos 5 caracteres")
      .required("El asunto es requerido"),
    message: Yup.string()
      .min(10, "Debe tener al menos 10 caracteres")
      .required("El mensaje es requerido"),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Simular envío de formulario
    setTimeout(() => {
      console.log("Form submitted:", values);
      toast.success("¡Mensaje enviado correctamente! Te responderemos pronto.");
      resetForm();
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className={styles.contactPage}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Contáctanos</h1>
          <p className={styles.description}>
            ¿Tienes preguntas sobre nuestros productos? Estamos aquí para
            ayudarte
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <h2 className={styles.infoTitle}>Información de Contacto</h2>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Mail size={20} />
                </div>
                <div className={styles.infoDetails}>
                  <h3>Email</h3>
                  <p>info@nutrition.com</p>
                  <p>support@nutrition.com</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Phone size={20} />
                </div>
                <div className={styles.infoDetails}>
                  <h3>Teléfono</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>Lunes a Viernes, 9:00 - 18:00</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <MapPin size={20} />
                </div>
                <div className={styles.infoDetails}>
                  <h3>Dirección</h3>
                  <p>123 Health Street</p>
                  <p>Wellness City, WC 12345</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <Clock size={20} />
                </div>
                <div className={styles.infoDetails}>
                  <h3>Horarios</h3>
                  <p>Lun - Vie: 9:00 - 18:00</p>
                  <p>Sáb - Dom: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <h2 className={styles.formTitle}>Envíanos un Mensaje</h2>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="firstName" className={styles.label}>
                        Nombre *
                      </label>
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={styles.input}
                        placeholder="Tu nombre"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className={styles.error}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="lastName" className={styles.label}>
                        Apellido *
                      </label>
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={styles.input}
                        placeholder="Tu apellido"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className={styles.error}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email *
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={styles.input}
                      placeholder="tu@email.com"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>
                      Asunto *
                    </label>
                    <Field
                      type="text"
                      id="subject"
                      name="subject"
                      className={styles.input}
                      placeholder="¿Sobre qué quieres consultar?"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      Mensaje *
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows="6"
                      className={styles.textarea}
                      placeholder="Escribe tu mensaje aquí..."
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    fullWidth
                    className={styles.submitButton}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
