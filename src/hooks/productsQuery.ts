import { useQuery, QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { keys } from "@/constants/query-keys";

const { products } = keys;
export const useProductsQuery = () => {
  const getProducts = async () =>
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/products`);

  const preFetchProducts = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
      queryKey: [products],
      queryFn: getProducts,
    });

    return queryClient;
  };

  const productsQuery = useQuery({
    queryKey: [products],
    queryFn: getProducts,
  });

  return {
    productsQuery,
    preFetchProducts,
  };
};
