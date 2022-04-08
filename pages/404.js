import React from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

function NotFound() {
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <Layout>
      <h1>404</h1>
      <p>Ooops! Page Not Found</p>
    </Layout>
  );
}

export default NotFound;
