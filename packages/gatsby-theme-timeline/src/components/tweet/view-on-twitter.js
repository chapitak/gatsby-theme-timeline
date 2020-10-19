/** @jsx jsx */
import { Link as LinkUI, jsx } from "theme-ui"
import { TWEET_LINK_COLOR } from "./constans"

const ViewOnTwitter = ({ href }) => (
  <LinkUI sx={{ color: TWEET_LINK_COLOR }} href={href}>
    View on Twitter
  </LinkUI>
)

export default ViewOnTwitter