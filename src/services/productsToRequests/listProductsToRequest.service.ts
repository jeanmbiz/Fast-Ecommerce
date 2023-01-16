import AppDataSource from "../../data-source";
import Request from "../../entities/request.entity";
import { AppError } from "../../errors/AppError";

const listProductsToRequestService = async (
  requestId: string,
  userId: string
): Promise<Request> => {
  const requestsRepository = AppDataSource.getRepository(Request);

  const request = await requestsRepository
    .createQueryBuilder("request")
    .innerJoinAndSelect("request.user", "user")
    .where("request.id = :id", { id: requestId })
    .getOne();

  if (request.user.id !== userId) {
    throw new AppError("Invalid request id", 400);
  }

  const productsToRequest = await requestsRepository
    .createQueryBuilder("requests")
    .innerJoinAndSelect("requests.productTorequest", "products")
    .where("requests.id = :id", { id: request.id })
    .getOne();

  return productsToRequest;
};

export default listProductsToRequestService;
