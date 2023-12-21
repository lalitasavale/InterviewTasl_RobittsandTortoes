

const TableStructure =()=>{
    return(
<div>
    <h1>Table structure</h1>
    <table border={'1px'} >
        <thead>
        <tr> <th colSpan={7}>Student Record</th></tr>
            <tr >
            <th>Standard</th>
                <th>Sr.No</th>
                <th> First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Class</th>
                <th>Mobile</th>
            </tr>
        </thead>
        <tbody>
        <tr> <th rowSpan={6}>1st</th> <td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td></tr>
        <tr><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td></tr>
        <tr><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td colSpan={2}>skjfks</td><td>skjfks</td></tr>
        <tr><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td></tr>
        <tr><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td></tr>
        <tr><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td rowSpan={2}>skjfks</td></tr>
        <tr><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td><td>skjfks</td></tr>
        </tbody>
    </table>
</div>
    );
}

export default  TableStructure;

