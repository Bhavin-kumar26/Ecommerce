import { useDispatch, useSelector } from "react-redux";
import {
  dataPhoto,
  perfumeData,
  shoeData,
  watchData,
  womenCollections,
} from "../assets/assets";
import {
  changeQuantity,
  toggleStatusTab,
  selectTotalCost,
} from "../store/cart";
import { IoCloseOutline } from "react-icons/io5";
import emptyCart from "../assets/emptyCart.png";
import { CiShoppingCart } from "react-icons/ci";

const Cart = ({ CollectionData }) => {
  const dispatch = useDispatch();
  const { items, statusTab } = useSelector((store) => store.cart);
  const totalCost = useSelector((state) =>
    selectTotalCost(state, CollectionData)
  );

  if (!statusTab) return null;

  const handleQuantityChange = (productId, quantity, productType) => {
    dispatch(changeQuantity({ productId, quantity, productType }));
  };

  const handleCloseCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-end">
      <div className="w-96 bg-white p-5 flex flex-col justify-between ">
        <div>
          <div className=" flex items-start justify-between ">
            <h2 className="text-xl font-semibold mb-4 tracking-wider">
              Cart Items
            </h2>
            <button
              onClick={handleCloseCart}
              className="text-black font-bold text-xl"
            >
              <IoCloseOutline />
            </button>
          </div>
          {items.length === 0 ? (
            <div className=" flex flex-col justify-center items-center text-center gap-4">
              <img src={emptyCart} alt="" />
              <p className=" font-light text-md">
                {" "}
                Looks like you have not added anything to the cart
              </p>
              <button
                onClick={handleCloseCart}
                className=" bg-[#f0f0f0] p-3 font-semibold"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <div>
              {items.map((item) => {
                const productData =
                  item.productType === "men"
                    ? dataPhoto
                    : null || item.productType === "women"
                    ? womenCollections
                    : null || item.productType === "watch"
                    ? watchData
                    : null || item.productType === "shoes"
                    ? shoeData
                    : null || item.productType === "perfume"
                    ? perfumeData
                    : null;
                const product = productData.find(
                  (prod) => prod.id === item.productId
                );
                if (!product) return null;
                return (
                  <div
                    key={item.productId}
                    className="grid grid-cols-3 gap-5 mb-4 "
                  >
                    <div>
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-20 h-20 object-cover"
                      />
                    </div>

                    <div className=" text-start   ">
                      <p>{product.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: ${product.price}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.productId,
                            item.quantity - 1,
                            item.productType
                          )
                        }
                        className="p-1 font-bold text-black"
                      >
                        -
                      </button>
                      <span className="px-2">{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            item.productId,
                            item.quantity + 1,
                            item.productType
                          )
                        }
                        className="p-1 font-bold text-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {items.length !== 0 && (
          <div className="mt-4  flex flex-col gap-3">
            <h3 className="text-xl font-semibold">
              Total Cost: ${totalCost.toFixed(2)}
            </h3>
            <div className=" cursor-pointer bg-green-500 text-white font-bold px-2 py-4 flex justify-center rounded-lg text-lg">
              <h4>Check Out</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
