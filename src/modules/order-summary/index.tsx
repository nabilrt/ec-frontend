import Invoiced from "@/app/(main)/invoice/page";
import Button from "../button";
import { usePDF } from "react-to-pdf";
import { useRouter } from "next/navigation";

type OrderSummaryProps = {
  totalPrice: number;
};

const OrderSummary = ({ totalPrice }: OrderSummaryProps) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col w-[50%]  space-y-3  border shadow-lg p-4 rounded-lg h-fit ">
        <div className="space-y-2">
          <p className="font-semibold text-xl ">Order Summary</p>
          <div className="flex flex-row">
            <div>Subtotal:</div>
            <div className="ml-auto">${totalPrice.toFixed(2)}</div>
          </div>
          <div className="flex flex-row">
            <div>Tax:</div>
            <div className="ml-auto">$0.00</div>
          </div>
          <hr />
          <div className="flex flex-row">
            <div className="font-semibold">Order Total:</div>
            <div className="ml-auto font-semibold">
              ${totalPrice.toFixed(2)}
            </div>
          </div>
          <div className="flex flex-row">
            <div className="ml-auto font-semibold">
              <Button variant="success" onClick={() => router.push("/invoice")}>
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
