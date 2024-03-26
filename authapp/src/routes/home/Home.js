import { Button, Spin } from "antd";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "./user-details";
import "../../styles/table.scss";

const Home = () => {
    const [apiStatus, setApiStatus] = useState("init");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setApiStatus("pending");
        (async function () {
            const { success, data } = await fetchAllUsers();
            if (success) {
                setUsers(data);
                setApiStatus("success");
            }
            else setApiStatus("error");
        })();
    }, []);

    if (apiStatus === "init" || apiStatus === "pending") {
        return <Spin />
    }

    if (apiStatus === "error") {
        return <Button>Retry</Button>
    }

    const columns = Object.keys(users[0]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => <th key={index}>{column}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, rowIndex) => {
                            return (
                                <tr key={rowIndex}>
                                    {
                                        columns.map((column, colIndex) => {
                                            return <td key={colIndex}>{user[column]}</td>
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home;