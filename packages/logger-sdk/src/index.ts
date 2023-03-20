interface SDKParams {
  orgName: string; // org name
  orgUid: string; // org ID
  stageName: string; // stage name (dev, prod, etc)
  applicationName: string; // application name, function name
  appUid: string; // random ID
  deploymentUid: string; // deployment ID random
}

class InterceptLog {
  logs: any[];
  logsInterval: number;
  console: any;
  stdout: any;
  stderr: any;
  interval: any;

  constructor() {
    this.logs = [];
    this.logsInterval = 1000;
  }

  log = (log: any) => {
    this.logs.push(log);
  };

  publish = async () => {
    const n = this;
    if (!n.logs || !n.logs.length) return;
    const r = n.logs.map((e) => e);
    n.logs = [];
    const i = { data: { logs: r } };
    (i.event = e || "instance.logs"), await n.events.publish(i);
  };

  startInterceptingLogs = async (e = null, t = {}) => {
    this.logs = [];
    (this.console = {}),
      (this.console.log = console.log),
      (this.console.debug = console.debug),
      (this.console.info = console.info),
      (this.console.error = console.error),
      (this.console.warn = console.warn),
      (this.stdout = {}),
      (this.stdout.write = process.stdout.write.bind(process.stdout)),
      (this.stderr = {}),
      (this.stderr.write = process.stderr.write.bind(process.stderr));

    this.interval = setInterval(async () => {
      await this.publish();
    }, this.logsInterval);

    let r: any = !1;
    const i = (e, t) => {
      const i = !r;
      i &&
        ((r = !0),
        t.forEach((t) => {
          void 0 === t && (t = "undefined"),
            "number" == typeof t && (t = JSON.stringify(t));
          const r: any = { type: e };
          (r.createdAt = Date.now()),
            (r.data = s.inspect(t)),
            this.logs.push(r);
        }));
      try {
        "stdout" === e
          ? this.stdout.write(...t)
          : "stderr" === e
          ? this.stderr.write(...t)
          : this.console[e].apply(console, t);
      } finally {
        i && (r = !1);
      }
    };
    (console.log = (...e) => {
      i("log", e);
    }),
      (console.debug = (...e) => {
        i("debug", e);
      }),
      (console.info = (...e) => {
        i("info", e);
      }),
      (console.error = (...e) => {
        i("error", e);
      }),
      (console.warn = (...e) => {
        i("warn", e);
      }),
      // (process.stdout.write = (...e) => {
      //   i("stdout", e);
      // }),
      // (process.stderr.write = (...e) => {
      //   i("stderr", e);
      // });
  };
}

class SDK {
  orgName: string;
  orgUid: string;
  stageName: string;
  applicationName: string;
  appUid: string;
  deploymentUid: string;
  intercepts: any;

  constructor(params: SDKParams) {
    this.orgName = params.orgName;
    this.orgUid = params.orgUid;
    this.stageName = params.stageName;
    this.applicationName = params.applicationName;
    this.appUid = params.appUid;
    this.deploymentUid = params.deploymentUid;
  }

  sdkSetup = () => {};
}

export default SDK;
