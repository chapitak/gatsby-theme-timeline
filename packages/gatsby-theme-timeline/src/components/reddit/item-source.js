/** @jsx jsx */
import { jsx } from "theme-ui"
import ItemSource from "../item-source"
export default function ({ item }) {
  return (
    <ItemSource to={`https://www.reddit.com${item.permalink}`}>
      View on Reddit
    </ItemSource>
  )
}
