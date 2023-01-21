import {useEffect, useState} from "react";
import Link from "next/link";
import MainContainer from "../component/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer keyword={"users page"}>
            <h1>List users</h1>
            <ul>
                {users.map(user =>
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.name}</Link>

                </li>
                )}
            </ul>
        </MainContainer>
    )
}

export default Users

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {users}
    }
}