import {useRouter} from "next/router";
import css from "/styles/User.module.scss"
import MainContainer from "../../component/MainContainer";

const User = ({user}) => {
    const {query} = useRouter()
    return (
        <MainContainer keyword={"Profile" + user.name + "page"}>
        <div className={css.user}>
            <h1> User with id {query.id}</h1>
            <div>Name user: {user.name}</div>
        </div>
        </MainContainer>
    )
}

export default User

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return {
        props: {user}
    }
}