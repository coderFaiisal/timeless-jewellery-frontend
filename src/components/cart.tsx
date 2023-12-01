import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import CustomImage from "./customImage";

export default function Cart() {
  const products: any = [];

  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart size="25" />
      </SheetTrigger>
      <SheetContent className="overflow-auto">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <h1>Total: </h1>
        </SheetHeader>
        <div className="space-y-5">
          {products?.map((product: any) => (
            <div
              className="border h-44 p-5 flex justify-between rounded-md"
              key={product.name}
            >
              <div className="border-r pr-5 shrink-0">
                <CustomImage src={product?.image} alt="" />
              </div>
              <div className="px-2 w-full flex flex-col gap-3">
                <h1 className="text-sm self-center">{product?.name}</h1>
                <p className="text-xs">Quantity: {product.quantity}</p>
                <p className="text-xs">
                  Total Price: {(product.price * product.quantity!).toFixed(2)}{" "}
                  $
                </p>
              </div>
              <div className="border-l pl-5 flex flex-col justify-between">
                <Button>
                  <Plus size="20" />
                </Button>
                <Button>
                  <Minus size="20" />
                </Button>
                <Button
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-400"
                >
                  <Trash size="20" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
