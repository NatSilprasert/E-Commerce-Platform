import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {

    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    const fetchProductData = () => {
        const found = products.find((item) => item._id === productId);
        if (found) {
            setProductData(found);
            setImage(found.image[0]);
        }
    }

    useEffect(() => {
        fetchProductData();
    },[productId, products]);

    return productData ? (
        <div className='transition-opacity ease-in duration-500 opacity-100'>
            {/* Product Data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                {/* Product Images */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item, key) => (
                                <img
                                    onClick={() => setImage(item)}
                                    src={item} 
                                    key={key} 
                                    alt="" 
                                    className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                                />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="" />
                    </div>
                </div>

                {/* --- Product Info --- */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                        <p className='pl-2'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, key) => (
                                <button 
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-black" : "border-gray-300"}`} 
                                    key={key}  
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button 
                        onClick={() => addToCart(productId, size)}
                        className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
                    >
                        ADD TO CART
                    </button>
                    <hr className='mt-8 sm:w-4/5 border-t border-gray-300'/>
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div> 

            {/* --- Description & Review Section ---  */}
            <div className='mt-20'>
                <div className='flex'>
                    <p className='border border-b-0 px-5 py-3 text-sm font-bold'>Description</p>
                    <p className='border border-b-0 border-l-0 px-5 py-3 text-sm'>Reviews (122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corrupti doloremque odit repellendus corporis distinctio quaerat, officia necessitatibus non doloribus. Numquam fuga veritatis earum qui corrupti aut necessitatibus tempore ipsa.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cupiditate vel odio provident commodi asperiores veritatis nam ex. Delectus, aliquid!</p>
                </div>
            </div>

            {/* --- display related product --- */}
            <RelatedProduct 
                category={productData.category}
                subCategory={productData.subCategory}
            />
        </div>
    ) : <div className='opacity-0'></div>
}

export default Product
