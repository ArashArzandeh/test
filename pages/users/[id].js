export const getStaticPaths = async () => {
    const req = await fetch("https://60f5a30b18254c00176dffa9.mockapi.io/users")
    const res = await req.json()

    const paths = res.map(item => {
        return {
            params: { id: item.id }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps(context) {
    const id = context.params.id
    const req = await fetch("https://60f5a30b18254c00176dffa9.mockapi.io/users/" + id)
    const res = await req.json()
    return {
        props: {user: res}
    }
}

function User({ user }) {
    return (
        <div>
            hello
                {user.name}
        </div>
    )
}

export default User
