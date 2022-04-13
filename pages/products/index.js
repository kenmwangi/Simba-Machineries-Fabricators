import { createClient } from "contentful";
import React from "react";
import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import style from "../../styles/products.module.css";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "equipment" });

  return {
    props: {
      equipments: res.items,
    },
  };
}

function Products({ equipments }) {
  console.log(equipments);
  return (
    <Layout title="Products | Kenya Simba Machineries and Fabricators">
      <section className={style.products}>
        <h1>Check Our Products</h1>
        {equipments.map((equipment) => (
          <ProductCard key={equipment.sys.id} equipment={equipment} />
        ))}
      </section>
    </Layout>
  );
}

export default Products;
