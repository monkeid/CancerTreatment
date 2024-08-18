import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://cancertreatment_owner:7by2eLYtMOrl@ep-calm-star-a5fk2lru.us-east-2.aws.neon.tech/cancertreatment?sslmode=require"
);
export const db = drizzle(sql, { schema });
