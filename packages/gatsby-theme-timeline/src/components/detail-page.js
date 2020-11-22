import React from "react"
import Layout from "./layout"
import DetailFooter from "./detail-footer"
import Detail from "./detail"
import DetailSEO from "./detail-seo"
const DetailPage = ({
  data: {
    blogPost,
    previous,
    next,
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => {
  const item = blogPost
  const basePath = item?.fields?.basePath || `/`
  return (
    <Layout basePath={basePath} location={location} title={title} type="detail">
      <DetailSEO {...item}></DetailSEO>
      <main>
        <Detail {...item}></Detail>

        <DetailFooter
          {...{
            previous,
            next,
            basePath: basePath,
            item,
          }}
        />
      </main>
    </Layout>
  )
}

export default DetailPage
