import { useEffect, useState } from "react";

// 재사용 가능한 커스텀 훅
export default function useProducts({salesOnly}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err)=>{ setError('에러가 발생했음')})
      .finally(()=> setLoading(false))
  }, [salesOnly]);

  return [loading, error, products];
}