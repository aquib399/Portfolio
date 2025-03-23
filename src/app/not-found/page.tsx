import { Metadata } from "next";
import NotFoundClient from "./not-found";

export const metadata: Metadata = {
  title: "Not Found",
  description: "404 Page Not Found",
};

export default function NotFoundPage() {
  return <NotFoundClient />;
}
