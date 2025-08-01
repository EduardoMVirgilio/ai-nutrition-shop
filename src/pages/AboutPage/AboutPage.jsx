import React from "react";
import { Shield, Heart, Award, Users } from "lucide-react";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  const values = [
    {
      icon: <Shield size={32} />,
      title: "Calidad Certificada",
      description:
        "Todos nuestros productos pasan por rigurosas pruebas de calidad y están certificados por laboratorios independientes.",
    },
    {
      icon: <Heart size={32} />,
      title: "Bienestar Integral",
      description:
        "Creemos en un enfoque holístico de la salud que abarca el bienestar físico, mental y emocional.",
    },
    {
      icon: <Award size={32} />,
      title: "Excelencia",
      description:
        "Nos comprometemos a ofrecer solo los mejores suplementos nutritivos del mercado.",
    },
    {
      icon: <Users size={32} />,
      title: "Comunidad",
      description:
        "Construimos una comunidad de personas comprometidas con llevar una vida más saludable.",
    },
  ];

  return (
    <div className={styles.aboutPage}>
      <div className="container">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Sobre <span className={styles.heroAccent}>NutritiON</span>
            </h1>
            <p className={styles.heroDescription}>
              Somos más que una tienda de suplementos. Somos tu aliado en el
              camino hacia una vida más saludable y plena. Con años de
              experiencia en el sector de la nutrición, nos especializamos en
              ofrecer productos de la más alta calidad respaldados por la
              ciencia.
            </p>
          </div>
          <div className={styles.heroImage}>
            <img
              src="https://images.pexels.com/photos/6001527/pexels-photo-6001527.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Equipo de profesionales de la salud"
              className={styles.heroImg}
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className={styles.mission}>
          <div className={styles.missionContent}>
            <h2 className={styles.sectionTitle}>Nuestra Misión</h2>
            <p className={styles.missionText}>
              Empoderar a las personas para que alcancen su máximo potencial de
              salud a través de suplementos nutritivos premium, educación
              confiable y un servicio excepcional. Creemos que todos merecen
              acceso a productos que realmente marquen la diferencia en su
              bienestar.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.story}>
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              <img
                src="https://images.pexels.com/photos/3683081/pexels-photo-3683081.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Laboratorio de investigación"
                className={styles.storyImg}
              />
            </div>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
              <p className={styles.storyText}>
                NutritiON nació de la pasión por la salud y el bienestar.
                Fundada por un equipo de nutricionistas y profesionales de la
                salud, nuestra empresa se estableció con el objetivo de
                democratizar el acceso a suplementos de calidad farmacéutica.
              </p>
              <p className={styles.storyText}>
                Desde nuestros inicios, hemos mantenido un compromiso
                inquebrantable con la transparencia, la calidad y la educación.
                Cada producto en nuestro catálogo ha sido cuidadosamente
                seleccionado y probado para garantizar que cumpla con nuestros
                estándares excepcionales.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.stats}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>10,000+</h3>
              <p className={styles.statLabel}>Clientes Satisfechos</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>500+</h3>
              <p className={styles.statLabel}>Productos Premium</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>5</h3>
              <p className={styles.statLabel}>Años de Experiencia</p>
            </div>
            <div className={styles.stat}>
              <h3 className={styles.statNumber}>99%</h3>
              <p className={styles.statLabel}>Tasa de Satisfacción</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
