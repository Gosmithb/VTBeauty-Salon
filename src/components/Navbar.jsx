import { Fragment } from 'react'
import LoginButton from './Login'
import LogoutButton from './Logout'
import { useAuth0 } from "@auth0/auth0-react";
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
const solutions = [
  {
    name: 'Inicio',
    href: '/home',
    icon: ChartBarIcon,
  },
  {
    name: 'Registrar Cita',
    href: '/registrocita',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Servicios',
    href: '/servicios',
    icon: ShieldCheckIcon
  },
  {
    name: 'Productos',
    href: '/productos',
    icon: Squares2X2Icon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', icon: PlayIcon },
  { name: 'Contact Sales', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Ayuda',
    description: 'Contacta con nuestro soporte',
    href: '/ayuda',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guia',
    description: 'Guia sobre usos de la pagina',
    href: '/guia',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Seguridad',
    description: 'Politicas de seguridad',
    href: '/seguridad',
    icon: ShieldCheckIcon
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Popover className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <h4 className="text-3xl font-serif leading-normal mt-0 mb-2 text-stone-800">
                  VTBeauty Salon
                </h4>
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Link to='/' className="text-base font-medium text-gray-500 hover:text-gray-900">
                Inicio
              </Link>
              <Link to='/registrocita' className="text-base font-medium text-gray-500 hover:text-gray-900">
                Registrar cita
              </Link>
              <Link to='/servicios' className="text-base font-medium text-gray-500 hover:text-gray-900">
                Servicios
              </Link>
              <Link to='/productos' className="text-base font-medium text-gray-500 hover:text-gray-900">
                Productos
              </Link>

              {/* <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <span>M??s</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>

                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover> */}
            </Popover.Group>

            {isAuthenticated ?
              <LogoutButton /> :
              <LoginButton />
            }
            {/* <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link to='/iniciosesion' className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Iniciar Sesion
              </Link>
              <Link
                to='/registrarse'
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                Registrarse
              </Link>
            </div> */}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-3xl font-serif leading-normal mt-0 mb-2 text-stone-800">
                      VTBeauty Salon
                    </h4>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Cerrar menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {resources.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <Link
                    to="/registrarse"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                    Registrarse
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    ??Ya estas registrado?{' '}
                    <Link to="/iniciosesion" className="text-indigo-600 hover:text-indigo-500">
                      Iniciar Sesion
                    </Link>
                  </p>
                </div>
              </div>
            </div>

          </Popover.Panel>
        </Transition>
      </Popover>

    </>
  )
}
