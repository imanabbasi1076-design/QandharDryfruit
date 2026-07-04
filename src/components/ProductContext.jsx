import { createContext } from "react";
import { useState } from "react";
import chilghoza from "../assets/images/chilghoza (2).jpg";
import badaam from "../assets/images/badaam (2).jpg";
import mabroom from "../assets/images/MABROOM KHAJOOR.jpg";
import pistachio from "../assets/images/Pistachio.jpg";
import walnut from "../assets/images/WALNUT.jpg";
import greenRaisins from "../assets/images/GREEN RAISINS.jpg";
import apricot from "../assets/images/APRICOT.jpg";
import cashew from "../assets/images/CASHEW.jpg";
import ajwa from "../assets/images/AJWA KHAJOOR.jpg";
import figs from "../assets/images/FIGS.jpg";
import hazelnut from "../assets/images/HAZELNUT.jpg";
import peanuts from "../assets/images/PEANUTS.jpg";
import blacRaisins from "../assets/images/BLAC RAISINS.jpg";
import kaghziBadaam from "../assets/images/Kaghzi Badaam.jpg";
import roastedCashew from "../assets/images/ROASTED CASHEW.jpg";
import coconut from "../assets/images/COCONUT.jpg";

export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: chilghoza,
      productName: "Chilghoza",
      price: "Rs. 18000 / kg",
      category: "NUTS",
    },
    {
      id: 2,
      image: badaam,
      productName: "Badaam",
      price: "Rs. 4000 / kg",
      category: "NUTS",
    },
    {
      id: 3,
      image: mabroom,
      productName: "Mabroom Khajoor",
      price: "Rs. 5500 / kg",
      category: "DRIED FRUITS",
    },
    {
      id: 4,
      image: pistachio,
      productName: "Pistachio",
      price: "Rs. 3000 / kg",
      category: "NUTS",
    },
    {
      id: 5,
      image: walnut,
      productName: "Walnut",
      price: "Rs. 6000 / kg",
      category: "NUTS",
    },
    {
      id: 6,
      image: greenRaisins,
      productName: "Green Raisins",
      price: "Rs. 2000 / kg",
      category: "DRIED FRUITS",
    },
    {
      id: 7,
      image: apricot,
      productName: "Apricot",
      price: "Rs. 3000 / kg",
      category: "DRIED FRUITS",
    },
    {
      id: 8,
      image: cashew,
      productName: "Cashew",
      price: "Rs. 4000 / kg",
      category: "NUTS",
    },
    {
      id: 9,
      image: ajwa,
      productName: "Ajwa Khajoor",
      price: "Rs. 7000 / kg",
      category: "DRIED FRUITS",
    },
    {
      id: 10,
      image: figs,
      productName: "Figs",
      price: "Rs. 6000 / kg",
      category: "DRIED FRUITS",
    },
    {
      id: 11,
      image: hazelnut,
      productName: "Hazelnut",
      price: "Rs. 4500 / kg",
      category: "NUTS",
    },
    {
      id: 12,
      image: peanuts,
      productName: "Peanuts",
      price: "Rs. 800 / kg",
      category: "NUTS",
    },
    {
      id: 13,
      image: blacRaisins,
      productName: "Black Raisins",
      price: "Rs. 1500 / kg",
      category: "DRIED FRUITS",
    },
    {
      id: 14,
      image: kaghziBadaam,
      productName: "Kaghzi Badaam",
      price: "Rs. 3000 / kg",
      category: "NUTS",
    },
    {
      id: 15,
      image: roastedCashew,
      productName: "Roasted Cashew",
      price: "Rs. 4500 / kg",
      category: "NUTS",
    },
    {
      id: 16,
      image: coconut,
      productName: "Coconut",
      price: "Rs. 2000 / kg",
      category: "NUTS",
    },
  ]);

  function addproduct(product) {
    setProducts([...products, product]);
  }

function updateproduct(name, updatedproduct) {
  setProducts(
    products.map((product) =>
      product.productName === name ? updatedproduct : product,
    ),
  );
}

  function deleteproduct(name) {
    setProducts(products.filter((product) => product.productName !== name));
  }

  return (
    <ProductContext.Provider
      value={{ products, addproduct, updateproduct, deleteproduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
