import { useState, useEffect } from "react";
import Card from "./Card";

function Products({ SearchQuery }) {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        let data = await fetch("http://localhost:3000/products");
        data = await data.json();
        setProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const filteredProducts =
        SearchQuery === ""
            ? products
            : products.filter((p) =>
                  p.title.toLowerCase().includes(SearchQuery.toLowerCase())
              );

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
            }}
        >
            {filteredProducts.map((p) => (
                <Card
                    key={p._id}
                    image={p.image}
                    title={p.title}
                    price={p.price}
                />
            ))}
        </div>
    );
}

export default Products;