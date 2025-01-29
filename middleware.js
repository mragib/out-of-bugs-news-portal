import { VerifyToken } from "@/utility/JWTTokenHelper";
import { NextResponse } from "next/server";

export async function middleware(req) {
  try {
    // Retrieve the token from cookies

    const token = req.cookies.get("token");
    if (!token) {
      throw new Error("Token not found in cookies");
    }

    // Verify the token and extract payload
    const payload = await VerifyToken(token["value"]);

    // Attach email and id to request headers
    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload.email);
    requestHeader.set("id", payload.id);

    // Proceed to the next middleware/handler
    return NextResponse.next({ request: { headers: requestHeader } });
  } catch (error) {
    console.error("Middleware error:", error.message, error.stack);

    // Handle unauthorized requests
    if (req.nextUrl.pathname.startsWith("/api")) {
      return NextResponse.json(
        { status: "fail", message: "Unauthorized" },
        { status: 401 }
      );
    } else {
      // Redirect to login page for non-API routes
      return NextResponse.redirect(new URL("/user/login", req.url));
    }
  }
}

// Define routes for middleware matching
export const config = {
  matcher: [
    "/user",
    "/profile",
    "/comments",
    "/api/comments/manage",
    "/api/user/profile",
  ],
};
