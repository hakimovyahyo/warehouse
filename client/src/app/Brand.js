import {React, Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Brand extends Component {

    constructor(props) {
        super(props);
        this.state = {brands: []}
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8081/brands/get').then(response => {
            return response.json()
        }).then(data => this.setState({brands: data}))
    }

    async remove(id) {
        console.log(id)
        console.log("DELETE")
        await fetch(`/brands/brand/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    // .then(() => {
    //         let updateBrands = [...this.state.brands].filter(i => i.id !== id);
    //         this.setState({brands: updateBrands});
    //     });
    }

    render() {
        const {brands, updateBrands, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const Brandlist = brands.map(brands => {
            return <tr>
                <td style={{whiteSpace: 'nowrap'}}>{brands.name}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/brands/" + brands.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(brands.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Container fluid>
                    <div className="floar-right">
                        <Button color="success" tag={Link} to="/brands/new">Add New</Button>
                    </div>
                    <h3>Brands</h3>
                    <Table>
                        <thead>
                        <th width="30%">Name</th>
                        </thead>
                        <tbody>
                        {Brandlist}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }

}
export default Brand;

