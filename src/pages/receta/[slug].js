import Link from "next/link";
import { useRouter } from "next/router"

const Receta = () => {
    const router = useRouter();

    return (
        <div>
            <HeaderImg imagen = "/images/burger.jpg" height = "500px" texto = "Hamburguesa"/>
        </div>)
}

export default Receta