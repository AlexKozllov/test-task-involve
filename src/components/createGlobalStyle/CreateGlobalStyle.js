import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`  
 /* roboto-regular - latin */
@font-face {
  font-family: 'Roboto-400';
  font-style: normal;
  font-weight: 400;
  
  src: local(''),
           url('../../../puplic/fonts/roboto-v27-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../../puplic/fonts/roboto-v27-latin-regular.woff') format('woff'), /* Modern Browsers */
     }
/* roboto-500 - latin */
@font-face {
  font-family: 'Roboto-500';
  font-style: normal;
  font-weight: 500;
 
  src: local(''),
      
       url('../../../puplic/fonts/roboto-v27-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../../puplic/fonts/roboto-v27-latin-500.woff') format('woff'), /* Modern Browsers */

}
/* roboto-700 - latin */
@font-face {
  font-family: 'Roboto-700';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       
       url('../../../puplic/fonts/roboto-v27-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../../../puplic/fonts/roboto-v27-latin-700.woff') format('woff'), /* Modern Browsers */
     
}
`;

export { GlobalStyle };
