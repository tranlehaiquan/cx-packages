import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Button, InfoCard, Loading } from "@skedulo/sked-ui";

import {
  useFetchVendorByIdLazyQuery,
  useFetchMonitorLazyQuery,
} from "../../generated/graphql";
import DialogMonitor from "../DialogMonitor";
import DialogMonitorLog from "../DialogMonitorLog";

interface Props {
  className?: string;
  vendorId?: string;
}

const VendorDetail: React.FC<Props> = ({ vendorId, className }) => {
  const [openCreateMonitor, setOpenCreateMonitor] = useState(false);
  const [getVendorDetail, vendorStatus] = useFetchVendorByIdLazyQuery({
    variables: { UID: vendorId || "" },
  });
  const [getMonitors, monitorsStatus] = useFetchMonitorLazyQuery({
    variables: { filter: `VendorsId == '${vendorId}'` },
  });
  const vendorDetail = vendorStatus.data?.vendorsById;
  const [selectedMonitor, setSelectedMonitor] = useState('');

  useEffect(() => {
    if (vendorId) {
      getVendorDetail({ variables: { UID: vendorId } });
      getMonitors();
    }
  }, [vendorId]);

  if (!vendorId) return null;

  const onSubmit = async () => {
    await monitorsStatus.refetch();
    setOpenCreateMonitor(false);
  };

  if (monitorsStatus.loading) {
    return <div><Loading /></div>
  }

  return (
    <div className={clsx("h-full grid gap-4 grid-cols-3", className)}>
      <div className="w-80">
        <div className="flex justify-between mb-2">
          <Button
            buttonType="primary"
            onClick={() => setOpenCreateMonitor(true)}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded="false"
            icon="plus"
          >
            Add monitor
          </Button>
        </div>

        <div>
          {monitorsStatus.data?.monitors.edges.map((monitor) => (
            <div
              key={monitor.node.UID}
              className="p-2 bg-gray-200 hover:bg-gray-300 transition-all mb-2 rounded-sm relative flex justify-between cursor-pointer"
              onClick={() => setSelectedMonitor(monitor.node.UID)}
            >
              {monitor.node.Name}
            </div>
          ))}
          {!monitorsStatus.data?.monitors.edges.length && 'No monitor'}
        </div>

        <DialogMonitor
          isOpen={openCreateMonitor}
          vendorId={vendorId}
          onSubmit={onSubmit}
          onClose={() => setOpenCreateMonitor(false)}
          vendorName={vendorDetail?.Name || ""}
        />

        {selectedMonitor && (
          <DialogMonitorLog
            onClose={() => setSelectedMonitor('')}
            monitorId={selectedMonitor}
          />
        )}
      </div>
    </div>
  );
};

export default VendorDetail;
