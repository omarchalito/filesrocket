export {
  BadRequest,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  ProxyAuthenticationRequired,
  RequestTimeout,
  Conflict,
  Gone,
  NetworkAuthenticationRequire,
  VariantAlsoNegotiates,
  NotExtended,
  LengthRequired,
  PreconditionFailed,
  PayloadTooLarge,
  URITooLong,
  UnsupportedMediaType,
  RangeNotSatisfiable,
  ExpectationFailed,
  ImATeapot,
  MisdirectedRequest,
  UnprocessableEntity,
  Locked,
  FailedDependency,
  UnorderedCollection,
  UpgradeRequired,
  PreconditionRequired,
  TooManyRequests,
  RequestHeaderFieldsTooLarge,
  UnavailableForLegalReasons,
  InternalServerError,
  NotImplemented,
  BadGateway,
  ServiceUnavailable,
  InsufficientStorage,
  GatewayTimeout,
  HTTPVersionNotSupported,
  LoopDetected,
  BandwidthLimitExceeded
} from "http-errors";
import _createHttpError from "http-errors";
export const createHttpError = _createHttpError;
