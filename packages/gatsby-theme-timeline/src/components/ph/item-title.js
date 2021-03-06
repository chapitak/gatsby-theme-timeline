/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"

export default function ({ item }) {
  const { title, originalUrl, tagline } = item
  return (
    <LinkUI
      data-test="item-title"
      sx={{ color: `text` }}
      href={originalUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.h3
        itemProp="name"
        sx={{ fontWeight: `normal` }}
      >{`${title} - ${tagline}`}</Styled.h3>
    </LinkUI>
  )
}
