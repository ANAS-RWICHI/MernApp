import { useState , useEffect} from "react";

function Table() {


    const [data, setData] = useState([]as any);

    useEffect(() => {
        fetch("http://localhost:3000/employees")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    <th scope="col">position</th>
                    <th scope="col">department</th>
                    <th scope="col">salary</th>
                    <th scope="col">phone</th>
                    <th scope="col">email</th>
                    <th scope="col">comment</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row: any) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.position}</td>
                        <td>{row.department}</td>
                        <td>{row.salary}</td>
                        <td>{row.phone}</td>
                        <td>{row.email}</td>
                        <td>{row.comment}</td>
                        <td><button type="button" className="btn btn-primary">Edit</button></td>
                        <td><button type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
                ))} 
            </tbody>
        </table>
        </>
    );
}

export default Table;