import "@/components/ImageConteiner.css"

type Props = {
    color: string;
};

function ImageConteiner({color}:Props) {
  return (
    <div className={`contenedor ${color}`}>
        <img src="/Vector.svg" alt="icon" />
    </div>
  )
}

export default ImageConteiner