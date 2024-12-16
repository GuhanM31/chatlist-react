import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./style.css";
import pic from "./assets/images/first.webp";
import pic1 from "./assets/images/pic1.jpeg";
import pic2 from "./assets/images/pic2.jpg";
import pic3 from "./assets/images/pic3.webp";
import pic4 from "./assets/images/pic4.jpg";
import pic5 from "./assets/images/pic5.jpg";

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  const items = [
    { id: 1, name: "Jessica Koel", message: "hi ....", time: "1:32", img: pic },
    { id: 2, name: "Komeial Bolger", message: "i will send you all d..", time: "2:22", img: pic1 },
    { id: 3, name: "Tamaara", message: "may be yes", time: "11:22", img:  pic2 },
    { id: 4, name: "Sam Nielson", message: "what are u doing", time:"12:22", img: pic3 },
    { id: 5, name: "Caroline Nexon", message: "bye...", time:"1:22", img:  pic4 },
    { id: 6, name: "Patrick", message: "start new business..", time: "2:22", img: pic5 },
  ];

  // Filter the items based on the search input
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "#F2F5F7",
        width: "500px",
        height: "630px",
        marginTop: "30px",
        marginLeft: "500px",
        borderRadius: "10px",
      }}
    >
      {/* Search Bar */}
      <div id="searchbar" style={{ padding: "18px" }}>
        <input
          type="text"
          placeholder="  search..."
          style={{
            width: "100%",
            height: "30px",
            border: "black solid 1px",
            borderRadius: "10px",
          }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)} // Update the search value
        />
      </div>

      {/* Display Filtered Items */}
      {filteredItems.map((item) => (
        <div
          key={item.id}
          style={{
            position: "relative",
            margin: "10px 20px",
            width: "92%",
            height: "80px",
            border: "black solid 1px",
            borderRadius: "10px",
            display: "flex",
          }}
        >
          <img
            src={item.img}
            alt="img"
            style={{
              width: "50px",
              padding: "15px",
              borderRadius: "40px",
            }}
          />
          <div style={{ position: "relative", display: "flex", flex: 1 }}>
            <div>
              <p>
                <b>{item.name}</b>
              </p>
              <p style={{ position: "absolute", top: "25px" }}>{item.message}</p>
            </div>
            <div style={{ position: "relative", marginLeft: "auto" }}>
              <p>{item.time}</p>
              <h3 style={{ position: "absolute", top: "21px" }}>❇️</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
