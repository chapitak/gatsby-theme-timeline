/** @jsx jsx */
import { jsx, Box, Styled } from "theme-ui"
import ItemFooter from "./item-footer"
import { withPrefix } from "gatsby"
import Tag from "../item-tag"
import kebabCase from "lodash/kebabCase"
import Tweet from "./tweet"
import { join as urlJoin } from "path"
const Item = (props) => {
  const { item, basePath } = props
  const { tags } = item
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
        py: 4,
      }}
    >
      <Tweet {...props}></Tweet>
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
      <ItemFooter {...props}></ItemFooter>
    </Box>
  )
}
export default Item
