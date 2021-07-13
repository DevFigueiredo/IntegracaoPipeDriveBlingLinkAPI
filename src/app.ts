import * as express from 'express'
import databaseConfig from './database'
import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
    this.database()
  }

  private database (): void{
    const urlCluster = 'mongodb+srv://LinkAPI:linkapi@cluster0.onsj6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    databaseConfig.connect(urlCluster)
  }
  private middlewares (): void {
    this.express.use(express.json())
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
