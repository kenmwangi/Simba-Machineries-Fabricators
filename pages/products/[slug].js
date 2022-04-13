// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import Image from "next/image";
import React from "react";
import style from "../../styles/ProductDetail.module.css";
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "equipment",
  });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "equipment",
    "fields.slug": params.slug,
  });
  return {
    props: { equipment: items[0] },
  };
}
function ProductDetail({ equipment }) {
  const { featuredImage, title, description } = equipment.fields;
  console.log(equipment);
  return (
    <section className={style.container}>
      <div className={style.ProductDetails}>
        <div className={style.banner}>
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            // width={featuredImage.fields.file.details.image.width}
            // height={featuredImage.fields.file.details.image.height}
            width={450}
            height={400}
            alt="Featured Image"
            className="featuredImage"
          />
          <h2>{title}</h2>
        </div>
        {/* <div className={style.info}>
          <h3>Categories</h3>
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div> */}
        <div className={style.description}>
          <h3>Description</h3>
          {/* <div>{documentToReactComponents(description)}</div> */}
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
