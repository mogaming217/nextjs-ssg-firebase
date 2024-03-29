import { createGlobalStyle } from 'styled-components'
import { StyleConst } from 'styles/const'
import { resetCss } from 'styles/reset'

export const GlobalStyle = createGlobalStyle`
  ${resetCss}

  body {
    color: ${StyleConst.COLOR.LABEL};
    font-size: ${StyleConst.FONT.BASE}px;
    font-family: "Hiragino Sans", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "ヒラギノ角ゴシック", "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  }

  a {
    color: ${StyleConst.COLOR.LABEL};
    text-decoration: none;
  }

  h2 {
    font-size: ${StyleConst.FONT.XLARGE}px;
    font-weight: ${StyleConst.FONT_WEIGHT.BOLD};
    padding: 16px 0px;
  }

  input {
    color: ${StyleConst.COLOR.LABEL};
  }

  input::placeholder {
    color: ${StyleConst.COLOR.PLACEHOLDER};
  }

  input::-ms-input-placeholder {
    color: ${StyleConst.COLOR.PLACEHOLDER};
  }

  input::-webkit-input-placeholder {
     color: ${StyleConst.COLOR.PLACEHOLDER};
  }
`
