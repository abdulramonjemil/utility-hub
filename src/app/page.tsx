"use client"

import { Button } from "@/ui/button"
import {
  ArrowRightIcon,
  ZapIcon,
  WifiIcon,
  CreditCardIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon
} from "lucide-react"

import { APP_NAME, APP_TAGLINE } from "@/shared/brand"
import { dashboardRoute, homeRoute } from "@/shared/routes"

import { type ReactNode } from "react"
import Image, { type StaticImageData } from "next/image"

import AppIcon from "@/images/brand/icon.svg"
import AppIconWhite from "@/images/brand/icon-white.svg"
import CoinHolderSVG from "@/images/illustrations/coin-holder.svg"
import Link from "next/link"

const sections = {
  services: { id: "services" },
  referralProgram: { id: "referral-program" },
  getStarted: { id: "get-started" }
} as const

function ServiceCard(props: {
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <div className="mx-auto mb-4 flex aspect-square w-14 items-center justify-center rounded-full bg-primary/10 md:mx-0">
        {props.icon}
      </div>
      <h3 className="mb-2 text-center text-xl font-semibold text-gray-800 md:text-left">
        {props.title}
      </h3>
      <p className="text-center text-gray-600 md:text-left">
        {props.description}
      </p>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen text-gray-800">
      <header className="sticky top-0 border-b border-gray-200 bg-white py-4 text-gray-800">
        <div className="flex items-center justify-between px-4 md:container md:mx-auto">
          <Link href={homeRoute()} className="flex items-center space-x-2">
            <Image
              alt={`${APP_NAME.default} Icon`}
              className="h-8 w-8"
              unoptimized
              src={AppIcon as StaticImageData}
            />
            <h1 className="text-2xl font-bold">{APP_NAME.default}</h1>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a
                  href={`#${sections.services.id}`}
                  className="hover:text-blue-600"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href={`#${sections.referralProgram.id}`}
                  className="hover:text-blue-600"
                >
                  Referral Program
                </a>
              </li>
              <li>
                <a
                  href={`#${sections.getStarted.id}`}
                  className="hover:text-blue-600"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
          <Button className="rounded-full" asChild>
            <Link href={dashboardRoute()}>Dashboard</Link>
          </Button>
        </div>
      </header>

      <main>
        <section>
          <div className="flex min-h-screen items-center py-20">
            <div className="mx-auto border-red-50 px-4 text-center md:container">
              <h2 className="mb-4 mt-[-48px] text-4xl font-bold text-gray-800 md:text-5xl">
                {APP_TAGLINE.default}
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
                {APP_NAME.default} makes airtime, data, and other bill payments
                hassle-free with our easy-to-use platform
              </p>
              <Button asChild className="rounded-full px-8 py-6 text-lg">
                <a href="#">
                  Get Started <ArrowRightIcon className="ml-2 inline-block" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section
          id={sections.services.id}
          className="border-y border-gray-200 py-12 md:py-20"
          style={{
            // eslint-disable-next-line quotes
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          <div className="mx-auto px-4 md:container">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
              Our Services
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <ServiceCard
                icon={<ZapIcon className="h-6 w-6 text-primary" />}
                title="Airtime"
                description="Recharge your phone instantly, anytime, anywhere."
              />
              <ServiceCard
                icon={<WifiIcon className="h-6 w-6 text-primary" />}
                title="Data"
                description="Get affordable, flexible data plans to stay connected."
              />
              <ServiceCard
                icon={<CreditCardIcon className="h-6 w-6 text-primary" />}
                title="Bills Payment"
                description="Pay for TV, electricity, and more, securely and without hassle."
              />
            </div>
          </div>
        </section>

        <section id={sections.referralProgram.id} className="py-12 md:py-20">
          <div className="mx-auto px-4 md:container">
            <div className="flex flex-col-reverse items-center gap-6 md:flex-row">
              <div className="mb-6 md:mb-0 md:w-1/2 md:pr-8">
                <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-left">
                  Refer and Earn
                </h2>
                <p className="mb-6 text-center text-lg text-gray-600 md:text-left">
                  Invite your friends and earn commission on their transactions
                </p>
                <Button
                  asChild
                  className="mx-auto flex rounded-full px-8 py-6 text-lg md:mx-0"
                >
                  <a className="w-max" href={`#${sections.referralProgram.id}`}>
                    Learn More
                  </a>
                </Button>
              </div>

              <div className="w-full max-w-sm md:w-1/2 md:max-w-none">
                <Image
                  alt={`${APP_NAME.default} Icon`}
                  className="h-full w-full"
                  unoptimized
                  src={CoinHolderSVG as StaticImageData}
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id={sections.getStarted.id}
          className="bg-gray-100 py-12 md:py-20"
        >
          <div className="mx-auto px-4 text-center md:container">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Join thousands of satisfied customers who trust {APP_NAME.default}{" "}
              for their daily needs.
            </p>

            <Button asChild className="rounded-full px-8 py-6 text-lg">
              <a href={`#${sections.getStarted.id}`}>
                Create Your Account <ArrowRightIcon className="ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 text-white">
        <div className="mx-auto px-4 md:container">
          <div className="grid items-start justify-center gap-4 md:grid-cols-3 md:justify-between md:gap-8">
            <div className="mx-auto flex items-center space-x-1 md:mx-0">
              <div
                className="ml-[-8px] h-8 w-8 bg-gray-400"
                style={{
                  maskMode: "alpha",
                  maskSize: "contain",
                  WebkitMaskImage: `url("${
                    (AppIconWhite as StaticImageData).src
                  }")`,
                  maskImage: `url("${(AppIconWhite as StaticImageData).src}")`
                }}
              />
              <h3 className="text-xl font-bold text-gray-400">
                {APP_NAME.default}
              </h3>
            </div>

            <div>
              <h4 className="mb-4 text-center text-sm md:text-left">
                Quick Links
              </h4>
              <div className="grid justify-center gap-2 md:grid-cols-2 md:justify-start">
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-300"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-300"
                >
                  Services
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-300"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-gray-300"
                >
                  FAQ
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-center text-sm md:text-left">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <InstagramIcon className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <FacebookIcon className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <TwitterIcon className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>

                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <LinkedinIcon className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <hr className="my-4 h-px border-none bg-gray-700" />
          <div className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {APP_NAME.default}. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
