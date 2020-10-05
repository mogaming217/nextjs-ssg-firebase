import React from 'react'
import { DefaultSeo as DS } from 'next-seo'
import { publicEnv } from 'env'

export const DefaultSeo = () => (
  <DS
    openGraph={{
      url: publicEnv.host,
      locale: 'ja_JP',
    }}
    twitter={{
      cardType: 'summary_large_image',
    }}
  />
)
