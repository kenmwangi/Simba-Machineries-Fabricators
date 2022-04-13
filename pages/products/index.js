import { createClient } from "contentful";
import Link from "next/link";
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
      <div className={style.container}>
        <h1>Check Our Products</h1>
        <section className={style.products}>
          {equipments.map((equipment) => (
            <ProductCard key={equipment.sys.id} equipment={equipment} />
          ))}
        </section>
        <div className={style.more__products}>
          For More Products
          <p>
            <Link href="/contact" passHref>
              <button className="call__action">
                Make Inquiries or Request a Quote
              </button>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Products;
