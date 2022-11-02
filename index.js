import freshbooks from "@freshbooks/api";
import * as dotenv from "dotenv";

dotenv.config();

const { Client } = freshbooks;
const EXPIRED_FRESHBOOKS_TOKEN = process.env.EXPIRED_FRESHBOOKS_TOKEN;
const FRESH_BOOKS_CLIENT_ID = process.env.FRESHBOOKS_CLIENT_ID;
const FRESH_BOOKS_BUSINESS_ID = process.env.FRESH_BOOKS_BUSINESS_ID;

const freshBooks = new Client(FRESH_BOOKS_CLIENT_ID, {
  accessToken: EXPIRED_FRESHBOOKS_TOKEN,
});

try {
  const data = await freshBooks.projects.list(FRESH_BOOKS_BUSINESS_ID, []);
  // const data = await freshBooks.clients.single(FRESH_BOOKS_BUSINESS_ID, 1234);
  console.log(data);
} catch (error) {
  console.log(error);
}
