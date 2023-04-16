import Link from "next/link";
import { useRouter } from "next/router"

const Receta = () => {
    const router = useRouter();

    return (
        <div>
            Receta {/*router.query.slug*/}
            <Link href = "/">
                Back to home
            </Link>
        </div>)
}

export default Receta