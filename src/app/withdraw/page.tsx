import { Metadata } from "next"
import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import { ArrowLeftIcon, LandmarkIcon } from "lucide-react"

import { APP_NAME } from "@/shared/brand"
import AppGhostIcon from "@/images/brand/icon-ghost.svg"
import { Button } from "@/ui/button"
import { dashboardRoute, homeRoute } from "@/shared/routes"

import ManAvatar from "@/images/man.png"

import { BankAccountConfigurationArea } from "./bank"
import { inputs } from "./shared"

export const metadata: Metadata = {
  title: `Withdraw Referral Earnings — ${APP_NAME.default}`
}

export default function WithdrawalPage() {
  return (
    <div className="pb-12">
      <header>
        <div className="mx-auto max-w-md px-4">
          <div className="mb-6 mt-8 flex items-center justify-between">
            <div>
              <Button
                asChild
                className="rounded-full"
                variant="outline"
                size="icon"
              >
                <Link href={dashboardRoute()}>
                  <ArrowLeftIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <Link href={homeRoute()}>
                <Image
                  alt={`${APP_NAME.default} Icon`}
                  className="h-20 w-20"
                  unoptimized
                  src={AppGhostIcon as StaticImageData}
                />
              </Link>
            </div>
            <div>
              <Button className="rounded-full p-0" variant="ghost" size="icon">
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
        </div>
      </header>

      <main>
        <section>
          <div className="mx-auto max-w-md px-4">
            <h1 className="mb-8 text-center text-lg font-medium">
              Withdraw Referral Earnings
            </h1>

            <form>
              <div className="space-y-6">
                <div className="rounded-md bg-white p-4 shadow-[rgba(0,0,0,0.2)_0px_0px_2px_1px]">
                  <label
                    className="mb-2 block text-sm text-gray-700"
                    htmlFor={inputs.withdrawalAmount.id}
                  >
                    Amount to withdraw
                  </label>
                  <div className="mb-2 flex space-x-2 border-b border-gray-200 pb-2">
                    <div className="flex items-center text-3xl">₦</div>
                    <input
                      className="spinless-input min-w-0 grow text-3xl font-medium"
                      required
                      type="number"
                      placeholder="0.00"
                    />
                  </div>
                  <p className="text-right text-xs text-gray-600">
                    Available Earnings: ₦2,000
                  </p>
                </div>

                <BankAccountConfigurationArea />

                <div>
                  <Button
                    type="submit"
                    className="flex w-full gap-2 rounded-full"
                    size="lg"
                  >
                    <LandmarkIcon className="h-4 w-4" /> Withdraw
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
