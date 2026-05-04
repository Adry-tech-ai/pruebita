import "@/components/Principal.css"
import ImageConteiner from "@/components/ImageConteiner"
import MessageConteiner from "@/components/MessageConteiner"

type Props = {
    color: string;
};
function Principal({color}: Props) {
  return (
    <div className="superior">
        <MessageConteiner></MessageConteiner>
        <ImageConteiner color={color}/>
    </div>
  )
}

export default Principal