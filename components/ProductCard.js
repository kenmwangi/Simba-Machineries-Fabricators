import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "../styles/ProductCard.module.css";
function ProductCard({ equipment }) {
  const { title, slug, thumbnail } = equipment.fields;
  return (
    <section className={style.card}>
      <div className={style.featured}>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          alt="Thumbnail"
          //   width={thumbnail.fields.file.details.image.width}
          //   height={thumbnail.fields.file.details.image.height}
          width={500}
          height={500}
          className={style.product__image}
        />
      </div>

      <article className={style.content}>
        <div className={style.info}>
          <h4>{title}</h4>
        </div>

        <div className={style.actions}>
          <Link href={`/products/${slug}`} className={style.view__more}>
            <a>View More Info &rarr;</a>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default ProductCard;
