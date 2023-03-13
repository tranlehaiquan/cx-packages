import { Loading } from "@skedulo/sked-ui";
import React, { useCallback, useEffect, useRef } from "react";
import format from "date-fns/format";

import {
  MonitorLogs,
  SchemaSubscriptionOp,
  useFetchMonitorLogsQuery,
  useSubLogSubscription,
} from "../../generated/graphql";
import clsx from "clsx";

interface Props {
  className?: string;
  monitorId: string;
}

const Monitor: React.FC<Props> = ({ monitorId, className }) => {
  const [newLogs, setNewLogs] = React.useState<MonitorLogs[]>([]);
  const subscriptionInsertedLog = useSubLogSubscription({
    variables: {
      operation: SchemaSubscriptionOp.Insert,
      filter: `MonitorsId == '${monitorId}'`,
    },
  });

  const monitorLogs = useFetchMonitorLogsQuery({
    variables: {
      filter: `MonitorsId == '${monitorId}'`,
    },
  });
  const codeElement = useRef<HTMLElement>(null);
  const callBackObserver: MutationCallback = useCallback(
    (mutationsList, observer) => {
      if (codeElement.current) {
        codeElement.current.scrollTop = codeElement.current.scrollHeight;
      }
    },
    [codeElement.current]
  );

  const observer = useRef(new MutationObserver(callBackObserver));

  useEffect(() => {
    if (subscriptionInsertedLog.data) {
      const newLog = subscriptionInsertedLog.data.schemaMonitorLogs.data;
      setNewLogs([...newLogs, newLog as any]);
    }
  }, [subscriptionInsertedLog.data]);

  useEffect(() => {
    monitorLogs.refetch();
  }, []);

  useEffect(() => {
    if (codeElement.current) {
      observer.current.observe(codeElement.current, { childList: true });
    }

    return () => {
      observer.current.disconnect();
    };
  }, []);

  return (
    <code
      ref={codeElement}
      style={{ backgroundColor: "#0f172a", height: `calc(99vh)` }}
      className={clsx(className, "rounded-md p-2 text-slate-200")}
    >
      {[...(monitorLogs.data?.monitorLogs.edges || [])]
        .reverse()
        .map(({ node }) => (
          <p key={node.UID} className="leading-5">
            {" "}
            <span className="text-pink-400">
              {format(new Date(node.CreatedDate), "dd/MM/yyyy HH:mm:ss ")}{" "}
            </span>
            {node.Description}
          </p>
        ))}

      {newLogs.map((node) => (
        <p key={node.UID} className="leading-5">
          <span className="text-pink-400">
            {format(new Date(node.CreatedDate), "dd/MM/yyyy HH:mm:ss ")}{" "}
          </span>
          {node.Description}
        </p>
      ))}
      {monitorLogs.loading && <Loading />}
    </code>
  );
};

export default Monitor;
