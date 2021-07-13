import * as express from 'express'
import databaseConfig from './database'
import routes from './routes'
import * as dotenv from 'dotenv'
dotenv.config()

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
    this.database()
  }

  private database (): void{
    databaseConfig.connect(process.env.MONGO_DB_CONNECT)
  }
  private middlewares (): void {
    this.express.use(express.json())
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
