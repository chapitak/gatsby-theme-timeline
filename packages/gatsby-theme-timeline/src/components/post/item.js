/** @jsx jsx */
import { Link, withPrefix } from "gatsby"
import { Box, Link as LinkUI, jsx, Styled } from "theme-ui"
import Tag from "./tag"
import kebabCase from "lodash/kebabCase"
import Hero from "./hero"
import * as urlJoin from "url-join"
import ItemExcerpt from "./item-excerpt"

const Item = (post) => {
  const { title, slug, date, excerpt, tags, image, imageAlt, basePath } = post
  return (
    <Box
      sx={{
        borderRadius: `default`,
        overflow: `hidden`,
        wordWrap: `break-word`,
        borderWidth: 1,
        borderStyle: `solid`,
        borderColor: `muted`,
        px: [3, 4],
        pt: 3,
        pb: 4,
      }}
    >
      <Hero post={{ image: image, imageAlt: imageAlt, excerpt }}></Hero>
      {title && (
        <header>
          <LinkUI sx={{ color: `text` }} as={Link} to={slug}>
            <Styled.h3 sx={{ fontWeight: `normal` }}>{title}</Styled.h3>
          </LinkUI>
        </header>
      )}
      <ItemExcerpt {...post}></ItemExcerpt>
      <footer>
        {tags && tags.length > 0 && (
          <Styled.div
            sx={{
              display: `flex`,
              flexWrap: `wrap`,
              pb: 3,
            }}
          >
            {tags &&
              tags.map((tag) => {
                return (
                  <Tag
                    to={withPrefix(urlJoin(basePath, `tags/${kebabCase(tag)}`))}
                    key={`tag-${tag}`}
                  >
                    {tag}
                  </Tag>
                )
              })}
          </Styled.div>
        )}
        <section>
          <Styled.a as={Link} sx={{ color: `textMuted` }} to={slug}>
            {date}
          </Styled.a>
        </section>
      </footer>
    </Box>
  )
}

export default Item
