import React from "react"
import { TWEET_TYPE_NAME, REDDIT_TYPE_NAME } from "../constans"
import PostItem from "./post/item"
import TweetItem from "./tweet/item"
import RedditItem from "./reddit/item"

const Item = (props) => {
  const { item } = props
  if (item.__typename === TWEET_TYPE_NAME) {
    return <TweetItem {...props}></TweetItem>
  } else if (item.__typename === REDDIT_TYPE_NAME) {
    return <RedditItem {...props}></RedditItem>
  }
  return <PostItem {...props}></PostItem>
}

export default Item
