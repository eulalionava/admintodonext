'use client'

import { useSession } from "next-auth/react";
import { useEffect } from "react";


export default function ProfilePage() {
    const {data:session} = useSession();

    useEffect(()=>{
        console.log(session?.user);
    },[]);

    return (
        <div>
            <h1>Profile Page</h1>
            <hr/>
            <div className="flex flex-col">
                <span>{session?.user?.name ?? 'No Name'}</span>
                <span>{session?.user?.email ?? 'No email'}</span>
                <span>{session?.user?.image ?? 'No Image'}</span>
            </div>

        </div>
    );
}