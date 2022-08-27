import { FormEvent, Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ArrowTopRightOnSquareIcon, Bars3Icon, CheckIcon, FireIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { Client } from '@sendgrid/client'

const sendgridClient = new Client()
sendgridClient.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY)

const discordInviteLink = '#'

const navigation = [
	{ name: 'Features', href: '#features' },
	{ name: 'Demo', href: '#' },
	{ name: 'Documentation', href: '#' },
	{ name: 'GitHub', href: 'https://github.com/pcommerce' },
]

function App() {
	return (
		<div className="bg-gray-900">
			<div className="relative overflow-hidden">
				<div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
					<div className="relative h-full">
						<DotPatterns />
					</div>
				</div>

				<div className="relative pt-6 pb-16 sm:pb-24">
					<Navigation />

					<div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
						<div className="text-center">
						<h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
							<span className="block">Billing software for</span>
							<span className="block text-orange-500">Pterodactyl</span>
						</h1>
						<p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
							pCommerce is an <b>open source</b> billing and client service software written in <b>Laravel</b> and <b>React</b>
						</p>
						</div>
					</div>
				</div>

				<div className="relative">
					<div className="absolute inset-0 flex flex-col" aria-hidden="true">
						<div className="flex-1" />
						<div className="flex-1 w-full bg-gray-800" />
					</div>
					<div className="max-w-7xl mx-auto px-4 sm:px-6">
						<div
							className="relative rounded-lg shadow-lg aspect-video bg-gray-700 flex justify-center items-center"
						>
							<FireIcon className='h-16 md:h-32 text-orange-500' />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-800">
				<Features />
				<Newsletter />
				<Footer />
			</div>
		</div>
	)
}

const DotPatterns = () => {
	return (
		<Fragment>
			<svg
				className="absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
				width={404}
				height={784}
				fill="none"
				viewBox="0 0 404 784"
			>
				<defs>
					<pattern
						id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
						x={0}
						y={0}
						width={20}
						height={20}
						patternUnits="userSpaceOnUse"
					>
						<rect x={0} y={0} width={4} height={4} className="text-gray-700" fill="currentColor" />
					</pattern>
				</defs>
				<rect width={404} height={784} fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)" />
			</svg>

			<svg
				className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
				width={404}
				height={784}
				fill="none"
				viewBox="0 0 404 784"
			>
				<defs>
					<pattern
						id="d2a68204-c383-44b1-b99f-42ccff4e5365"
						x={0}
						y={0}
						width={20}
						height={20}
						patternUnits="userSpaceOnUse"
					>
						<rect x={0} y={0} width={4} height={4} className="text-gray-700" fill="currentColor" />
					</pattern>
				</defs>
				<rect width={404} height={784} fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)" />
			</svg>
		</Fragment>
	)
}

const Navigation = () => {
	return (
		<Popover>
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
					<div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
						<div className="flex items-center justify-between w-full md:w-auto">
							<a href="#">
								<span className="sr-only">Workflow</span>
								<img
									className="h-8 w-auto sm:h-10"
									src="/pterodactyl.svg"
									alt="Logo"
								/>
							</a>
							<div className="-mr-2 flex items-center md:hidden">
								<Popover.Button className="bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
									<span className="sr-only">Open main menu</span>
									<Bars3Icon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>
					</div>

					<div className="hidden md:flex md:space-x-10">
						{navigation.map((item) => (
							<a key={item.name} href={item.href} className="font-medium text-gray-300 hover:text-gray-100">
								{item.name}
							</a>
						))}
					</div>

					<div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
						<span className="inline-flex rounded-md shadow">
							<a
								href={discordInviteLink}
								target={'_blank'}
								className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
							>
								Discord <ArrowTopRightOnSquareIcon className="-mr-1 ml-2 h-5 w-5 text-white" aria-hidden="true" />
							</a>
						</span>
					</div>
				</nav>
			</div>

			<Transition
				as={Fragment}
				enter="duration-150 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
				>
					<div className="rounded-lg shadow-md bg-gray-700 ring-1 ring-black ring-opacity-5 overflow-hidden">
						<div className="px-5 pt-4 flex items-center justify-between">
							<div>
								<img
									className="h-8 w-auto"
									src="/pterodactyl.svg"
									alt="Logo"
								/>
							</div>
							<div className="-mr-2">
								<Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
									<span className="sr-only">Close main menu</span>
									<XMarkIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>
						</div>

						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-gray-200 hover:bg-gray-600"
								>
									{item.name}
								</a>
							))}
						</div>

						<a
							href={discordInviteLink}
							target={'_blank'}
							className="flex justify-center w-full px-5 py-3 text-center font-medium text-white bg-indigo-500 hover:bg-indigo-600"
						>
							Discord <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5 text-white" aria-hidden="true" />
						</a>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}

const Features = () => {
	const features = [
		{
		  name: 'Polished UI',
		  description: 'User friendly control panel which will certainly help growing your business.',
		},
		{
			name: 'Fine permission system',
			description: 'You can set multiple permissions to an user, it\'s never been easier.',
		},
		{
			name: 'Invoicing',
			description: 'The system makes the invoices automatically so you don\'t have to deal with this.',
		},
		{
			name: 'Email Marketing',
			description: 'We made a simple email marketing system just for you. Why not increase your sales?',
		},
		{
			name: 'Notifications',
			description: 'We notify the users when they have a new invoice, etc. All of these are toggleable.',
		},
		{
			name: 'Tax managing',
			description: 'Just to make sure you are fully legal.',
		},
		{
			name: 'Custom plans',
			description: 'Either you want a fix plan or a customizeable one by the user: we got you.',
		},
		{
			name: 'Easy payments',
			description: 'We use PayPal and Stripe as our payment providers.',
		},
		{
			name: 'Affiliate program',
			description: 'Because why not?',
		},
		{
			name: 'User Help Center',
			description: 'Built in ticketing system, service status page, custom announcements etc.',
		},
	]
	  
	return (
		<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8" id='features'>
			<div>
				<h2 className="text-lg font-semibold text-orange-500">Everything you need</h2>
				<p className="mt-2 text-3xl tracking-tight font-bold text-white">All-in-one platform</p>
				<p className="mt-4 text-lg text-gray-400">
					We cover almost every business logic so you don't have to worry managing those.
				</p>
			</div>
			<div className="mt-12 lg:mt-0 lg:col-span-2">
				<dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-5 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
					{features.map((feature) => (
						<div key={feature.name} className="relative">
							<dt>
								<CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
								<p className="ml-9 text-lg leading-6 font-medium text-white">{feature.name}</p>
							</dt>
							<dd className="mt-2 ml-9 text-base text-gray-400">{feature.description}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	)
}

const Newsletter = () => {
	const [email, setEmail] = useState('')

	const subscribeToNewsletter = async (e: FormEvent) => {
		e.preventDefault()

		if (!email) return;

		try {
			const response = await sendgridClient.request({
				method: 'PUT',
				url: '/v3/marketing/contacts',
				body: {
					contacts: [{ email }]
				},
			})

			console.log(response)
			setEmail('')
		} catch (e) {
			console.error('Could not subscribe.')
		}
	}

	return (
		<div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
			<div className="px-6 py-6 bg-gray-700 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
				<div className="xl:w-0 xl:flex-1">
					<h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Want development news and updates?</h2>
					<p className="mt-3 max-w-3xl text-lg leading-6 text-orange-200">
						Sign up for our newsletter to stay up to date.
					</p>
				</div>
				<div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
					<form className="sm:flex" onSubmit={subscribeToNewsletter}>
						<label htmlFor="email-address" className="sr-only">
							Email address
						</label>
						<input
							id="email-address"
							name="email-address"
							type="email"
							autoComplete="email"
							required
							value={email}
							onInput={(e) => setEmail(e.currentTarget.value)}
							className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none rounded-md"
							placeholder="Enter your email"
						/>
						<button
							type="submit"
							className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
						>
							Notify me
						</button>
					</form>
					<p className="mt-3 text-sm text-orange-200">
						We care about the protection of your data. Read our{' '}
						<a href="#" className="text-white font-medium underline">
							Privacy Policy.
						</a>
					</p>
				</div>
			</div>
      	</div>
	)
}

const footerNavigation = [
	{
		name: 'Twitter',
		href: '#',
		icon: (props: any) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
			</svg>
		),
	},
	{
		name: 'GitHub',
		href: 'https://github.com/pcommerce',
		icon: (props: any) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
			<path
				fillRule="evenodd"
				d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
				clipRule="evenodd"
			/>
			</svg>
		),
	},
]

const Footer = () => {
	return (
		<footer className="bg-gray-900">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
				<div className="flex justify-center space-x-6 md:order-2">
					{footerNavigation.map((item) => (
						<a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<div className="mt-8 md:mt-0 md:order-1">
					<p className="text-center text-base text-gray-400">&copy; {new Date().getFullYear()} pCommerce. All rights reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default App
