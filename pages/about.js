import React from "react";
import Layout from "../components/Layout";
import style from "../styles/about.module.css";

function About() {
  return (
    <Layout title="About Us | Kenya Simba Machineries and Fabricators">
      <div className={style.about__us}>
        <h1>About Us</h1>
        <section className={style.company__profile}>
          <h2>Company Profile</h2>
          <div>
            <p>
              Welcome to Kenya Simba Machineries and Fabricators Ltd. We are
              located at Industrial Area Nakuru: We fabricate and import all
              types of farm Machines that will meet all your needs considering
              we are <br /> ®️ No. 1 Shop for Farm Equipments that are
              <br /> ✅️ 100% Durable <br />
              ✅️Affordable <br /> ✅️ Environmental Friendly <br />
            </p>
          </div>
          <div>
            <h3>Locations</h3>
            <p>
              Our principal Customer&apos;s geographies are Nakuru & its
              environs. We deliver to all parts of Kenya based on the customer
              demands and orders
            </p>
          </div>
          <div>
            <h3>Vision</h3>
            <p>
              Become one-stop shop for all farming equipments and fabrication
              services.
            </p>
          </div>
          <div>
            <h3>Our Mission</h3>
            <p>
              Revolutionalize the agricultural practices by mechanizing both
              small and large-scale farming using 100% durable &
              environmental-friendly equipments.{" "}
            </p>
          </div>
          <div>
            <h3>Our Primary Service</h3>

            <p>
              <br /> ✅️ Farm Machineries & Equipments Assembling <br />
              ✅️ Fabrications <br /> ✅️ Training <br /> ✅️ Maintenance
              Services <br />
            </p>
          </div>
          <div>
            <h3>Sneak Peak of Our Products</h3>
            <p>
              Amongst the machines we deal with; Posho Mills, Roller Mills,
              Pulverizer (Choppers), Car Wash, Diesel Engines, Petrol Engines,
              Chuff Cutters, Hallers e.t.c
            </p>

            <h2>View More Products Here </h2>
            <button
              type="submit"
              className="call__action"
              id={style.call__action}
            >
              View More Products &rarr;
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default About;
