import * as express from 'express'
import { Server, Path, GET, PathParam } from 'typescript-rest'

const port = process.env.PORT || 3000

/**
 * This is a demo operation to show how to use typescript-rest library.
 */
@Path('/hello')
// eslint-disable-next-line no-unused-vars
class HelloService {
  /**
  * Send a greeting message.
  * @param name The name that will receive our greeting message
  */
  @Path(':name')
  @GET
  sayHello (@PathParam('name') name: string): string {
    return 'Hello ' + name
  }
}

const app: express.Application = express()

Server.buildServices(app)
Server.swagger(app, { filePath: './dist/swagger.json' })

app.listen(port, function () {
  console.log(`Server started at http://localhost:${port}`)
  console.log(`Api docs available at http://localhost:${port}/api-docs/`)
})
