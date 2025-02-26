import { Metadata } from "next"
import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import {
  BellIcon,
  ChevronRightIcon,
  CopyIcon,
  DropletsIcon,
  HistoryIcon,
  LandmarkIcon,
  ListIcon,
  PlugIcon,
  Settings2Icon,
  TvIcon,
  WalletIcon,
  WifiIcon,
  ZapIcon
} from "lucide-react"

import { APP_NAME } from "@/shared/brand"
import { Button } from "@/ui/button"

import AppIcon from "@/images/brand/icon.svg"
import ManAvatar from "@/images/man.png"
import { withdrawalRoute } from "@/shared/routes"

export const metadata: Metadata = {
  title: `Dashboard — ${APP_NAME.default}`
}

export default function DashboardPage() {
  return (
    <div>
      <header className="sticky top-0 bg-white">
        <div className="app-container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link className="flex items-center space-x-2" href="/">
              <Image
                alt={`${APP_NAME.default} Icon`}
                className="h-8 w-8"
                unoptimized
                src={AppIcon as StaticImageData}
              />
              <div className="text-xl font-bold">{APP_NAME.default}</div>
            </Link>
            <div className="flex gap-2">
              <Button className="h-10 w-10 rounded-full" variant="ghost">
                <BellIcon className="h-5 w-5 text-gray-700" />
              </Button>
              <Button className="h-10 w-10 rounded-full p-0" variant="ghost">
                <Image
                  className="h-8 w-8 rounded-full"
                  width="250"
                  height="250"
                  alt="user"
                  src={ManAvatar}
                />
              </Button>
            </div>
          </div>

          <hr className="h-px border-none bg-gray-200" />
        </div>
      </header>

      <main>
        <section>
          <div className="app-container mx-auto px-4 py-4">
            <h2 className="mb-4 text-lg font-medium text-gray-800">Pay</h2>
            <div className="grid grid-cols-3 items-center justify-center gap-3">
              <a
                className="flex flex-col items-center justify-center gap-2 rounded-md bg-green-100 px-8 py-4 transition-colors hover:bg-green-200"
                href="#"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <ZapIcon className="h-4 w-4 text-green-700" />
                </div>
                <div className="text-sm">Airtime</div>
              </a>

              <a
                className="flex flex-col items-center justify-center gap-2 rounded-md bg-rose-100 px-8 py-4 transition-colors hover:bg-rose-200"
                href="#"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <WifiIcon className="h-4 w-4 text-rose-700" />
                </div>
                <div className="text-sm">Data</div>
              </a>

              <a
                className="flex flex-col items-center justify-center gap-2 rounded-md bg-purple-100 px-8 py-4 transition-colors hover:bg-purple-200"
                href="#"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <TvIcon className="h-4 w-4 text-purple-700" />
                </div>
                <div className="text-sm">TV</div>
              </a>

              <a
                className="flex flex-col items-center justify-center gap-2 rounded-md bg-orange-100 px-8 py-4 transition-colors hover:bg-orange-200"
                href="#"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <PlugIcon className="h-4 w-4 text-orange-700" />
                </div>
                <div className="text-sm">Electricity</div>
              </a>

              <a
                className="flex flex-col items-center justify-center gap-2 rounded-md bg-slate-100 px-8 py-4 transition-colors hover:bg-slate-200"
                href="#"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <DropletsIcon className="h-4 w-4 text-slate-700" />
                </div>
                <div className="text-sm">Water</div>
              </a>

              <a
                className="flex flex-col items-center justify-center gap-2 rounded-md bg-teal-100 px-8 py-4 transition-colors hover:bg-teal-200"
                href="#"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                  <ListIcon className="h-4 w-4 text-teal-700" />
                </div>
                <div className="text-sm">More</div>
              </a>
            </div>
          </div>
        </section>

        <div className="app-container mx-auto mb-4 px-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <section>
              <div className="h-full rounded-md bg-white p-4 shadow-[rgba(0,0,0,0.2)_0px_0px_2px_1px]">
                <h2 className="mb-4 text-sm text-gray-600">Wallet Balance</h2>
                <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
                  <div className="grow-[1000] text-2xl font-bold">
                    ₦3,438.50
                  </div>
                  <Button size="sm" asChild className="grow rounded-full">
                    <a href="#">
                      <WalletIcon className="h-4 w-4" /> Add Funds
                    </a>
                  </Button>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full rounded-full text-primary hover:text-primary"
                >
                  <a href="#">
                    <HistoryIcon className="h-4 w-4" /> Funding History
                  </a>
                </Button>
              </div>
            </section>
            <section>
              <div className="h-full rounded-md bg-white p-4 shadow-[rgba(0,0,0,0.2)_0px_0px_2px_1px]">
                <h2 className="mb-4 text-sm text-gray-600">
                  Referral Earnings
                </h2>
                <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
                  <div className="grow-[1000] text-2xl font-bold">
                    ₦2,000.00
                  </div>
                  <Button size="sm" asChild className="grow rounded-full">
                    <a href="#">
                      <Settings2Icon className="h-4 w-4" /> Dashboard
                    </a>
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full text-primary hover:text-primary"
                  >
                    <CopyIcon className="h-4 w-4" /> Copy Link
                  </Button>
                  <Button
                    className="rounded-full text-primary hover:text-primary"
                    asChild
                    variant="outline"
                    size="sm"
                  >
                    <Link href={withdrawalRoute()}>
                      Withdraw <LandmarkIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="mb-4">
          <div className="app-container mx-auto px-4">
            <div className="overflow-hidden rounded-md bg-white shadow-[rgba(0,0,0,0.2)_0px_0px_2px_1px]">
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
                <h2 className="text-sm text-gray-600">Transaction History</h2>
                <Button
                  asChild
                  className="rounded-full text-primary hover:text-primary"
                  variant="ghost"
                  size="sm"
                >
                  <a href="#">
                    See More <ChevronRightIcon className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <ul className="text-sm">
                <li>
                  <a
                    className="flex items-start gap-2 p-4 transition-colors hover:bg-gray-50 [&>*]:flex-[1_1_max-content] [&>:first-child]:flex-[0_0_36px]"
                    href="#"
                  >
                    <div className="flex aspect-square items-center justify-center rounded-full bg-green-100">
                      <ZapIcon className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <p>Airtime for 08123456789</p>
                      <div className="text-xs text-gray-600">Feb 24, 2025</div>
                    </div>
                    <div className="flex justify-center">
                      <div className="h-max w-max rounded-full border border-green-700 bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                        Success
                      </div>
                    </div>
                    <div className="text-right">₦1,000</div>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-start gap-2 p-4 transition-colors hover:bg-gray-50 [&>*]:flex-[1_1_max-content] [&>:first-child]:flex-[0_0_36px]"
                    href="#"
                  >
                    <div className="flex aspect-square items-center justify-center rounded-full bg-green-100">
                      <ZapIcon className="h-4 w-4 text-green-700" />
                    </div>
                    <div>
                      <p>Airtime for 08123456789</p>
                      <div className="text-xs text-gray-600">Feb 24, 2025</div>
                    </div>
                    <div className="flex justify-center">
                      <div className="h-max w-max rounded-full border border-green-700 bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                        Success
                      </div>
                    </div>
                    <div className="text-right">₦1,000</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
