import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const dataList = [
    { name: "Printed shirt", price: 2000, price1: 2000, color: "Blue  yellow orange white maroon  ", size: "XS S M L XXL " },
    { name: "Formal shirt", price: 4000, price1: 4000, color: "Blue green white purple maroon  ", size: "XS S M L XL XXL " },
    { name: "Kids shirt ", price: 999, price1: 2000, color: "Blue green yellow orange black white purple maroon  ", size: "XS S M L" },
    { name: "Women shirt", price: 2499, price1: 2499, color: "Blue yellow orange purple maroon  ", size: "XS S M L XL XXL " },
    { name: "Girls shirt", price: 799, price1: 799, color: "Blue green yellow orange black white purple maroon  ", size: "XS L XL XXL " },
    { name: "STRAIGHT LEG jeans", price: 3499, price1: 3499, color: "black white purple maroon  ", size: "XS S M L XL XXL " },
    { name: "SKINNY jeans", price: 1500, price1: 1500, color: "Blue purple maroon  ", size: "S M" },
    { name: "SLIM Fit jeans", price: 2399, price1: 2399, color: "Blue white purple maroon  ", size: "XL XXL " },
    { name: "NARROW fit jeans", price: 1799, price1: 1799, color: "Blue", size: "XS S M L XL XXL " },
    { name: "Tunic Dresses", price: 3599, price1: 3599, color: "Blue green orange black white purple", size: "XS XL XXL " },
    { name: "Straight like a tunic dress", price: 1799, price1: 1799, color: "yellow orange", size: "XS S M L XL XXL " },
    { name: "Pencil Dresses", price: 9999, price1: 9999, color: "Blue green yellow orange black white purple maroon  ", size: "XS S M L XL XXL " },
    { name: "Asymmetric Dresses", price: 4499, price1: 4499, color: "Blue green yellow orange black white purple maroon  ", size: "XS S M L XL XXL " },
    { name: "Bandage Dresses", price: 2399, price1: 2399, color: "Blue green yellow orange black white purple maroon  ", size: "XS S M L XL XXL " },
    { name: "Benarasi Silk Saree", price: 19999, price1: 19999, color: "Blue green yellow orange black white purple maroon  ", size: "Regular" },
    { name: "Kanjeevaram Silk Sarees", price: 21999, price1: 21999, color: "Blue green yellow orange black white purple maroon", size: "Regular" },
    { name: "Kasavu Saree", price: 23999, price1: 23999, color: "Blue green black", size: "Regular" },
    { name: "Paithani Silk Saree ", price: 9899, price1: 9899, color: "purple maroon  ", size: "Regular" }
  ];
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);
  const [data1, setData1] = useState([]);
  const [sortType, setSortType] = useState('');

  // code for search filter
  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    //if nothing is searches, showing the entire dataList
    if (lowercasedValue === "") setData(dataList);
    else {
      const filterData = dataList.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(lowercasedValue));
      });
      setData(filterData);

    }
    setData1([]);


  }

  //code of sort 
  useEffect(() => {
    const sortArray = type => {

      const types = {
        price1: 'price1',
        price: 'price',
        name: 'name'

      };
      const sortProperty = types[type];
      if (sortProperty === 'price') {

        const sorted = [...dataList].sort((a, b) => (b[sortProperty] - a[sortProperty]));
        setData1(sorted);
        setData([]);


      }
      else if (sortProperty === 'price1') {
        const sorted = [...dataList].sort((a, b) => (a[sortProperty] - b[sortProperty]));
        setData1(sorted);
        setData([]);
      }
      else if (sortProperty === 'name') {
        const sorted = [...dataList].sort((a, b) => (a[sortProperty] - b[sortProperty]));
        setData1(sorted);
        setData([]);
      }

    };
    sortArray(sortType);


  }, [sortType]);


  return (
    <div className="App">

      <input placeholder="Search for a keyword" value={searchText} onChange={er => handleChange(er.target.value)} />
      <div>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value='name'>None</option>
          <option value='price1'>Price (low to high)</option>
          <option value='price'>Price (high to low)</option>
        </select>
      </div>


      {(data1.length !== 0) && <div>
        <h2>Total Results Found : {data1.length}</h2>
        <ul>
          {
            data1.map((d, i) => {
              return <div key={i}>
                <li> {d.name}   <ul><li>Rs.{d.price}/-</li>
                  <li>{d.color}</li>
                  <li>{d.size}</li>
                </ul>
                </li>
              </div>
            })
          }
        </ul>
      </div>}
      {(data.length !== 0) && <div>
        <h2>Total Results Found : {data.length}</h2>

        <ul>
          {
            data.map((d, i) => {
              return <div key={i}>
                <li> {d.name}   <ul><li>Rs.{d.price}/-</li>
                  <li>{d.color}</li>
                  <li>{d.size}</li>
                </ul>
                </li>
              </div>
            })
          }
        </ul>

      </div>}

      {data1.length === 0 && data.length === 0 && <span>No Results Found</span>}

    </div>

  )
}
export default App;
