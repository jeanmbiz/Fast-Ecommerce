import { Router } from "express";
import {
  createAddressController,
  deleteAddressController,
  listAddressesController,
  listAddressByUserController,
  updateAddressController,
} from "../controllers/addresses.controllers";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureAdminMiddleare from "../middlewares/ensureAdminMiddleare";
import ensureAdmOrUserMiddleware from "../middlewares/ensureAdmOrUser.middleware";
import { addressSerializer } from "../serializers/address.serializers";

const addressRoutes = Router();

addressRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(addressSerializer),
  createAddressController
);
addressRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureAdminMiddleare,
  listAddressesController
);
addressRoutes.get(
  "/:id",
  ensureAuthMiddleware,
  ensureAdmOrUserMiddleware,
  listAddressByUserController
);
addressRoutes.patch("/:id", updateAddressController);
addressRoutes.delete("/:id", deleteAddressController);

export default addressRoutes;
