import { motion } from "framer-motion";
import {
  SvgAnimation,
  PolygonAnimation,
  LoadingAnimation,
} from "../utils/animations";
const Loading = () => {
  const styles = `
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
    opacity:0.7
}
.loading svg{
    font-size: 5px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1px;
    animation: text 1s ease-in-out infinite;
}
@keyframes text{
    50%{ opacity: 0.1;}
}
.loading polygon{
    stroke-dasharray: 22;
    stroke-dashoffset: 1;
    animation: dash 4s cubic-bezier(0.455, 0.03, 0.515, 0.955)
    infinite alternate-reverse;
}
@keyframes dash{
    to{stroke-dashoffset: 234;}
}`;
  return (
    <div className="fixed flex items-center justify-center w-full h-full text-center bg-gray-600 text-white top-0 left-0 z-50 loading">
      <style> {styles}</style>
      <svg width="205" height="250" viewBox="0 0 40 50">
        <polygon
          strokeWidth="1"
          stroke="#fff"
          fill="none"
          points="20,1 40,40 1,40"
        ></polygon>
        <text fill="#fff" x="5" y="47">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default Loading;
