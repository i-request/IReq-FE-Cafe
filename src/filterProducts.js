function filterProducts (product, searchTerm) {
    return products.filter(product) => {
      return product.name.toLowerCase().includes(searchTerm)
    }
    
export default filterEmojis