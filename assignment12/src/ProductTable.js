import React, { Component } from 'react'
import ProductRow from './ProductRow'
import Table from 'react-bootstrap/Table'

class ProductTable extends Component {
  handleDestroy = id => {
    this.props.onDestroy(id)
  }
  renderTable = (productArray, filterText) => {
    let rows = []
    let filterTextLowerCase = filterText.toLowerCase()
    productArray.forEach((product, index) => {
      if (product.name.toLowerCase().indexOf(filterTextLowerCase) === -1) {
        return
      }
      rows.push(<ProductRow key={index} index={index} onDestroy={this.handleDestroy} product={product} />)
    })
    return rows
  }
  convertObjToArray = obj => {
    let productsArray = Object.keys(obj).map(pid => obj[pid])
    return productsArray
  }
  render() {
    const { products, filterText } = this.props
    return (
      <Table striped hover size="sm">
        <thead>
          <tr style={{color: "white", backgroundColor: "#404040"}}>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{this.renderTable(this.convertObjToArray(products), filterText)}</tbody>
      </Table>
    )
  }
}

export default ProductTable