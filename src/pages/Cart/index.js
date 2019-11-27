import React from 'react';
import { connect } from 'react-redux';
import {
   MdAddCircleOutline,
   MdRemoveCircleOutline,
   MdDelete
} from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, dispatch }) {
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
               {cart.map(product => (
                  <tr>
                     <td>
                        <img src={product.image} alt={product.title} />
                     </td>
                     <td>
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>
                     </td>

                     <td>
                        <div>
                           <button type="button">
                              <MdAddCircleOutline size={20} color="#7159c1" />
                           </button>
                           <input
                              type="number"
                              readOnly
                              value={product.amount}
                           />
                           <button type="button">
                              <MdRemoveCircleOutline
                                 size={20}
                                 color="#7159c1"
                              />
                           </button>
                        </div>
                     </td>
                     <td>
                        <strong>R$345.65</strong>
                     </td>
                     <td>
                        <button
                           type="button"
                           onClick={() =>
                              dispatch(CartActions.removeFromCart(product.id))
                           }
                        >
                           <MdDelete size={20} color="#7159c1" />
                        </button>
                     </td>
                  </tr>
               ))}
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

const mapStateToProps = state => ({
   cart: state.cart
});

export default connect(mapStateToProps)(Cart);
