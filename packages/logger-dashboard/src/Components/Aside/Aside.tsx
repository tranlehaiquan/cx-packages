import { useState } from "react";
import { Button, Icon, Loading } from "@skedulo/sked-ui";
import DialogVendor from "../DialogVendor";

import {
  NewVendors,
  useFetchVendorsQuery,
  useInsertVendorMutation,
  Vendors,
} from "../../generated/graphql";
import VendorItem from "../VendorItem";

type Props = { className?: string; onSelect?: (id: string) => void };

const Aside: React.FC<Props> = ({ className, onSelect }) => {
  const { loading, refetch, error, data } = useFetchVendorsQuery();
  const [insertFnc, insertStatus] = useInsertVendorMutation();
  const [openVendor, setOpenVendor] = useState(false);

  const handleOnSubmit = async (data: NewVendors) => {
    await insertFnc({ variables: { input: data } });
    refetch();
    setOpenVendor(false);
  };

  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className={className}>
        <div className="flex justify-between mb-2">
          <Button
            buttonType="primary"
            onClick={() => setOpenVendor(true)}
            type="button"
            aria-controls="mobile-menu"
            aria-expanded="false"
            icon="plus"
          >
            Add Vendor
          </Button>
        </div>

        {loading && <Loading />}

        <div>
          {(data?.vendors.edges || []).map((vendor) => (
            <VendorItem
              key={vendor.node.UID}
              vendor={vendor.node as Vendors}
              onSelectMonitor={onSelect}
            />
          ))}
        </div>
      </div>

      <DialogVendor
        isOpen={openVendor}
        onClose={() => setOpenVendor(false)}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

export default Aside;
