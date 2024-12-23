import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Dashboaed() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("hy");

    const [fatch, setFatch] = useState([]);



    useEffect(() => {
        const abcd = localStorage.getItem("user")
        if (abcd) {
            const datatemp = JSON.parse(abcd)
            setUser(datatemp)
            GTUser();
        } else {
            navigate('/login');
            alert("Login First")
        }

    }, [navigate])

    const handler = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4500/user/upd/${user._id}`, {
                firstName,
                lastName,
                email
            })
            setMessage("User Updated")

        } catch (error) {
            setMessage(" Updated Failed")
        }
    }


    const GTUser = async () => {
        try {
            const all = await axios.get("http://localhost:4500/user/users");

            console.log(all.data);
            setFatch(all.data)
        } catch (error) {

        }

    }
    const DltUsr = async () => {
        try {
            const Deleteduser = await axios.delete(`http://localhost:4500/user/dlt/${user._id}`);
            if (Deleteduser) {
                alert("Account Deleted");
                navigate('/login')
            }

        } catch (error) {

        }
    }

    const AllDlt = async (temp) => {
        try {
            const Deleteduser = await axios.delete(`http://localhost:4500/user/dlt/${temp}`);
            if (Deleteduser) {
                alert("one User Deleted");
                GTUser();
            }

        } catch (error) {

        }
    }
    return (
        <div className='grid w-screen gap-5 sm:grid-cols-3 '>
            <div className='sm:col-span-2 gap-10 sm:min-h-screen items-center  flex flex-col rounded-3xl bg-zinc-200' >
                <h2>Hello {user ? <>{user.firstName} {user.lastName}</> : <>Loading...</>}</h2>
                <div>
                    <h1>Update Your Details</h1>
                    <form onSubmit={handler} className='  text-white flex flex-col gap-3 bg-zinc-950 p-10 rounded-lg' >
                        <input className='text-black' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} type="text" placeholder='First Name' />
                        <input className='text-black' value={lastName} onChange={(e) => { setLastName(e.target.value) }} type="text" placeholder='last Name' />
                        <input className='text-black' value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder='email' />
                        <button className=' border-2 rounded-lg' type="submit">Submie</button>
                        <h2 className='text-white'>{message}</h2>

                    </form>
                </div>

            </div>
            <div className=' sm:col-span-1 min-h-screen flex  items-center flex-col p-4 rounded-3xl px-4 gap-5 bg-zinc-200'>
                <button onClick={GTUser} className=' px-4 p-2 border-[1px] w-1/4 rounded-sm bg-slate-500'>All Users</button>
                {fatch.map((hello) => {
                    return (
                        <div className='flex text-left bg-orange-200 justify-between px-8 rounded-lg w-full p-2  gap-1 '>
                            <div><h2>FirstName:{hello.firstName}</h2>
                                <h2>LasttName:{hello.lastName}</h2>
                                <h2>Email:{hello.email}</h2>
                            </div>
                            <div className=' h-full flex items-center'>
                                <button onClick={() => { AllDlt(hello._id) }} className=' p-1 rounded-lg px-4 bg-black text-white'>Delete</button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Dashboaed
