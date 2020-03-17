import React from "react"

export default ({ pageContext: { portfolio } }) => (
  <section>
    {portfolio.name} - {portfolio.category}
  </section>
)