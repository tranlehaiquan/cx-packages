import "./fetch-polyfill";
import { paths } from "./schema";
import { Fetcher } from "openapi-typescript-fetch";
import { FetchConfig } from "openapi-typescript-fetch/dist/cjs/types";

// declare fetcher for paths
const fetcher = Fetcher.for<paths>();

const createFetch = (fetchConfig: FetchConfig) => {
  // global configuration
  fetcher.configure(fetchConfig);

  const whoami = fetcher
    .path("/custom/vocabulary/{schemaName}/{fieldName}")
    .method("get")
    .create();

  return {
    whoami,
  }
};

export default createFetch;
