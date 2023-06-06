import { css } from "styled-components";

export const inter = css`
  /*
Font families defined by this CSS:

- "Inter"                  static "traditional" fonts for older web browsers
- "Inter var"              single-axis variable fonts for all modern browsers
- "Inter var experimental" multi-axis variable fonts for some modern web browsers

Use like this in your CSS:

  :root { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    :root { font-family: 'Inter var', sans-serif; }
  }

------------------------- static ------------------------- */
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: url('font-files/Inter-Thin.woff2?v=3.19') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: url('font-files/Inter-ThinItalic.woff2?v=3.19') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url('font-files/Inter-ExtraLight.woff2?v=3.19') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: url('font-files/Inter-ExtraLightItalic.woff2?v=3.19') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url('font-files/Inter-Light.woff2?v=3.19') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url('font-files/Inter-LightItalic.woff2?v=3.19') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('font-files/Inter-Regular.woff2?v=3.19') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('font-files/Inter-Italic.woff2?v=3.19') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('font-files/Inter-Medium.woff2?v=3.19') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url('font-files/Inter-MediumItalic.woff2?v=3.19') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('font-files/Inter-SemiBold.woff2?v=3.19') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url('font-files/Inter-SemiBoldItalic.woff2?v=3.19') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('font-files/Inter-Bold.woff2?v=3.19') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('font-files/Inter-BoldItalic.woff2?v=3.19') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url('font-files/Inter-ExtraBold.woff2?v=3.19') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url('font-files/Inter-ExtraBoldItalic.woff2?v=3.19') format('woff2');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url('font-files/Inter-Black.woff2?v=3.19') format('woff2');
  }
  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url('font-files/Inter-BlackItalic.woff2?v=3.19') format('woff2');
  }

  /* ----------------------- variable ----------------------- */

  @font-face {
    font-family: 'Inter var';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url('font-files/Inter-roman.var.woff2?v=3.19') format('woff2');
    font-named-instance: 'Regular';
  }

  @font-face {
    font-family: 'Inter var';
    font-style: italic;
    font-weight: 100 900;
    font-display: swap;
    src: url('font-files/Inter-italic.var.woff2?v=3.19') format('woff2');
    font-named-instance: 'Italic';
  }

  /* ----------- experimental multi-axis variable -----------

Slant axis is not yet widely supported (as of February 2019) and thus this
multi-axis single-file variable font is opt-in rather than the default.
When using this, you will likely need to set font-variation-settings explicitly, e.g:
  * { font-variation-settings: "slnt" 0deg }
  .italic { font-variation-settings: "slnt" 10deg }
*/

  @font-face {
    font-family: 'Inter var experimental';
    font-style: oblique 0deg 10deg;
    font-weight: 100 900;
    font-display: swap;
    src: url('font-files/Inter.var.woff2?v=3.19') format('woff2');
  }

  /* Legacy name (became legacy on Feb 2, 2019) */
  @font-face {
    font-family: 'Inter var alt';
    font-weight: 100 900;
    font-style: normal;
    font-named-instance: 'Regular';
    font-display: swap;
    src: url('font-files/Inter-roman.var.woff2?v=3.19') format('woff2');
  }
  @font-face {
    font-family: 'Inter var alt';
    font-weight: 100 900;
    font-style: italic;
    font-named-instance: 'Italic';
    font-display: swap;
    src: url('font-files/Inter-italic.var.woff2?v=3.19') format('woff2');
  }
`;