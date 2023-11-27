import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export const ButtonCreate = () => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-sm bg-primary px-4 py-2 text-base font-normal text-white-secondary shadow-sm hover:bg-primary">
            Criar
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? 'bg-primary-100 text-white-secondary'
                        : 'text-white-secondary',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Modulo
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? 'bg-primary-100 text-white-secondary'
                        : 'text-white-secondary',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Lição
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
