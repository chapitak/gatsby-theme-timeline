/** @jsx jsx */
import { jsx, Flex, Box, Link, Text, Styled } from "theme-ui"
import Image from "gatsby-image"
import { css } from "theme-ui"
const UserInfo = ({ name, screenName, avatar, avatarRemote }) => {
  if (!name || !screenName) {
    return null
  }
  return (
    <Flex sx={{ alignItems: `center` }}>
      <Link
        href={`https://twitter.com/${screenName}`}
        data-test="author-image-container"
      >
        {avatar?.childImageSharp ? (
          <Image
            fixed={avatar.childImageSharp.fixed}
            alt={`${name} avatar`}
            imgStyle={{
              width: `20px`,
              height: `20px`,
            }}
            style={{
              width: `20px`,
              height: `20px`,
            }}
            css={css({
              mr: 1,
              mb: -1,
              borderRadius: `full`,
            })}
          />
        ) : (
          <Styled.img
            alt={`${name} avatar`}
            sx={{
              mr: 2,
              mb: -1,
              width: `20px`,
              minWidth: `20px`,
              borderRadius: `full`,
            }}
            src={avatarRemote}
          />
        )}
      </Link>
      <Link
        sx={{ display: `flex`, alignItems: `center` }}
        href={`https://twitter.com/${screenName}`}
      >
        <Box sx={{ fontWeight: `bold` }}>
          <Text sx={{ color: `text`, mr: 1 }}>{name}</Text>
        </Box>
        <Text
          sx={{
            color: `textMuted`,
            fontSize: 0,
          }}
        >
          @{screenName}
        </Text>
      </Link>
    </Flex>
  )
}

export default UserInfo
