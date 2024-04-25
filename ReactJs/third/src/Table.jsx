import TableRow from "./TableRow";
const Table = () => {
    return (
        <table className="container table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <TableRow name="Bhagirath" email="Bhagirath@gmail.com" contact="1234567890" />
                <TableRow name="Divya" email="Divya@gmail.com" contact="5349582304" />
                <TableRow name="Rahul" email="Rahul@gmail.com" contact="8104923849" />
            </tbody>
        </table>
    )
}