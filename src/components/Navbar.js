import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Find Job', href: '/', current: false },
  { name: 'Companies', href: '/', current: false },
  { name: 'Candidates', href: '/', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}





function Navbar() {
  return (
    <div>
    <Disclosure as="nav" className="sticky bg-light-800 shadow-md w-[100%]">
      <div className="mx-auto sticky max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center cursor-pointer">
              <img
                alt="Your Company"
                src="https://jobbox.archielite.com/storage/general/logo.png"
                className="h-7 w-auto"
              />
            </div>
            <div className="hidden sm:ml-8 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-[#3C65F4] text-white' : 'text-gray-500 hover:bg-[#3C65F4] hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                   
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-8 sm:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
         
          <button className='bg-[#3C65F4] text-white rounded-md  px-3 py-2 text-sm font-medium'>Sign In</button>
          <button className='bg-[#3C65F4] text-white rounded-md ml-3 px-3 py-2 text-sm font-medium'>Register</button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-[#05264e] hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
   
    </div>
  )
}

export default Navbar