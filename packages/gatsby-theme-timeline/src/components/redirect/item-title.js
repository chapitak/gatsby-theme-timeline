/** @jsx jsx */
import { Link as LinkUI, jsx, Styled } from "theme-ui"

export default function ({ item }) {
  const { title, url } = item
  const finalUrl = url

  return (
    <LinkUI
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: `text` }}
      href={finalUrl}
    >
      <Styled.h3 sx={{ fontWeight: `normal`, fontSize: `1.15rem` }}>
        {title}
      </Styled.h3>
    </LinkUI>
  )
}
