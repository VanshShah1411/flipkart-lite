import React, { Fragment } from "react";

// tailwind ui
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

// redux
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../../actions/index";

// component
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const SideCart = () => {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);
  const toggleCartState = useSelector((state) => state.toggleCart);
  const total = useSelector((state) => state.total);

  const dispatch = useDispatch();

  return (
    <Transition.Root show={toggleCartState} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={() => dispatch(toggleCart())}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => dispatch(toggleCart())}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {products.length ? (
                            !cart.length ? (
                              <div>
                                <h1>Nothing to show</h1>
                              </div>
                            ) : (
                              cart.map((cartItem) => {
                                const item = products.find(
                                  (el) => el.id === +cartItem.id
                                );
                                return (
                                  <CartItem
                                    item={item}
                                    price={item.price}
                                    key={item.id}
                                    qty={cartItem.qty}
                                  />
                                );
                              })
                            )
                          ) : (
                            ""
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <Link
                        to="/checkout"
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        onClick={() => dispatch(toggleCart())}
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{" "}
                        <Link
                          to="/"
                          type="button"
                          className="text-indigo-600 font-medium hover:text-indigo-500"
                          onClick={() => dispatch(toggleCart())}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default SideCart;
