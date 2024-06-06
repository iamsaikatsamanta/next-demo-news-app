import { NextRequest } from "next/server";

export function GET(request: NextRequest) {
  return Response.json({ message: "Hello, World!" });
}

export function POST() {
  return axios.get(path, { params });
}
