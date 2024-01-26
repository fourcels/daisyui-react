import React from 'react'

export type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export const CardImage = React.forwardRef<HTMLElement, CardImageProps>(
  ({ ...props }, ref) => {
    return (
      <figure ref={ref}>
        <img {...props} />
      </figure>
    )
  }
)

CardImage.displayName = 'CardImage'