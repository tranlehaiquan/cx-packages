import * as auth from "./auth";
import * as configurations from "./configurations";
import * as customfields from "./customfields";
import * as files from "./files";
import * as geoservices from "./geoservices";
import * as graphql from "./graphql";
import * as notifications from "./notifications";
import * as recurring from "./recurring";

export type Paths = auth.paths &
  configurations.paths &
  customfields.paths &
  files.paths &
  geoservices.paths &
  graphql.paths &
  notifications.paths &
  recurring.paths;
