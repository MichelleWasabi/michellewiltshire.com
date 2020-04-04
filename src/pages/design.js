import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function DesignPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />
    </Layout>
  );
}

export default DesignPage;
