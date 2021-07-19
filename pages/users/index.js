import Link from 'next/link'
export async function getStaticProps(context) {

    const req = await fetch("https://60f5a30b18254c00176dffa9.mockapi.io/users")
    const res = await req.json()
    return {
        props: {
            res
        },
        revalidate: 1,
    }
}


const ssr = ({ res }) => {
    return (
        <div>
            <h1>Server Side Rendering</h1>
            {res.map(item => {
                return (
                    <Link href={`/users/${item.id}`} key={item.id}>
                        <div key={item.id}> {item.name} </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ssr
