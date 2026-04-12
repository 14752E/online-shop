import Product from "./product.component.jsx";
const ProductFilter = ({filterText, setFilterText}) => {
  const handleFilter = (event) => {
    setFilterText(event.target.value);
  }
  return (

      <div className="filter">
        <input id="filtre" type="text" placeholder="filtrer les produtis" value = {filterText} onChange = {handleFilter} />
      </div>

  );
}
export default ProductFilter;
