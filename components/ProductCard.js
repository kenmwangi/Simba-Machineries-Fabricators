import Link from "next/link";
import React from "react";
import style from "../styles/ProductCard.module.css";
function ProductCard({ equipment }) {
  const { title, slug, thumbnail } = equipment.fields;
  return (
    <section className={style.card}>
      <div className={style.featured}>{/* thumbnail */}</div>

      <article className={style.content}>
        <div className={style.info}>
          <h4>{title}</h4>
        </div>

        <div className={style.actions}>
          <Link href={`/products/${slug}`}>View More Info &rarr;</Link>
        </div>
      </article>
    </section>
  );
}

export default ProductCard;
