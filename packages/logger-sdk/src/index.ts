interface SDKConfig {
  orgName: string; // org name
  orgUid: string; // org ID
  stageName: string; // stage name (dev, prod, etc)
  applicationName: string; // application name, function name
  appUid: string; // random ID
  deploymentUid: string; // deployment ID random
}

class SDK {
  config: SDKConfig;
  intercepts: any;

  constructor(config: SDKConfig) {
    this.config = config;
    this.intercepts = {};
    this.intercepts.logs = [];
    this.intercepts.logsInterval = 200;
  }
}

export default SDK;
