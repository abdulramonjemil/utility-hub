"use client"

import { useEffect, useState } from "react"
import { AlertOctagonIcon, LandmarkIcon, LoaderIcon } from "lucide-react"

import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/ui/command"
import { Input } from "@/ui/input"
import { Button } from "@/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "@/ui/dialog"
import { ScrollArea } from "@/ui/scroll-area"

import { inputs } from "./shared"

/**
 * The type of data returned by https://nigeriabanks.xyz
 * See https://github.com/ichtrojan/nigerian-banks
 */
interface Bank {
  name: string
  slug: string
  code: string
  ussd: string
  logo: string
}

/**
 * Simple object to provide basic caching for the fetch()
 */
const bankInfoCache: { value: Bank[] | null } = { value: null }

function BankSelectionArea({
  handleBankSelection
}: {
  handleBankSelection: (bank: Bank) => void
}) {
  const [banks, setBanks] = useState<Bank[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  if (isLoading && bankInfoCache.value !== null) {
    setBanks(bankInfoCache.value)
    setIsLoading(false)
    setError(null)
  }

  useEffect(() => {
    if (!isLoading) return
    ;(async () => {
      const response = await fetch("https://nigerianbanks.xyz/")
      if (!response.ok) {
        throw new Error("Unexpected API result")
      }
      const data = (await response.json()) as unknown
      if (!Array.isArray(data)) {
        throw new Error("Unexpected API result")
      }
      bankInfoCache.value = data as Bank[]
      setBanks(data as Bank[])
      setIsLoading(false)
    })().catch((e) => {
      setError(e)
      setIsLoading(false)
    })
  }, [isLoading])

  return (
    <Command>
      <CommandInput />
      {!Array.isArray(banks) && (
        <div className="flex h-72 items-center justify-center">
          {isLoading && (
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <LoaderIcon className="h-5 w-5" /> Fetching Banks
            </div>
          )}

          {Boolean(error) && (
            <div className="flex items-center justify-center gap-2 rounded-md bg-red-100 p-4 text-sm text-red-700">
              <AlertOctagonIcon className="h-5 w-5" /> Failed to Load Banks
            </div>
          )}
        </div>
      )}

      {Array.isArray(banks) && (
        <CommandList>
          <ScrollArea className="h-72">
            <CommandGroup>
              {banks
                .sort((a, b) =>
                  a.name.localeCompare(b.name, undefined, {
                    sensitivity: "base"
                  })
                )
                .map((bank) => (
                  <CommandItem
                    asChild
                    key={bank.code}
                    value={bank.name}
                    onSelect={() => {
                      handleBankSelection(bank)
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="h-6 w-6 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
                        alt={`${bank.name} logo`}
                        loading="lazy"
                        src={bank.logo}
                      />
                      <div className="text-sm">{bank.name}</div>
                    </div>
                  </CommandItem>
                ))}
            </CommandGroup>
          </ScrollArea>
        </CommandList>
      )}
    </Command>
  )
}

export function AccountConfigurationArea() {
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null)
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <div className="rounded-md bg-white p-4 shadow-[rgba(0,0,0,0.2)_0px_0px_2px_1px]">
      <div className="mb-4">
        <label
          className="mb-2 block text-sm text-gray-700"
          htmlFor={inputs.accountNumber.id}
        >
          Account Number
        </label>

        <Input
          className="spinless-input"
          id={inputs.accountNumber.id}
          required
          type="number"
        />
      </div>

      <div className="mb-4">
        <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
          <DialogTrigger asChild>
            <Button
              type="button"
              className="w-full justify-start gap-2 px-4 py-6 text-gray-600"
              variant="outline"
              size="sm"
            >
              {selectedBank ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="h-6 w-6 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
                  alt={`${selectedBank.name} logo`}
                  loading="lazy"
                  src={selectedBank.logo}
                />
              ) : (
                <LandmarkIcon className="h-4 w-4" />
              )}
              <span>{selectedBank ? selectedBank.name : "Select Bank"}</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md sm:rounded-none">
            <DialogTitle className="sr-only">Select Bank</DialogTitle>
            <DialogDescription className="sr-only">
              Select the host bank for the account in the list below
            </DialogDescription>
            <BankSelectionArea
              handleBankSelection={(bank) => {
                setSelectedBank(bank)
                setDialogIsOpen(false)
              }}
            />
          </DialogContent>
        </Dialog>
      </div>

      <p className="rounded-md bg-green-100 p-4 text-sm text-green-700">
        Alice Jane Doe
      </p>
    </div>
  )
}
