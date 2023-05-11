import React from "react"
import ContentLoader from "react-content-loader";

import './CardItem.scss';


const CardsItemSkeleton = (props) => (
  <ContentLoader 
    className="cardItem"
    speed={2}
    width={280}
    height={750}
    viewBox="0 0 280 750"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="270" height="400" /> 
    <rect x="0" y="416" rx="0" ry="0" width="270" height="20" /> 
    <rect x="0" y="452" rx="0" ry="0" width="270" height="148" /> 
    <rect x="0" y="611" rx="0" ry="0" width="270" height="22" /> 
    <rect x="0" y="642" rx="0" ry="0" width="270" height="20" /> 
    <rect x="0" y="673" rx="0" ry="0" width="270" height="18" /> 
    <rect x="-1" y="706" rx="0" ry="0" width="132" height="20" /> 
    <rect x="140" y="706" rx="0" ry="0" width="132" height="20" />
  </ContentLoader>
)

export default CardsItemSkeleton;