import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { ReviewForm } from "./review-form";

interface Props {
  productId: string;
}

export const ReviewSidebar = ({ productId }: Props) => {
  const trpc = useTRPC();
  const { data } = useQuery(
    trpc.reviews.getOne.queryOptions({
      productId,
    })
  );

  return <ReviewForm productId={productId} initialData={data} />;
};
