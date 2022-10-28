import React, {Component} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button,ButtonGroup, Container, Form, FormGroup, Input, Label, Table} from 'reactstrap';
import AppNavbar from '../AppNavbar';


class ProductType extends Component {
    constructor(props) {
        super(props);
        this.state = {productTypes: []}
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8081/productType/get').then(response => {
            return response.json()
        }).then(data => this.setState({productTypes: data}))
    }

    async remove(id) {
        await fetch(`/productType/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updateProductType = [...this.state.brands].filter(i => i.id !== id);
            this.setState({brands: updateProductType});
        });
    }


    render() {
        const {productTypes, updateProductTypes, isLoading} = this.state;

        const ProductTypeList = productTypes.map(productTypes => {
            return <tr>
                <td style={{whiteSpace: 'nowrap'}}>{productTypes.name}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/productType/" + productTypes.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(productTypes.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        })

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <Container fluid>
                    <div className="floar-right">
                        <Button color="success" tag={Link} to="/brands/post">Add New</Button>
                    </div>
                    <h3>Product Types</h3>
                    <Table>
                        <thead>
                        <th width="30%">Name</th>
                        </thead>
                        <tbody>
                        {ProductTypeList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }

}

export default ProductType;