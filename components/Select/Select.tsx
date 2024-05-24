/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react';
import Image from 'next/image';
import { Check } from 'phosphor-react';
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Select({ selected, setSelected, options }: any) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Label className="block sr-only text-sm font-medium text-gray-700">
            Assigned to
          </Label>
          <div className="mt-1 relative">
            <ListboxButton className="bg-white py-3 px-4 relative lg:w-96 w-full md:w-[500px] border border-gray-300 rounded-md shadow-sm text-left cursor-default focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent">
              <span className="block truncate">{selected.value}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <div className="relative h-8 w-8">
                  <Image
                    src="/icons/caret-up-down.svg"
                    fill
                    alt=""
                    className="object-cover"
                  />
                </div>
              </span>
            </ListboxButton>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions
                static
                className="absolute mt-1 lg:w-96 w-full md:w-[500px] bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {options.map((option: any) => (
                  <ListboxOption
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-secondary' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {option.value}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-secondary',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <Check size={20} />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
