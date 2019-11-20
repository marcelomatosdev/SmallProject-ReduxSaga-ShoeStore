import React from 'react';
import {MdAddShoppingCart} from 'react-icons/md';

import {ProductList} from './styles';

export default function Home(){
   return(
   <ProductList>
      <li>
         <img src="https://images.footlocker.com/is/image/EBFL2/4523455_a1?wid=640&hei=640&fmt=png-alpha" alt="Vans" />
         <strong>Nice shoes</strong>
         <span>CAD 99.88</span>

         <button type="button">
            <div>
               <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
         </button>
      </li>
      <li>
         <img src="https://images.footlocker.com/is/image/EBFL2/4523455_a1?wid=640&hei=640&fmt=png-alpha" alt="Vans" />
         <strong>Nice shoes</strong>
         <span>CAD 99.88</span>

         <button type="button">
            <div>
               <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
         </button>
      </li>
      <li>
         <img src="https://images.footlocker.com/is/image/EBFL2/4523455_a1?wid=640&hei=640&fmt=png-alpha" alt="Vans" />
         <strong>Nice shoes</strong>
         <span>CAD 99.88</span>

         <button type="button">
            <div>
               <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
         </button>
      </li>
      <li>
         <img src="https://images.footlocker.com/is/image/EBFL2/4523455_a1?wid=640&hei=640&fmt=png-alpha" alt="Vans" />
         <strong>Nice shoes</strong>
         <span>CAD 99.88</span>

         <button type="button">
            <div>
               <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
         </button>
      </li>
      <li>
         <img src="https://images.footlocker.com/is/image/EBFL2/4523455_a1?wid=640&hei=640&fmt=png-alpha" alt="Vans" />
         <strong>Nice shoes</strong>
         <span>CAD 99.88</span>

         <button type="button">
            <div>
               <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
         </button>
      </li>
      <li>
         <img src="https://images.footlocker.com/is/image/EBFL2/4523455_a1?wid=640&hei=640&fmt=png-alpha" alt="Vans" />
         <strong>Nice shoes</strong>
         <span>CAD 99.88</span>

         <button type="button">
            <div>
               <MdAddShoppingCart size={16} color="#FFF" /> 3
            </div>

            <span>ADD TO CART</span>
         </button>
      </li>
   </ProductList>
   );
}
