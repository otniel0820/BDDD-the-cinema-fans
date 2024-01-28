import zod from "zod";
import { BaseEntity } from "./base";

export const USER_ID_PREFIX = "user"; // este es el prefijo que llevara el id de cada libro

export const userSchema = zod.object({
  contactDate: zod.string(),
  name: zod.string(),
  divice: zod.string(),
  address: zod.string(),
  city: zod.string(),
  status: zod.string(),
  followUp: zod.string(),
  followUpDate: zod.string(),
  comments: zod.string(),
  isClient: zod.boolean(),
});

export type UserDTO = zod.infer<typeof userSchema> & BaseEntity