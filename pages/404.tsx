import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <div>Not Found</div>
      <Link href="/">
        <a>TOP</a>
      </Link>
    </div>
  )
}

export default NotFoundPage
