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
        await fetch(`/brands/brand/delete/${id}`, {
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
                <td style={{whiteSpace: 'nowrap'}}>{brands.name}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/clients/" + brands.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(brands.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <Container fluid>
                    <div className="floar-right">
                        <Button color="success" tag={Link} to="/brands/post">Add New</Button>
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

// _______________________________________________________
//     state = {brands: [], updateBrands: []}
//
//     async componentDidMount() {
//         //http://localhost:8081/productType/get
//         const query = await fetch('http://localhost:8081/brands/get')
//             .then(response => {
//                 return response.json()
//             })
//             .then(data => this.setState({brands: data}))
//     }
//
//     async remove(id) {
//         await fetch('/brand/${id}',{
//             method: 'DELETE',
//         }).then(() => {
//             let updateBrands = [...this.state.brands].filter(i => i.id != id);
//             this.setState({updateBrands: updateBrands});
//         });
//     }
//
//     render() {
//         const {brands, updateBrands, isLoading} = this.state;
//         if (isLoading){
//             return <p>Loading...</p>;
//         }
//
//         const brandList = brands.map(brands => {
//
//             return <tr key={brands.id}>
//                 <td style={{whiteSpace: 'nowrap'}}>{brands.name}</td>
//                 <td>
//                     <ButtonGroup>
//                         <Button size="sm" color="primary" tag={Link} >Edit</Button>
//                         <Button>Delete</Button>
//                     </ButtonGroup>
//                 </td>
//             </tr>
//         });
//
//         return (
//             //
//             // <div>
//             //     <Button color="success" tag={Link} to="brands/post">AddNew</Button>
//             //     <h3>Brands</h3>
//             //     <Table>
//             //         <thead>
//             //         <tr>
//             //             <th>Name</th>
//             //             <th>Name</th>
//             //             <th>Name</th>
//             //         </tr>
//             //         </thead>
//             //         <tbody>
//             //         {brandList}
//             //         </tbody>
//             //     </Table>
//             // </div>
//
//             <div className="App">
//                 <header className="App-header">
//                     <div className="App-intro">
//                         <h1>Hakimov</h1>
//                         {brands.map(brands =>
//                             <div key={brands.id}>{brands.id } {brands.name}</div>
//                         )}
//                         {brands.name}
//                     </div>
//                 </header>
//             </div>
//         )
//     }
// }
//
// export default Brand;