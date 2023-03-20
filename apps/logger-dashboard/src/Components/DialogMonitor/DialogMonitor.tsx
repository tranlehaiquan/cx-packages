import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "@skedulo/sked-ui";

import { TextFieldContext } from "../TextField";
import { useInsertMonitorMutation } from "../../generated/graphql";

type Props = {
  isOpen: boolean;
  onSubmit: (data: any) => void;
  onClose: () => void;
  vendorId: string;
  vendorName: string;
};

const schema = yup
  .object({
    Name: yup.string().required(),
  })
  .required();

const DialogMonitor: React.FC<Props> = ({
  isOpen,
  onSubmit,
  onClose,
  vendorId,
  vendorName,
}) => {
  const [insertMonitor] = useInsertMonitorMutation();
  const methods = useForm({
    defaultValues: {
      Name: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    methods.reset();
  }, [isOpen, methods]);

  const handleSubmit = async (data: { Name: string }) => {
    const newMonitor = await insertMonitor({
      variables: {
        input: {
          VendorsId: vendorId,
          Name: data.Name,
        },
      },
    });

    onSubmit(newMonitor)
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  New monitor vendor {vendorName}
                  <span className="text-xs block">ID: {vendorId}</span>
                </Dialog.Title>
                <div className="mt-2">
                  <FormProvider {...methods}>
                    <TextFieldContext
                      type="text"
                      label="Name"
                      name="Name"
                      className="mb-3"
                    />
                  </FormProvider>
                </div>

                <div className="mt-4">
                  <Button
                    type="button"
                    onClick={methods.handleSubmit(handleSubmit)}
                    buttonType="primary"
                  >
                    Create
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogMonitor;
