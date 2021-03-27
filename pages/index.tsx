import { publicEnv } from 'env'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const RootPage: NextPage = () => {
  return (
    <div>
      top page {publicEnv.appEnv}
      <br />
      <Link href="/terms">
        <a href="/terms">terms</a>
      </Link>
      <div>
        <img src="/assets/sample.jpg" alt="QRコード" />
      </div>
    </div>
  )
}

export default RootPage
