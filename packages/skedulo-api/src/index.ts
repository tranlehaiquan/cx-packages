import "./fetch-polyfill";
import { paths } from "./schema";
import { Fetcher } from "openapi-typescript-fetch";
import { FetchConfig } from "openapi-typescript-fetch/dist/cjs/types";

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

  const graphql = fetcher.path("/graphql").method("post").create();
  const graphqlBatch = fetcher.path("/graphql/batch").method("post").create();

  return {
    fetchVocabulary,
    fetchAttachments,
    fetchUserMetadata,
    pushOnOffNotification,
    fetchAddressGeocode,
    graphql,
    graphqlBatch,
  };
};

export default createFetch;
