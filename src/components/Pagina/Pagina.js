import Produtos from "../Produtos/Produtos";
import { StyleTotal, StylePage, ListStyle } from "./styles";
import { products } from "../../data/data";
import { useState } from "react";

const Pagina = () => {
  const [filteredItems, setFilteredItems] = useState(products);
  const [sortedItems, setSortedItems] = useState(products);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(Infinity);
  const [name, setName] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("nameAsc")

  const handleFilterMin = (event) => {
    setPriceMin(parseInt(event.target.value));
    handleSearch();
  }

  const handleFilterMax = (event) => {
    setPriceMax(parseInt(event.target.value));
    handleSearch();
  }

  const handleFilterName = (event) => {
    setName(event.target.value);
    handleSearch();
  }
  
  const sortByNameAsc = () => {
    return filteredItems.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  const sortByNameDesc = () => {
    return filteredItems.slice().sort((a, b) => b.name.localeCompare(a.name));
  }

  const sortByPriceAsc = () => {
    return filteredItems.sort((a, b) => a.price - b.price);
  }

  const sortByPriceDesc = () => {
    return filteredItems.sort((a, b) => b.price - a.price);
  }

  const handleSearch = () => {
    let filteredItems = products.filter(item => item.price >= priceMin && item.price <= priceMax);
    if (name) {
    filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
    }
    setFilteredItems(filteredItems);
    setSortedItems(filteredItems);
  }

  const handleOrder = (event) => {
    setSelectedOrder(event.target.value);
    if (event.target.value === 'nameAsc') {
        setSortedItems(sortByNameAsc());
    } else if (event.target.value === 'nameDesc') {
        setSortedItems(sortByNameDesc());
    } else if (event.target.value === 'priceAsc') {
        setSortedItems(sortByPriceAsc());
    } else if (event.target.value === 'priceDesc') {
        setSortedItems(sortByPriceDesc());
    }
  }

  return (
    <StyleTotal>
      <StylePage>
        {sortedItems.map((item, index) => {
          return (
            <div>
              <Produtos
                key={index}
                name={item.name}
                imageUrl={item.imageUrl}
                imageAlt={item.imageAlt}
                price={item.price}
                item={item}
              />
            </div>
          )
        })}
      </StylePage>
      <ListStyle>
        <select  value={selectedOrder}onChange={handleOrder}>
          <option value="" disabled selected>Selecione a ordenação</option>
          <option value="nameAsc">A-Z</option>
          <option value="nameDesc">Z-A</option>
          <option value="priceAsc">Preço crescente</option>
          <option value="priceDesc">Preço decrescente</option>
        </select>
        <label>
          Valor mínimo:
          <input
            type="number"
            value={priceMin}
            onChange={handleFilterMin}
          />
        </label>
        <label>
          Valor máximo:
          <input
            type="number"
            value={priceMax}
            onChange={handleFilterMax}
            />
            </label>
            <label>
              Busca por nome:
              <input
                type="text"
                value={name}
                onChange={handleFilterName}
              />
            </label>
            <button onClick={handleSearch}>Pesquisar</button>
          </ListStyle>
        </StyleTotal>
      );
    };
    
    export default Pagina;
      
