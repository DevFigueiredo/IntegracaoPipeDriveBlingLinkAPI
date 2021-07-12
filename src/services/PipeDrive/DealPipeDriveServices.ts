import { pipeDriveAPI } from '../../config'
import * as dotenv from 'dotenv'

dotenv.config()

class DealPipeDriveServices {
  public async find (status: string): Promise<Record<string, any>> {
    try {
      const deals = (await pipeDriveAPI.get(`deals?status=${status}`)).data

      return deals
    } catch (error) {
      console.log(error)
    }
  }
}

export { DealPipeDriveServices }
