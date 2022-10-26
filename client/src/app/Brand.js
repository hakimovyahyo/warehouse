import {React, Component} from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class Brand extends Component{

    constructor(props) {
        super(props);
        this.state = {brands: []}
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/brands/get').
        then(response => response.json()).
        then(data => this.setState({brands: data}))
    }

    async remove(id) {
        await fetch('/brands/brand/delete/${id}', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updateBrands = [...this.state.brands].filter(i => i.id !== id);
            this.setState({brands: updateBrands});
        });
    }

    render() {
        const {brands, updateBrands, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const Brandlist = brands.map(brands => {
            return <tr>
                <td style={{whiteSpace: 'nowrap'}}>{brands.name}{console.log("iauehruiased")}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/clients/" + brands.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(brands.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        })
    }

}
// function Brand() {
//     constructor(props) {
//         super(props);
//         this.state = {brands: []};
//         this.remove = this.remove.bind(this)
//     }
//
//     return (
//         <div>
//             <h1>Yahyo</h1>
//             <Table>
//                 <thead>
//                 <tr>№</tr>
//                 <tr>Name</tr>
//                 <tr>Edit</tr>
//                 <tr>Delete</tr>
//                 </thead>
//                 <tbody>
//                 <tr>1</tr>
//                 <tr>Yahyo</tr>
//                 <tr>
//                     <Button color="primary">Edit</Button>
//                 </tr>
//                 <tr><Button size="sm" color="primary">Delete</Button>
//                 </tr>
//                 </tbody>
//             </Table>
//         </div>
//     )
//
// }

export default Brand;