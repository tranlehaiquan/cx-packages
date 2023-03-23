class ServerlessSDK {
  constructor(e = {}) {
    (this.context = {}),
      this.config(e),
      (this.domains = a[this.platformStage]),
      (this.intercepts = {}),
      (this.intercepts.logs = []),
      (this.intercepts.logsInterval = 200),
      (this.session = { refreshToken: (e) => y.refreshToken(this, e) }),
      (this.events = {
        publish: (e) =>
          h.publish(e, this.getDomain("events"), this.context, this.accessKey),
        get: (e) => h.get(e, this.getDomain("events"), this.accessKey),
        list: (e = {}) =>
          h.list(this.getDomain("events"), this.context, this.accessKey, e),
        send: (e) => h.send(e, this.connection, this.context, this.accessKey),
      }),
      (this.frameworkDeployments = {
        create: async (e) => O.create(this, e),
        list: async (e) => O.list(this, e),
      }),
      (this.webhooks = {
        register: (e, t = {}) => p.register(this, e, t),
        list: (e = {}) => {
          const { starting_after: t, limit: n = 10 } = e;
          return p.list(this, t, n);
        },
        get: (e) => p.get(this, e),
        update: (e, t) => p.update(this, e, t || {}),
        delete: (e) => p.remove(this, e),
      }),
      (this.accessKeys = {
        create: (e, t, n) => d.create(this, e, t, n),
        list: (e) => d.list(this, e),
        remove: (e, t) => d.remove(this, e, t),
        get: () => d.get(this),
      }),
      (this.connections = {
        create: (e, t, n) => g.create(this, e, t, n),
        list: (e) => g.list(this, e),
        get: (e, t) => g.get(this, e, t),
        getByOrgAndAccountAlias: (e, t) =>
          g.getByOrgAndAccountAlias(this, e, t),
        update: (e, t, n, r, i) => g.update(this, e, t, n, r, i),
        remove: (e, t) => g.remove(this, e, t),
        syncAll: (e) => g.syncAll(this, e),
        unsync: (e, t) => g.unsync(this, e, t),
      }),
      (this.desktop = {
        createSavedQuery: (e, t, n, r) => m.createSavedQuery(this, e, t, n, r),
        getSavedQuery: (e, t, n, r) => m.getSavedQuery(this, e, t, n, r),
        updateSavedQuery: (e, t, n, r, i) =>
          m.updateSavedQuery(this, e, t, n, r, i),
        deleteSavedQuery: (e, t, n, r) => m.deleteSavedQuery(this, e, t, n, r),
        listSavedQueries: (e, t, n) => m.listSavedQueries(this, e, t, n),
      }),
      (this.logDestinations = {
        getOrCreate: async (e) => w.getOrCreate(this, e),
        remove: async (e) => w.remove(this, e),
      }),
      (this.deploymentProfiles = {
        get: async (e) => E.get(this, e),
        create: async (e) => E.create(this, e),
        list: async (e) => E.list(this, e),
        setDefault: async (e) => E.setDefault(this, e),
      }),
      (this.organizations = {
        get: async (e) => S.get(this, e),
        list: async (e) => S.list(this, e),
        create: async (e) => S.create(this, e),
        validate: async (e) => S.validate(this, e),
      }),
      (this.apps = {
        create: async (e) => v.create(this, e),
        get: async (e) => v.get(this, e),
        update: async (e) => v.update(this, e),
        remove: async (e) => v.remove(this, e),
        list: async (e) => v.list(this, e),
      }),
      (this.metadata = { get: async () => x.get(this) }),
      (this.services = {
        get: async (e) => _.get(this, e),
        getStateVariable: async (e) => _.getStateVariable(this, e),
      });
  }
  config(e = {}) {
    (this.accessKey = e.accessKey || this.accessKey),
      (this.platformStage =
        process.env.SERVERLESS_PLATFORM_STAGE || e.platformStage || "prod"),
      (e.context = e.context || {}),
      (this.context.orgUid = e.context.orgUid || this.context.orgUid || null),
      (this.context.orgName =
        e.context.orgName || this.context.orgName || null),
      (this.context.stageName =
        e.context.stageName || this.context.stageName || null),
      (this.context.appName =
        e.context.appName || this.context.appName || null),
      (this.context.instanceName =
        e.context.instanceName || this.context.instanceName || null),
      (this.context.componentName =
        e.context.componentName || this.context.componentName || null),
      (this.context.componentVersion =
        e.context.componentVersion || this.context.componentVersion || null);
  }
  getDomain(e = null) {
    return this.domains[e] || null;
  }
  loginIdentity(e = {}) {
    const t = e.loginBrokerUrl
        ? e.loginBrokerUrl + "broker"
        : this.getDomain("core") + "/login/broker",
      n = new r(t, void 0, {
        followRedirects: !0,
        agent: b.getAgent(),
      });
    let i, s;
    const a = new Promise((e, t) => {
      (i = e), (s = t);
    });
    let u, c;
    const l = new Promise((e, t) => {
      (u = e), (c = t);
    });
    return (
      (n.onmessage = (e) => {
        try {
          const t = JSON.parse(e.data);
          switch (t.event) {
            case "ready":
              i(t.transactionId);
              break;
            case "fulfilled": {
              const e = ((e) => {
                delete e.event;
                const t = o(e.id_token);
                return {
                  id: t.tracking_id || t.sub,
                  name: t.name,
                  email: t.email,
                  username: e.username,
                  user_uid: e.user_uid,
                  refreshToken: e.refresh_token,
                  accessToken: e.access_token,
                  idToken: e.id_token,
                  expiresAt: e.expires_in
                    ? Date.now() + e.expires_in
                    : e.expires_at,
                };
              })(t);
              u(e), n.close();
              break;
            }
            default:
              throw new Error(
                "Encountered an unexpected message while waiting for login information. Your Serverless Framework or SDK may be out of date."
              );
          }
        } catch (e) {
          s(e), c(e), n.close();
        }
      }),
      (n.onopen = () => {
        n.send('{"action":"login"}');
      }),
      { transactionId: a, loginData: l }
    );
  }
  async login(e = {}) {
    const { transactionId: t, loginData: n } = this.loginIdentity(e),
      r = await t,
      o = i.stringify({ client: "cli", transactionId: r });
    let s = "" + this.getDomain("dashboard");
    return (s = `${s}?${o}`), { loginUrl: s, loginData: n };
  }
  async getUser() {
    return u.getUser(this);
  }
  async getUserMeta() {
    return u.getUserMeta(this);
  }
  async saveUserMeta(e) {
    return u.saveUserMeta(this, e);
  }
  async validateUserAndOrgName(e) {
    return u.validateUserAndOrgName(this, e);
  }
  async createUserAndOrg(e) {
    return u.createUserAndOrg(this, e);
  }
  async createOrg(e) {
    return u.createOrg(this, e);
  }
  async getOrgByName(e) {
    return u.getOrgByName(this, e);
  }
  async listOrgs(e) {
    return u.listOrgs(this, e);
  }
  async createApp(e = null, t = {}) {
    return u.createApp(this, e, t);
  }
  async updateApp(e = null, t = {}) {
    return u.updateApp(this, e, t);
  }
  async deleteApp(e = null, t = null) {
    return u.deleteApp(this, e, t);
  }
  async listApps(e = null) {
    return u.listApps(this, e);
  }
  async createInitToken(e = null, t = {}) {
    return u.createInitToken(this, e, t);
  }
  async getInitToken(e) {
    return u.getInitToken(this, e);
  }
  async createProvider(e, t) {
    return u.createProvider(this, e, t);
  }
  async updateProvider(e, t, n) {
    return u.updateProvider(this, e, t, n);
  }
  async setDefaultProvider(e, t) {
    return u.setDefaultProvider(this, e, t);
  }
  async unsetDefaultProvider(e, t) {
    return u.unsetDefaultProvider(this, e, t);
  }
  async deleteProvider(e, t) {
    return u.deleteProvider(this, e, t);
  }
  async createProviderLink(e, t, n, r) {
    return u.createProviderLink(this, e, t, n, r);
  }
  async deleteProviderLink(e, t, n, r) {
    return u.deleteProviderLink(this, e, t, n, r);
  }
  async getProviders(e) {
    return u.getProviders(this, e);
  }
  async getProvider(e, t) {
    return u.getProvider(this, e, t);
  }
  async getProvidersByOrgServiceInstance(e, t, n) {
    return u.getProvidersByOrgServiceInstance(this, e, t, n);
  }
  async getProvidersByLink(e, t, n) {
    return u.getProvidersByLink(this, e, t, n);
  }
  async getAllowedProviders() {
    return u.getAllowedProviders(this);
  }
  async createParam(e, t, n, r) {
    return u.createParam(this, e, t, n, r);
  }
  async deleteParam(e, t, n, r) {
    return u.deleteParam(this, e, t, n, r);
  }
  async updateParam(e, t, n, r, i) {
    return u.updateParam(this, e, t, n, r, i);
  }
  async getParams(e, t, n) {
    return u.getParams(this, e, t, n);
  }
  async getParamsByOrgServiceInstance(e, t, n) {
    return u.getParamsByOrgServiceInstance(this, e, t, n);
  }
  async getParamsAndProvidersByOrgServiceInstance(e, t, n) {
    return u.getParamsAndProvidersByOrgServiceInstance(this, e, t, n);
  }
  async connect(e = {}) {
    (this.connection = new c(this)), await this.connection.connect(e);
  }
  disconnect() {
    this.connection && this.connection.disconnect();
  }
  isConnected() {
    return !(!this.connection || !this.connection.isConnected());
  }
  async unpublishFromRegistry(e = {}) {
    return await l.unpublish(this, e);
  }
  async publishToRegistry(e = {}) {
    return l.publish(this, e);
  }
  async getFromRegistry(e = null, t = null) {
    return l.get(this, e, t);
  }
  generateInstanceId(e = null, t = null, n = null, r = null) {
    return f.generateId(e, t, n, r);
  }
  validateInstance(e) {
    return f.validateAndFormat(e);
  }
  createInstance(e = null, t = null, n = null, r = null, i = "inactive") {
    return f.create(e, t, n, r, i);
  }
  async saveInstance(e) {
    return f.save(this, e);
  }
  async getInstance(e = null, t = null, n = null, r = null) {
    return f.getByName(this, e, t, n, r);
  }
  async listInstances(e = null, t) {
    return f.listByOrgName(this, e, t);
  }
  async run(e, t = {}, n = {}) {
    return f.run(this, e, t, n);
  }
  async runFinish(e = null, t, n = {}) {
    return f.runFinish(this, e, t, n);
  }
  async deploy(e = {}, t = {}) {
    return f.deploy(this, e, t);
  }
  async remove(e = {}, t = {}) {
    return f.remove(this, e, t);
  }
  async startInterceptingLogs(e = null, t = {}) {
    (this.intercepts.logs = []),
      (this.intercepts.console = {}),
      (this.intercepts.console.log = console.log),
      (this.intercepts.console.debug = console.debug),
      (this.intercepts.console.info = console.info),
      (this.intercepts.console.error = console.error),
      (this.intercepts.console.warn = console.warn),
      (this.intercepts.stdout = {}),
      (this.intercepts.stdout.write = process.stdout.write.bind(
        process.stdout
      )),
      (this.intercepts.stderr = {}),
      (this.intercepts.stderr.write = process.stderr.write.bind(
        process.stderr
      ));
    const n = this;
    (this.intercepts.publish = async () => {
      if (!n.intercepts.logs || !n.intercepts.logs.length) return;
      const r = n.intercepts.logs.map((e) => e);
      n.intercepts.logs = [];
      const i = { data: { logs: r, ...t } };
      (i.event = e || "instance.logs"), await n.events.publish(i);
    }),
      (this.intercepts.interval = setInterval(async () => {
        await n.intercepts.publish();
      }, n.intercepts.logsInterval));
    let r = !1;
    const i = (e, t) => {
      const i = !r;
      i &&
        ((r = !0),
        t.forEach((t) => {
          void 0 === t && (t = "undefined"),
            "number" == typeof t && (t = JSON.stringify(t));
          const r = { type: e };
          (r.createdAt = Date.now()),
            (r.data = s.inspect(t)),
            n.intercepts.logs.push(r);
        }));
      try {
        "stdout" === e
          ? n.intercepts.stdout.write(...t)
          : "stderr" === e
          ? n.intercepts.stderr.write(...t)
          : n.intercepts.console[e].apply(console, t);
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
      (process.stdout.write = (...e) => {
        i("stdout", e);
      }),
      (process.stderr.write = (...e) => {
        i("stderr", e);
      });
  }
  async stopInterceptingLogs() {
    this.intercepts.interval && clearInterval(this.intercepts.interval),
      await this.intercepts.publish(),
      (this.intercepts.logs = []),
      (console.log = this.intercepts.console.log),
      (console.debug = this.intercepts.console.debug),
      (console.info = this.intercepts.console.info),
      (console.error = this.intercepts.console.error),
      (console.warn = this.intercepts.console.warn),
      (process.stdout.write = this.intercepts.stdout.write),
      (process.stderr.write = this.intercepts.stderr.write);
  }
}
