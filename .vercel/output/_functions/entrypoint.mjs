import "./chunks/virtual_SSdfeHhT.mjs";
import { PrismaNeon } from "@prisma/adapter-neon";
import * as nodePath from "node:path";
import { fileURLToPath } from "node:url";
import * as runtime from "@prisma/client/runtime/client";
import { d as defineAction } from "./chunks/index_C4cny-Ij.mjs";
import { s as stringType, o as objectType, n as numberType } from "./chunks/astro/server_fyYZyJDP.mjs";
const config = {
  "previewFeatures": [],
  "clientVersion": "7.2.0",
  "engineVersion": "0c8ef2ce45c83248ab3df073180d5eda9e8be7a3",
  "activeProvider": "postgresql",
  "inlineSchema": 'generator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "postgresql"\n}\n\nmodel Post {\n  id    String  @id @db.VarChar\n  title String? @db.VarChar\n  likes Int     @default(0)\n}\n\nmodel account {\n  id                    String    @id\n  accountId             String\n  providerId            String\n  userId                String\n  accessToken           String?\n  refreshToken          String?\n  idToken               String?\n  accessTokenExpiresAt  DateTime?\n  refreshTokenExpiresAt DateTime?\n  scope                 String?\n  password              String?\n  createdAt             DateTime  @default(now())\n  updatedAt             DateTime\n  user                  user      @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([userId])\n}\n\nmodel client {\n  id        String  @id(map: "client_pk") @db.Uuid\n  name      String  @db.VarChar\n  age       Int?    @default(0)\n  is_active Boolean @default(true)\n}\n\nmodel product {\n  id            String          @id @default(uuid())\n  description   String?         @db.VarChar(250)\n  gender        String?         @db.VarChar(80)\n  price         Float           @db.Real\n  sizes         String?         @db.VarChar(100)\n  slug          String          @unique @db.VarChar(250)\n  stock         Int?\n  tags          String?         @db.VarChar(250)\n  title         String?         @db.VarChar(250)\n  type          String?         @db.VarChar(150)\n  user_id       String?\n  user          user?           @relation(fields: [user_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "fk_product_user")\n  product_image product_image[]\n}\n\nmodel product_image {\n  id         String   @id @default(uuid())\n  image      String?  @db.VarChar(250)\n  product_id String?  @db.Uuid\n  product    product? @relation(fields: [product_id], references: [id], onDelete: NoAction, onUpdate: NoAction, map: "fk_image_pid")\n}\n\nmodel role {\n  id   String @id @db.Uuid\n  name String @db.VarChar(80)\n}\n\nmodel session {\n  id        String   @id\n  expiresAt DateTime\n  token     String   @unique\n  createdAt DateTime @default(now())\n  updatedAt DateTime\n  ipAddress String?\n  userAgent String?\n  userId    String\n  user      user     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@index([userId])\n}\n\nmodel user {\n  id            String    @id\n  name          String\n  email         String    @unique\n  emailVerified Boolean   @default(false)\n  image         String?\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime\n  account       account[]\n  product       product[]\n  session       session[]\n}\n\nmodel verification {\n  id         String   @id\n  identifier String\n  value      String\n  expiresAt  DateTime\n  createdAt  DateTime @default(now())\n  updatedAt  DateTime\n\n  @@index([identifier])\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"Post":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"likes","kind":"scalar","type":"Int"}],"dbName":null},"account":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"accountId","kind":"scalar","type":"String"},{"name":"providerId","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"accessToken","kind":"scalar","type":"String"},{"name":"refreshToken","kind":"scalar","type":"String"},{"name":"idToken","kind":"scalar","type":"String"},{"name":"accessTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"refreshTokenExpiresAt","kind":"scalar","type":"DateTime"},{"name":"scope","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"user","kind":"object","type":"user","relationName":"accountTouser"}],"dbName":null},"client":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"age","kind":"scalar","type":"Int"},{"name":"is_active","kind":"scalar","type":"Boolean"}],"dbName":null},"product":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"description","kind":"scalar","type":"String"},{"name":"gender","kind":"scalar","type":"String"},{"name":"price","kind":"scalar","type":"Float"},{"name":"sizes","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"stock","kind":"scalar","type":"Int"},{"name":"tags","kind":"scalar","type":"String"},{"name":"title","kind":"scalar","type":"String"},{"name":"type","kind":"scalar","type":"String"},{"name":"user_id","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"user","relationName":"productTouser"},{"name":"product_image","kind":"object","type":"product_image","relationName":"productToproduct_image"}],"dbName":null},"product_image":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"image","kind":"scalar","type":"String"},{"name":"product_id","kind":"scalar","type":"String"},{"name":"product","kind":"object","type":"product","relationName":"productToproduct_image"}],"dbName":null},"role":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"}],"dbName":null},"session":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"token","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"ipAddress","kind":"scalar","type":"String"},{"name":"userAgent","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"user","kind":"object","type":"user","relationName":"sessionTouser"}],"dbName":null},"user":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"emailVerified","kind":"scalar","type":"Boolean"},{"name":"image","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"},{"name":"account","kind":"object","type":"account","relationName":"accountTouser"},{"name":"product","kind":"object","type":"product","relationName":"productTouser"},{"name":"session","kind":"object","type":"session","relationName":"sessionTouser"}],"dbName":null},"verification":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"identifier","kind":"scalar","type":"String"},{"name":"value","kind":"scalar","type":"String"},{"name":"expiresAt","kind":"scalar","type":"DateTime"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer } = await import("node:buffer");
  const wasmArray = Buffer.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_bg.postgresql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  }
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}
runtime.Extensions.getExtensionContext;
({
  DbNull: runtime.NullTypes.DbNull,
  JsonNull: runtime.NullTypes.JsonNull,
  AnyNull: runtime.NullTypes.AnyNull
});
runtime.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
runtime.Extensions.defineExtension;
globalThis["__dirname"] = nodePath.dirname(fileURLToPath(import.meta.url));
const PrismaClient = getPrismaClientClass();
const connectionString = "postgresql://neondb_owner:npg_f29PLUmKvBzl@ep-dark-wildflower-ah3x341k-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({
  adapter
});
const getProductBySlug = defineAction({
  accept: "json",
  input: stringType(),
  handler: async (slug) => {
    const product = await prisma.product.findUnique({
      where: {
        slug
      },
      include: {
        product_image: true
      }
    });
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
});
const getProductsByPage = defineAction({
  accept: "json",
  input: objectType({
    page: numberType().optional().default(1),
    limit: numberType().optional().default(12)
  }),
  handler: async ({ page, limit }) => {
    page = page <= 0 ? 1 : page;
    const totalProducts = await prisma.product.count();
    const totalPages = Math.ceil(totalProducts / limit);
    if (page > totalPages) {
      return {
        page,
        limit,
        totalPages,
        totalProducts,
        products: []
      };
    }
    const products = await prisma.product.findMany({
      take: limit,
      skip: (page - 1) * limit,
      // INNER JOIN
      include: {
        product_image: {
          take: 2
        }
      }
      // Referencia para futuros usos:
      // orderBy: {
      //     created_at: 'desc'
      // }
    });
    return {
      page,
      limit,
      totalPages,
      totalProducts,
      products
    };
  }
});
const server = {
  //Auth
  // ...
  // Productos
  getProductsByPage,
  getProductBySlug
};
export {
  server
};
