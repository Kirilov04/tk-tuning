import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Benefit from './Benefit'; // Използва се default export
import { motion } from 'framer-motion';

// Интерфейс за продукта
interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProductsSection = ({
  setSelectedPage,
}: {
  setSelectedPage: (value: SelectedPage) => void;
}) => {
  const [products, setProducts] = useState<Product[]>([]); // Типизираме продуктите
  const [loading, setLoading] = useState<boolean>(true);

  // Функция за извличане на данни от API-то
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data); // Добави лог тук
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []); // Заявката се изпълнява само при първоначално зареждане

  // Проверка дали данните се зареждат
  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <motion.div className="products-section mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Benefit
          key={product.id}
          icon={
            <img
              src={product.image}
              alt={product.title}
              className="h-16 w-16 object-cover"
            />
          }
          title={product.title}
          description={product.description}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </motion.div>
  );
};

const Benefits = ({
  setSelectedPage,
}: {
  setSelectedPage: (value: SelectedPage) => void;
}) => {
  return (
    <section id="benefits" className="py-16">
      <h2 className="mb-10 text-center text-3xl font-bold">Our Products</h2>
      <ProductsSection setSelectedPage={setSelectedPage} />
    </section>
  );
};

export default Benefits;
