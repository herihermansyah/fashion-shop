"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import LineUp from "@/components/ui/line-up";
import Typography from "@/components/ui/typography";
import {useCartStore} from "@/store/use-cart-store";
import Image from "next/image";
import React from "react";

const paymentMethod = [
  {name: "gpay", image: "/gpay.png"},
  {name: "visa", image: "/visa.png"},
  {name: "paypal", image: "/paypal.png"},
  {name: "paypass", image: "/paypass.png"},
];

function CheckOutPage() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className="container mx-auto large:w-wide px-4 large:px-0 flex justify-between gap-5 flex-col-reverse lg:flex-row my-10">
      {/* checkout form */}
      <div className="flex flex-col gap-12.5">
        <div className="flex flex-col gap-2">
          <LineUp>
            <Typography
              variant={"h4"}
              className="capitalize text-[34px] font-bold"
            >
              check out
            </Typography>
          </LineUp>
          <Typography variant={"h5"}>billing addres</Typography>
        </div>
        {/* form */}
        <form className="flex flex-col items-start gap-7" action="submit">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            <Input
              className="py-1.5 border-transparent bg-Muted-Gray"
              placeholder="first name"
              label="first name"
            />
            <Input
              className="py-1.5 border-transparent bg-Muted-Gray"
              placeholder="last name"
              label="last name"
            />
            <Input
              className="py-1.5 border-transparent bg-Muted-Gray"
              placeholder="country"
              label="country / region"
            />
            <Input
              className="py-1.5 border-transparent bg-Muted-Gray"
              placeholder="company name"
              label="company name"
            />
            <Input
              className="py-1.5 border-transparent bg-Muted-Gray"
              placeholder="street address"
              label="street address"
            />
            <Input
              className="py-1.5 border-transparent bg-Muted-Gray"
              placeholder="apt,suit,unit"
              label="apt,suit,unit"
            />
          </div>
          <div className="grid grid-cols-3 gap-5">
            <Input
              className="py-1.5 border-transparent bg-Muted-Gray"
              placeholder="city"
              label="city"
            />
            <Input
              className="py-1.5 border-transparent bg-Muted-Gray"
              placeholder="state"
              label="state"
            />
            <Input
              className="py-1.5 border-transparent bg-Muted-Gray"
              placeholder="postal code"
              label="postal code"
            />
          </div>
          <Input
            className="py-1.5 border-transparent bg-Muted-Gray"
            placeholder="phone"
            label="phone"
          />
          <div className="flex flex-col gap-3 items-start">
            <Button type="submit">continue to delivery</Button>
            <label htmlFor="" className="flex items-center gap-2.5">
              <input
                required
                type="checkbox"
                className="w-4.5 h-4.5 accent-Charcoal cursor-pointer"
              />
              <span className="text-[18px] font-medium text-Muted-Gray-200 capitalize">
                save my information for a faster checkout
              </span>
            </label>
          </div>
        </form>
        {/* shipping address */}
        <div className="flex flex-col gap-2">
          <Typography variant={"h4"}>Shipping Address</Typography>
          <Typography variant={"p"} className="text-Muted-Gray-200 font-medium">
            select the address that matches your card or payment method
          </Typography>
          <div className="bg-Muted-Gray/50 rounded-2xl">
            <div className="divide-y divide-Muted-Gray-200/50 px-10 py-7">
              <label htmlFor="" className="flex items-center gap-2.5 py-3">
                <input
                  required
                  type="checkbox"
                  className="w-4.5 h-4.5 accent-Charcoal cursor-pointer"
                />
                <Typography variant={"h5"}>same as billing address</Typography>
              </label>
              <label htmlFor="" className="flex items-center gap-2.5 py-3">
                <input
                  required
                  type="checkbox"
                  className="w-4.5 h-4.5 accent-Charcoal cursor-pointer"
                />
                <Typography variant={"h5"}>
                  use different shipping address
                </Typography>
              </label>
            </div>
          </div>
        </div>
        {/* shipping method */}
        <div className="flex flex-col gap-2">
          <Typography variant={"h4"}>Shipping Method</Typography>
          <Typography variant={"p"} className="text-Muted-Gray-200 font-medium">
            select the address that matches your card or payment method
          </Typography>
          <div className="bg-Muted-Gray/50 rounded-2xl">
            <div className="divide-y divide-Muted-Gray-200/50 px-10 py-7">
              <div className="py-3">
                <Typography variant={"h5"}>
                  Arrives By Monday, June 7
                </Typography>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <Typography variant={"h5"}>delivery charges</Typography>
                  <Typography className="text-Muted-Gray-200/50">
                    additional fess may apply
                  </Typography>
                </div>
                <Typography variant={"h5"}>$5.00</Typography>
              </div>
            </div>
          </div>
        </div>
        {/* payment method */}
        <div className="flex flex-col gap-2">
          <Typography variant={"h4"}>Payment Method</Typography>
          <Typography variant={"p"} className="text-Muted-Gray-200 font-medium">
            all transactions are secure and encrypted
          </Typography>
          <div className="bg-Muted-Gray/50 rounded-2xl">
            <div className="divide-y divide-Muted-Gray-200/50 px-10">
              <div className="flex flex-col gap-5 py-8">
                <label htmlFor="" className="flex items-center gap-4 py-3">
                  <input
                    required
                    type="checkbox"
                    className="w-4.5 h-4.5 accent-Charcoal cursor-pointer"
                  />
                  <div className="flex flex-col">
                    <Typography variant={"h5"}>Credit Card</Typography>
                    <Typography
                      variant={"p"}
                      className="text-Muted-Gray-200 font-medium"
                    >
                      we accept all major credit cards
                    </Typography>
                  </div>
                </label>
                <div className="flex flex-col items-start ml-5 gap-5">
                  <div className="flex flex-wrap items-center gap-5">
                    {paymentMethod.map((item, index) => (
                      <Image
                        key={index}
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={46}
                        unoptimized
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <Input placeholder="card number" className="py-2" />
                    <Input placeholder="name of card" className="py-2" />
                    <Input placeholder="expiration date" className="py-2" />
                    <Input placeholder="securty code" className="py-2" />
                  </div>
                </div>
              </div>
              <label htmlFor="" className="flex items-center gap-4 py-8">
                <input
                  required
                  type="checkbox"
                  className="w-4.5 h-4.5 accent-Charcoal cursor-pointer"
                />
                <div className="flex flex-col">
                  <Typography variant={"h5"}>Cash On Delivery</Typography>
                  <Typography
                    variant={"p"}
                    className="text-Muted-Gray-200 font-medium"
                  >
                    pay with cash upon delivery
                  </Typography>
                </div>
              </label>
              <label htmlFor="" className="flex items-center gap-4 py-8">
                <input
                  required
                  type="checkbox"
                  className="w-4.5 h-4.5 accent-Charcoal cursor-pointer"
                />
                <div className="flex flex-col">
                  <Typography variant={"h5"}>Paypal</Typography>
                </div>
              </label>
            </div>
          </div>
        </div>
        <Button className="w-fit py-3">Pay Now</Button>
      </div>
      {/* order summary */}
      <div className="w-full lg:w-100 border border-Muted-Gray p-5 rounded-2xl">
        <Typography variant={"h4"}>Order Summary</Typography>
        <div className="flex flex-col gap-7 divide-y divide-Muted-Gray">
          {cartItems.map((item) => {
            return (
              <div
                className="flex items-center justify-between py-3"
                key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.hex}`}
              >
                <div className="flex gap-3 items-center">
                  <div className="w-15.75 h-15.75 overflow-hidden">
                    <Image
                      src={item.product.media?.mainImage ?? "/"}
                      alt={item.product.title ?? ""}
                      width={63}
                      height={63}
                      unoptimized
                      className="rounded-md object-cover object-top w-15.75 h-15.75 "
                    />
                  </div>
                  <div>
                    <Typography className="flex items-center gap-2">
                      <span className="line-clamp-1 w-40 ">
                        {item.product.title}
                      </span>
                      X <span>{item.quantity}</span>
                    </Typography>
                    <Typography>
                      color :{" "}
                      <span className="text-Muted-Gray-200">
                        {item.selectedColor.name}
                      </span>
                    </Typography>
                  </div>
                </div>
                <div>
                  <Typography>
                    {((item.product.price ?? 0) * item.quantity).toLocaleString(
                      "en-US",
                      {
                        style: "currency",
                        currency: "USD",
                      },
                    )}
                  </Typography>
                </div>
              </div>
            );
          })}
          <div className="flex flex-col gap-3 py-3">
            <Typography
              className="flex items-center justify-between"
              variant={"h5"}
            >
              <span>
                <span>Subtotal </span>
                <span className="text-Muted-Gray-200 font-normal">
                  ( {cartItems.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                  items )
                </span>
              </span>

              <span>
                {cartItems
                  .reduce(
                    (acc, item) =>
                      acc + (item.product.price ?? 0) * item.quantity,
                    0,
                  )
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
              </span>
            </Typography>
            <Typography
              variant={"h5"}
              className="flex items-center justify-between"
            >
              <span>savinggs</span>
              <span>0</span>
            </Typography>
          </div>
          <Typography
            variant={"h5"}
            className="flex items-center justify-between py-3"
          >
            <span>Shipping</span>
            <span>Free</span>
          </Typography>
          <Typography
            variant={"h5"}
            className="flex items-center justify-between py-3"
          >
            <span>Total</span>
            <span>
              {" "}
              {cartItems
                .reduce(
                  (acc, item) =>
                    acc + (item.product.price ?? 0) * item.quantity,
                  0,
                )
                .toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
