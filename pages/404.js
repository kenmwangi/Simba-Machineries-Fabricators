import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import style from "../styles/404.module.css";

function NotFound() {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <Layout>
      <section className={style.NotFound}>
        <h1>⚠️ 404</h1>
        <h2>Ooops! Page Not Found</h2>
      </section>
    </Layout>
  );
}

export default NotFound;
