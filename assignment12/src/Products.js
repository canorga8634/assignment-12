import React, { Component } from 'react'
import ProductForm from './ProductForm'
import Filter from './Filter'
import ProductTable from './ProductTable'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

let PRODUCTS = {
    '1': { id: 1, category: 'Home Decor', price: '$350', name: 'Coffee Table' },
    '2': { id: 2, category: 'Home Decor', price: '$900', name: 'Abstract Painting' },
    '3': { id: 3, category: 'Home Decor', price: '$200', name: 'Black Frame' },
    '4': { id: 4, category: 'Meat and Seafood', price: '$150', name: 'Prime Rib' },
    '5': { id: 5, category: 'Produce', price: '$10', name: 'Avocado' },
    '6': { id: 6, category: 'Produce', price: '$5', name: 'Banana' }
}

class Products extends Component {
    state = { filterText: '', products: PRODUCTS }
    handleFilter = (filterInput => {
        this.setState(filterInput)
    })

    handleSave = product => {
        if (!product.id) {
            product.id = new Date().getTime()
        }
        this.setState(prevState => {
            let products = prevState.products
            products[product.id] = product
            return { products }
        })
    }

    handleDestroy = productId => {
        this.setState(prevState => {
            let products = prevState.products
            delete products[productId]
            return { products }
        })
    }
    render() {
        return (
            <>
                <Container>
                    <Col xs={5}>
                        <h1>My Inventory</h1>
                        <Filter onFilter={this.handleFilter} />
                        <ProductTable
                            products={this.state.products}
                            filterText={this.state.filterText}
                            onDestroy={this.handleDestroy}
                        />
                    </Col>
                    <Col xs={3}>
                        <ProductForm onSave={this.handleSave} />
                    </Col>
                </Container>
            </>
        )
    }
}

export default Products