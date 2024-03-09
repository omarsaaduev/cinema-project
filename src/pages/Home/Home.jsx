import { memo } from "react";
import {Latest} from "../../components/Latest/Latest";
import {Movie} from "../../components/Movie/Movie";
import {Upcoming} from "../../components/Upcoming/Upcoming";


function HomeComponent() {
  
  return (
    <>
        <Movie/>
        <Latest />
        <Upcoming/>
    </>
  )
}

export const Home = memo(HomeComponent)

