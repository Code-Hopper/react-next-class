import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

const AdminPage = () => {

    let [isAdmin, setIsAdmin] = useState(false)

    let navigate = useNavigate()

    let checkAdmin = () => {
        try {

            let admin = Boolean(localStorage.getItem("admin"))

            console.log(admin)

            if (admin) {
                console.log("hit true")
                setIsAdmin(admin)
            }
            else {
                setIsAdmin(false)
            }


            console.log("admin is : ", isAdmin)

            if (isAdmin) {
                throw ("not an admin")
            }

        } catch (err) {
            console.log("unable to read admin data : ", err)
            setIsAdmin(false)
            navigate("/")
        }
    }

    useEffect(() => {
        checkAdmin()
    },[])

    return (
        <>
            <div>
                welcome admin
            </div>
        </>
    )
}

export default AdminPage
