import { getEventRequests } from "@/lib/data";
import MyEventRequestsClient from "./MyEventRequestClient";

const MyEventRequests = async () => {
  const requests = await getEventRequests();

  console.log("Fetched Requests:", requests);

  const formattedRequests = Array.isArray(requests)
    ? requests
        .filter((request) => request?._id)
        .map((request) => ({
          ...request,
          _id: request._id.toString(),
        }))
    : [];

  console.log("Formatted Requests:", formattedRequests);

  return <MyEventRequestsClient initialRequests={formattedRequests} />;
};

export default MyEventRequests;