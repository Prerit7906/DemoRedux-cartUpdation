import ProductItem from './ProductItem';
import classes from './Products.module.css';
const dummyItems=[
  {
    id:'m1',
    title:'Table',
    price:6,
    description:'This is a first product - amazing!'
  },
  {
    id:'m2',
    title:'Chair',
    price:7,
    description:'This is a second product - amazing!'
  },
  {
    id:'m3',
    title:'Bed',
    price:11,
    description:'This is a third product - amazing!'
  },
  {
    id:'m4',
    title:'Fan',
    price:8,
    description:'This is a fourth product - amazing!'
  },
];
const Products = (props) => {
  const Items=dummyItems.map(item=>
  <ProductItem
    key={item.id}
    id={item.id}
    title={item.title}
    price={item.price}
    description={item.description}
  />
  );
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Items}
      </ul>
    </section>
  );
};

export default Products;
