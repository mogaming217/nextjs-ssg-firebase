import { Const } from 'lib/const'
import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'
import { StyleConst } from 'styles/const'

const _Header = styled.header`
  height: ${StyleConst.HEIGHT.HEADER}px;
  width: 100%;
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  border-bottom: 1px #f0f0f0 solid;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 30px;
    width: auto;
    margin: auto;
    cursor: pointer;
  }
`

export const Header: FC = () => {
  return (
    <_Header>
      <h1>
        <Link href="/">
          <img src="/assets/logo/header_logo.png" alt={Const.SERVICE_NAME} />
        </Link>
      </h1>
    </_Header>
  )
}
