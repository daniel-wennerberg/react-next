import Link from 'next/link'

const Main = () => (
    <div>
        Main Page
        <div>
            <Link href={"/about"}>About</Link>
        </div>
	</div>
)

export default Main