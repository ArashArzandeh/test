// export async function getStaticPaths() {
//     const req = await fetch("https://60f5a30b18254c00176dffa9.mockapi.io/users")
//     const res = await req.json()

//     const paths = res.map(item => {
//         return {
//             params: { id: item.id.toString() }
//         }
//     })

//     return {
//         paths,
//         fallback: 'blocking'
//     }
// }


export async function getStaticProps(context) {
    const id = context.params.id
    const req = await fetch("https://60f5a30b18254c00176dffa9.mockapi.io/users/" + id)
    const res = await req.json()
    return {
        props: {user: res},
        revalidate: 2
    }
}

function User({ user }) {
    console.log(user)
    if (!user.name) return(
        <div> Loading </div>
    )
    return (
        <div>
            hello
                {user.name}
        </div>
    )
}

export default User
