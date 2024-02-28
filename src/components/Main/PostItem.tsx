import React, { FunctionComponent } from 'react'
import * as Style from './style.PostItem'
import { PostFrontmatterType } from 'model/PostItem'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) {
  return (
    <Style.PostItemWrapper to={link}>
      <Style.ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
      <Style.PostItemContent>
        <Style.Title>{title}</Style.Title>
        <Style.Date>{date}</Style.Date>
        <Style.Category>
          {categories.map(category => (
            <Style.CategoryItem key={category}>{category}</Style.CategoryItem>
          ))}
        </Style.Category>
        <Style.Summary>{summary}</Style.Summary>
      </Style.PostItemContent>
    </Style.PostItemWrapper>
  )
}

export default PostItem
