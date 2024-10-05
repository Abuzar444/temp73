import EditJobForm from "@/components/EditJobForm";
import { getSingleJobAction } from "@/utils/actions";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import React from "react";

const SingleJobPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["job", id],
    queryFn: () => getSingleJobAction(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <EditJobForm jobId={id} />
    </HydrationBoundary>
  );
};

export default SingleJobPage;
