/** @jsx jsx */
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { Link as LinkUI, jsx, Styled } from "theme-ui"
export default function ({ item }) {
  const { slug, title } = item
  return (
    <LinkUI sx={{ color: `text` }} as={Link} to={slug}>
      <Styled.h3 sx={{ fontWeight: `normal`, fontSize: 2 }}>{title}</Styled.h3>
    </LinkUI>
  )
}