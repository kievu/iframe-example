import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      <div style={{ height: 400, width: 300, backgroundColor: "aqua" }} />
      <div style={{ height: 400, width: 300, backgroundColor: "crimson" }} />
      <div style={{ height: 400, width: 300, backgroundColor: "dodgerblue" }} />
      <div style={{ height: 400, width: 300, backgroundColor: "coral" }} />
      <div style={{ height: 400, width: 300, backgroundColor: "limegreen" }} />
      <div style={{ height: 400, width: 300, backgroundColor: "PapayaWhip" }} />
    </div>
  </Layout>
)

export default IndexPage
