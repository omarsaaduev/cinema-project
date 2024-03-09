import { memo } from "react";
import About from "../../components/About/About";

function AboutPageComponent() {
  return (
    <>
      <About/>
    </>
  )
}

export const AboutPage = memo(AboutPageComponent)
