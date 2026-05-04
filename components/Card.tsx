import "@/components/Card.css"
import Principal from "@/components/Principal"
import Aditional from "@/components/Aditional"

type Props = {
    color: string;
};

function Card( {color}: Props) {
  return (
    <div className="conteiner">
        <Principal color={color}/>
        <Aditional></Aditional>
    </div>
  )
}

export default Card