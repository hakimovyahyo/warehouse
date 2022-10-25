import {Button, Table} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Brand() {

    return (
        <div>
            <h1>Yahyo</h1>
            <Table>
                <thead>
                <tr>№</tr>
                <tr>Name</tr>
                <tr>Edit</tr>
                <tr>Delete</tr>
                </thead>
                <tbody>
                <tr>1</tr>
                <tr>Yahyo</tr>
                <tr>
                    <Button color="primary">Edit</Button>
                </tr>
                <tr><Button size="sm" color="primary">Delete</Button>
                </tr>
                </tbody>
            </Table>
        </div>
    )

}

export default Brand;