import { Icon, Loading } from "@skedulo/sked-ui";
import React, { useEffect, useState } from "react";
import {
  useFetchMonitorLazyQuery,
  useFetchVendorByIdLazyQuery,
  Vendors,
} from "../../generated/graphql";
import DialogMonitor from "../DialogMonitor";

interface Props {
  className?: string;
  vendor: Vendors;
  onSelectMonitor?: (id: string) => void;
}

const VendorItem: React.FC<Props> = ({ vendor, onSelectMonitor }) => {
  const [openCreateMonitor, setOpenCreateMonitor] = useState(false);
  const { UID, Name } = vendor;
  const [open, setOpen] = useState(false);
  const [getMonitors, monitorsStatus] = useFetchMonitorLazyQuery({
    variables: { filter: `VendorsId == '${UID}'` },
  });

  const onCreateNewMonitor = async () => {
    await monitorsStatus.refetch();
    setOpenCreateMonitor(false);
  };

  useEffect(() => {
    if (open) {
      getMonitors();
    }
  }, [open]);

  return (
    <div>
      <div
        className="block cursor-pointer hover:bg-slate-100 py-1 relative"
        key={UID}
        onClick={() => setOpen(!open)}
      >
        <Icon
          name={open ? "chevronDown" : "chevronRight"}
          className="inline-block text-gray-400"
        />{" "}
        {Name}
      </div>

      {monitorsStatus.loading && <Loading />}
      {open && (
        <div>
          {monitorsStatus.data?.monitors.edges.map(({ node }) => (
            <div
              key={node.UID}
              className="py-1 pl-2 hover:bg-slate-100 cursor-pointer"
              onClick={() => onSelectMonitor?.(node.UID)}
            >
              <Icon name="hash" className="inline-block text-gray-400" />{" "}
              {node.Name}
            </div>
          ))}

          <p
            className="text-sm py-1 pl-2 text-blue-500 cursor-pointer opacity-80 hover:bg-slate-100"
            onClick={() => setOpenCreateMonitor(true)}
          >
            <Icon
              name="plus"
              className="inline-block text-gray-400 w-3 mr-2"
            />
            Insert Monitor
          </p>
        </div>
      )}

      <DialogMonitor
        isOpen={openCreateMonitor}
        vendorId={UID}
        onSubmit={onCreateNewMonitor}
        onClose={() => setOpenCreateMonitor(false)}
        vendorName={Name || ""}
      />
    </div>
  );
};

export default VendorItem;
