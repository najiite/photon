import { Hero } from "../components/Hero"
import Portfolio from "../components/Portfolio"


const work = () => {
  return (
    <div>
        <Hero heading='My Portfolio'  message='Some of my recent work'/>
        <Portfolio />
    </div>
  )
}

export default work