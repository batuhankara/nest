export class HttpException extends Error {
  public readonly message: any;

  /**
<<<<<<< HEAD
   * The base Nest Application exception which is handled by the default Exceptions Handler.
   * If you throw an exception from your HTTP route handlers, Nest will map them to the appropriate HTTP response and send to the client.
=======
   * The base Nest Application exception, which is handled by the default Exceptions Handler.
   * If you throw an exception from your HTTP route handler, Nest will map them to the appropriate HTTP response and send to the client.
>>>>>>> master
   *
   * When `response` is an object:
   * - object will be stringified and returned to the user as a JSON response,
   *
   * When `response` is a string:
   * - Nest will create a response with two properties:
   * ```
   * message: response,
   * statusCode: X
   * ```
   */
  constructor(
    private readonly response: string | object,
    private readonly status: number,
  ) {
    super();
    this.message = response;
  }

  public getResponse(): string | object {
    return this.response;
  }

  public getStatus(): number {
    return this.status;
  }
}
