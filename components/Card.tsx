import "@/components/Card.css"
import Principal from "@/components/Principal"
import Aditional from "@/components/Aditional"

function Card() {
  return (
    <div className="conteiner">
        <Principal></Principal>
        <Aditional></Aditional>
    </div>
  )
}

export default Card