import "./fetch-polyfill";
import { paths } from "./schema";

// openapi-typescript-fetch
// but because package required > 12.0.0 then download to local
import { Fetcher } from "./fetcher";
import { FetchConfig } from "./fetcher/types";

// declare fetcher for paths
const fetcher = Fetcher.for<paths>();

const createFetch = (fetchConfig: FetchConfig) => {
  // global configuration
  fetcher.configure(fetchConfig);

  const fetchVocabulary = fetcher
    .path("/custom/vocabulary/{schemaName}/{fieldName}")
    .method("get")
    .create();

  const fetchAttachments = fetcher
    .path("/files/attachment/{fileId}")
    .method("get")
    .create();
  const fetchUserMetadata = fetcher
    .path("/auth/metadata/user")
    .method("get")
    .create();

  const pushOnOffNotification = fetcher
    .path("/notifications/oneoff")
    .method("post")
    .create();

  const fetchAddressGeocode = fetcher
    .path("/geoservices/geocode")
    .method("post")
    .create();

  const getListRecurring = fetcher
    .path("/recurring/schedules")
    .method("get")
    .create();

  const graphql = fetcher.path("/graphql").method("post").create();
  const graphqlBatch = fetcher.path("/graphql/batch").method("post").create();

  const fetchResourceAvailability = fetcher.path("/availability").method("get").create();

  return {
    fetchVocabulary,
    fetchAttachments,
    fetchUserMetadata,
    pushOnOffNotification,
    fetchAddressGeocode,
    graphql,
    graphqlBatch,
    getListRecurring,
    fetchResourceAvailability,
  };
};

export default createFetch;
