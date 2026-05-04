import "@/components/Principal.css"
import ImageConteiner from "@/components/ImageConteiner"
import MessageConteiner from "@/components/MessageConteiner"

function Principal() {
  return (
    <div className="superior">
        <MessageConteiner></MessageConteiner>
        <ImageConteiner></ImageConteiner>
    </div>
  )
}

export default Principal