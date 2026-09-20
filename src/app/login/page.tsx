
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { BookOpen, Loader2 } from "lucide-react";

import {
  auth,
  signInWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
} from "@/firebase/config";


export default function LoginPage() {

  const router = useRouter();


  // ==========================================
  // FORM STATES
  // ==========================================

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("student");


  // ==========================================
  // UI STATES
  // ==========================================

  const [loading, setLoading] = useState(false);

  const [googleLoading, setGoogleLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");


  // ==========================================
  // EMAIL LOGIN
  // ==========================================

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setError("");

    setSuccess("");

    setLoading(true);


    try {

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );


      const user = userCredential.user;


      console.log("Logged in user:", user.uid);

      console.log("Selected role:", role);


      setSuccess(
        "Login successful! Redirecting..."
      );


      router.push("/dashboard");


    } catch (error: any) {

      console.error("Login error:", error);


      switch (error.code) {

        case "auth/invalid-credential":

          setError("Invalid email or password.");

          break;


        case "auth/invalid-email":

          setError("Please enter a valid email address.");

          break;


        case "auth/user-disabled":

          setError("This account has been disabled.");

          break;


        case "auth/too-many-requests":

          setError("Too many attempts. Try again later.");

          break;


        case "auth/network-request-failed":

          setError("Network error. Check your internet connection.");

          break;


        default:

          setError(
            error.message || "Login failed."
          );

      }

    } finally {

      setLoading(false);

    }

  };


  // ==========================================
  // GOOGLE LOGIN
  // ==========================================

  const handleGoogleLogin = async () => {

    setError("");

    setSuccess("");

    setGoogleLoading(true);


    try {

      const userCredential =
        await signInWithPopup(
          auth,
          googleProvider
        );


      const user = userCredential.user;


      console.log("Google user:", user.uid);

      console.log("Selected role:", role);


      setSuccess(
        "Google login successful! Redirecting..."
      );


      router.push("/dashboard");


    } catch (error: any) {

      console.error("Google login error:", error);


      if (
        error.code ===
        "auth/popup-closed-by-user"
      ) {

        setError("Google login was cancelled.");

      } else if (
        error.code ===
        "auth/popup-blocked"
      ) {

        setError("Popup was blocked. Please allow popups.");

      } else if (
        error.code ===
        "auth/unauthorized-domain"
      ) {

        setError("This domain is not authorized in Firebase.");

      } else {

        setError(
          error.message || "Google login failed."
        );

      }

    } finally {

      setGoogleLoading(false);

    }

  };


  // ==========================================
  // UI
  // ==========================================

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] px-4 py-12">

      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-sm border border-border">


        {/* HEADER */}

        <div className="text-center">

          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 text-[#315C4C]"
          >

            <BookOpen className="h-8 w-8" />

          </Link>


          <h2 className="mt-4 text-2xl font-bold text-[#1F2937]">

            Welcome back

          </h2>


          <p className="mt-2 text-sm text-[#6B7280]">

            Please sign in to your academic account

          </p>

        </div>



        {/* LOGIN FORM */}

        <form
          className="mt-8 space-y-6"
          onSubmit={handleLogin}
        >


          <div className="space-y-4">


            {/* EMAIL */}

            <div>

              <Label htmlFor="email">

                Email address

              </Label>


              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1"
                placeholder="student@college.edu"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>



            {/* PASSWORD */}

            <div>

              <Label htmlFor="password">

                Password

              </Label>


              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>



            {/* ROLE */}

            <div>

              <Label htmlFor="role">

                Role

              </Label>


              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) =>
                  setRole(e.target.value)
                }
                className="mt-1 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >

                <option value="student">

                  Student

                </option>


                <option value="faculty">

                  Faculty

                </option>

              </select>

            </div>

          </div>



          {/* FORGOT PASSWORD */}

          <div className="flex items-center justify-between">

            <div className="text-sm">

              <Link
                href="/forgot-password"
                className="font-medium text-[#315C4C] hover:text-[#264A3D]"
              >

                Forgot your password?

              </Link>

            </div>

          </div>



          {/* ERROR */}

          {error && (

            <div
              role="alert"
              className="rounded-md bg-red-50 border border-red-200 p-3 text-sm text-red-600"
            >

              {error}

            </div>

          )}



          {/* SUCCESS */}

          {success && (

            <div
              role="status"
              className="rounded-md bg-green-50 border border-green-200 p-3 text-sm text-green-700"
            >

              {success}

            </div>

          )}



          {/* BUTTONS */}

          <div className="space-y-3">


            {/* EMAIL LOGIN */}

            <Button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full bg-[#315C4C] hover:bg-[#264A3D]"
            >

              {loading ? (

                <>

                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />

                  Signing in...

                </>

              ) : (

                "Sign in"

              )}

            </Button>



            {/* GOOGLE LOGIN */}

            <Button
              variant="outline"
              type="button"
              disabled={loading || googleLoading}
              onClick={handleGoogleLogin}
              className="w-full"
            >

              {googleLoading ? (

                <>

                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />

                  Connecting to Google...

                </>

              ) : (

                "Continue with Google"

              )}

            </Button>


          </div>


        </form>



        {/* REGISTER LINK */}

        <p className="text-center text-sm text-[#6B7280]">

          Don't have an account?{" "}

          <Link
            href="/register"
            className="font-medium text-[#315C4C] hover:text-[#264A3D]"
          >

            Register here

          </Link>

        </p>


      </div>

    </div>

  );

}