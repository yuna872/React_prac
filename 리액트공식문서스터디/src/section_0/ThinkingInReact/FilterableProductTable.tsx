import React, { Dispatch, ReactNode, SetStateAction } from "react";

/*
1. UI를 컴포넌트 계층 구조로 나누기
2. React로 정적인 UI 만들기
3. 최소한의 완전한 UI state 만들기
4. state가 어디에 있어야 할지 파악하기
5. 역방향 데이터 흐름 추가하기

state
1. 전체 목록 보여주기
2. 입력한 검색어에 따른 필터링 -> keyword, products
3. 재고가 있는 상품 필터링 -> checked, products
 */

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows: ReactNode[] = [];
  let lastCategory: null = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

type TSearchBarProps = {
  setKeyword: Dispatch<SetStateAction<string>>;
  setInStockOnly: Dispatch<SetStateAction<boolean>>;
  inStockOnly: boolean;
};

function SearchBar({
  setKeyword,
  inStockOnly,
  setInStockOnly,
}: TSearchBarProps) {
  return (
    <form
      style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}
    >
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}

/*
1. props 변경에 따른 렌더링 사이클
2. 내부 state 변경에 따른 렌더링 사이클

useState와 같은 Hook은 컴포넌트의 원래 렌더링 사이클에 "끼어들게(Hook Into)" 해준다.
*/

function FilterableProductTable({ products }) {
  const [keyword, setKeyword] = React.useState("");
  const [inStockOnly, setInStockOnly] = React.useState(false);

  const filteredProducts = inStockOnly
    ? products.filter((item) => item.name.includes(keyword) && item.stocked)
    : products.filter((item) => item.name.includes(keyword));

  return (
    <div style={{ margin: "20px" }}>
      <SearchBar
        setKeyword={setKeyword}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

type TProduct = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};
// 원본
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function ThinkingInReact() {
  return <FilterableProductTable products={PRODUCTS} />;
}
