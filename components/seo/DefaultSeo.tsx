import { publicEnv } from 'env'
import { DefaultSeo as DS } from 'next-seo'
import React from 'react'

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
