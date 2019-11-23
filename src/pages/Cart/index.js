import React from 'react';
import {
   MdAddCircleOutline,
   MdRemoveCircleOutline,
   MdDelete
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
   return (
      <Container>
         <ProductTable>
            <thead>
               <tr>
                  <th />
                  <th>PRODUCT</th>
                  <th>QUANTITY</th>
                  <th>SUBTOTAL</th>
                  <th />
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>
                     <img
                        src="https://images.footlocker.com/is/image/EBFL2/4523455_a1?wid=640&hei=640&fmt=png-alpha"
                        alt="Vans"
                     />
                  </td>
                  <td>
                     <strong>Nice shoes</strong>
                     <span>CAD 99.88</span>
                  </td>

                  <td>
                     <div>
                        <button type="button">
                           <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                        <input type="number" readOnly value={1} />
                        <button type="button">
                           <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>
                     </div>
                  </td>
                  <td>
                     <strong>R$345.65</strong>
                  </td>
                  <td>
                     <button type="button">
                        <MdDelete size={20} color="#7159c1" />
                     </button>
                  </td>
               </tr>
            </tbody>
         </ProductTable>
         <footer>
            <button type="button">Finish order</button>
            <Total>
               <span>TOTAL</span>
               <strong>R$1900.52</strong>
            </Total>
         </footer>
      </Container>
   );
}
