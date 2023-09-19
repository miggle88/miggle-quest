import { getDatabaseClient } from '@/db'
import { AccountService } from '@/services/account-service'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const client = getDatabaseClient()
  const accountService = new AccountService(client)

  const accounts = await accountService.getAccounts()
  return NextResponse.json({ data: accounts })
}
