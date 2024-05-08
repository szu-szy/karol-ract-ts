import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
};

type ProductExtended = Product & {
  price: number;
};

export const Get = () => {
  const [products, setProducts] = useState<ProductExtended[]>([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");

      if (!res.ok) throw new Error("Something goes wrong!");

      const { products } = await res.json();

      setProducts(products);
      console.log(products);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteProducts = async (id: number) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      if (!res.ok) throw new Error("smt goes wrong");
      const product = await res.json();

      console.log(product);
    } catch (e) {
      console.log(e);
    }
  };

  const addProduct = async () => {
    try {
        const res = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: 'test',
                price: 10
            })
        })

        if(!res.ok) throw new Error('cannot add new product!');

        const product = await res.json();

        console.log(product);
        // {id: 101, title: 'test, price: 10}
        
    } catch(e) {
        console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
    deleteProducts(5);
  }, []);

  return (
    <div>
      <h2>Get method</h2>
    </div>
  );
};
