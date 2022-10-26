import React from "react";
import {Button, ButtonGroup, Table} from "reactstrap";
import {Link} from "react-router-dom";

class App extends React.Component {

    state = {brands: [], updateBrands: []}

    async componentDidMount() {
        const query = await fetch('http://localhost:8081/brands/get')
            .then(response => {
                return response.json()
            })
            .then(data => this.setState({brands: data}))
    }

    async remove(id) {
        await fetch('brands/brand/${id}',{
            method: 'DELETE',
        }).then(() => {
            let updateBrands = [...this.state.brands].filter(i => i.id != id);
            this.setState({updateBrands: updateBrands});
        });
    }

    render() {
        const {brands, updateBrands, isLoading} = this.state;
        if (isLoading){
                return <p>Loading...</p>;
        }

        const brandList = brands.map(brands => {

            return <tr key={brands.id}>
                <td style={{whiteSpace: 'nowrap'}}>{brands.name}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} >Edit</Button>
                        <Button>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            //
            // <div>
            //     <Button color="success" tag={Link} to="brands/post">AddNew</Button>
            //     <h3>Brands</h3>
            //     <Table>
            //         <thead>
            //         <tr>
            //             <th>Name</th>
            //             <th>Name</th>
            //             <th>Name</th>
            //         </tr>
            //         </thead>
            //         <tbody>
            //         {brandList}
            //         </tbody>
            //     </Table>
            // </div>

            <div className="App">
                 <header className="App-header">
                     <div className="App-intro">
               <h1>Hakimov</h1>
                         {brands.map(brands =>
                             <div key={brands.id}>{brands.id } {brands.name}</div>
                         )}
                         {brands.name}
                     </div>
                 </header>
             </div>
        )
    }
}

export default App;