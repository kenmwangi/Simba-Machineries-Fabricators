import Head from "next/head";
import React from "react";

//company name
const companyName = "Kenya Simba Machineries and Fabricators";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Head>

      <div className="container">{children}</div>

      <style jsx>{`
        .container {
          max-width: 100vw;
          margin-left: 16rem;
          margin-right: 16rem;
        }
      `}</style>
    </div>
  );
}

Layout.defaultProps = {
  title: ` Home | ${companyName}`,
  description:
    "Offering affordable farm machines and imports of all types of machines",
  keywords: "machines, fabricators, Nakuru, farming, equipments",
};
