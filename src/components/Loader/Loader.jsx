import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={230}
    height={348}
    // viewBox="0 0 430 865"
    backgroundColor="#b1aaaa"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="233" height="280" /> 
    <rect x="0" y="290" rx="5" ry="5" width="190" height="20" /> 
    <rect x="0" y="320" rx="5" ry="5" width="111" height="13" /> 
    <rect x="130" y="320" rx="5" ry="5" width="77" height="13" />
  </ContentLoader>
)

export default Loader