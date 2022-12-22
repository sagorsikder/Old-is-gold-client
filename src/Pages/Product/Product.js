import {React} from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';


const Product = () => {

    const category = useLoaderData()
    const products = category[0].products;
    return (
        <div className='grid md:grid-cols-2 mt-5 w-3/4 mx-auto'>
            {
                products.map(pdct=><ProductCard product={pdct}></ProductCard>)
            }
        </div>
    );
};

export default Product;