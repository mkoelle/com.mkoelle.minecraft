import * as express from 'express'
import { Server, Path, GET, PUT } from 'typescript-rest'

const port = process.env.PORT || 3000

class System {
  public status: string;

  constructor () {
    this.status = 'DOWN'
  }
}

const system = new System()

/**
 * This is a demo operation to show how to use typescript-rest library.
 */
@Path('/System')
// eslint-disable-next-line no-unused-vars
class SystemService {
  /**
  * Starts the system
  */
  @Path('/Start')
  @PUT
  start (): string {
    system.status = 'UP'
    return 'System Started'
  }

  /**
  * Stops the system
  */
  @Path('/Stop')
  @PUT
  stop (): string {
    system.status = 'DOWN'
    return 'System Stopped'
  }

  /**
  * Retrieves the system status
  */
  @Path('/Status')
  @GET
  status (): string {
    return `System is ${system.status}`
  }
}

const app: express.Application = express()

Server.buildServices(app)
Server.swagger(app, { filePath: './dist/swagger.json' })

app.listen(port, function () {
  console.log(`Server started at http://localhost:${port}`)
  console.log(`Api docs available at http://localhost:${port}/api-docs/`)
})
