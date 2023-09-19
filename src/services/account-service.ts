import { Client, Row } from '@libsql/client'
import { Account } from '@/models/account'

export class AccountService {
  _client: Client

  constructor(client: Client) {
    this._client = client
  }

  async getAccounts(): Promise<any> {
    const accounts = await this._client.execute(`SELECT * from accounts`)
    return accounts
  }
}
