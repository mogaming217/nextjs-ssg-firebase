import React from 'react'
import { NextPage } from 'next'
import { publicEnv } from 'env'
import Link from 'next/link'

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
