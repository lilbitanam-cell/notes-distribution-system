
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
  db,
  createUserWithEmailAndPassword,
  googleProvider,
  signInWithPopup,
  updateProfile,
  doc,
  setDoc,
  serverTimestamp,
} from "@/firebase/config";


export default function RegisterPage() {

  const router = useRouter();


  // ==========================================
  // FORM STATES
  // ==========================================

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [department, setDepartment] = useState(
    "Computer Science"
  );

  const [semester, setSemester] = useState("1");

  const [role, setRole] = useState("student");


  // ==========================================
  // UI STATES
  // ==========================================

  const [loading, setLoading] = useState(false);

  const [googleLoading, setGoogleLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");


  // ==========================================
  // SAVE USER PROFILE IN FIRESTORE
  // ==========================================

  const saveUserProfile = async (
    uid: string,
    profile: {
      name: string;
      email: string;
      department: string;
      semester: string;
      role: string;
    }
  ) => {

    await setDoc(
      doc(db, "users", uid),
      {
        uid,
        name: profile.name,
        email: profile.email,
        department: profile.department,
        semester: profile.semester,
        role: profile.role,
        createdAt: serverTimestamp(),
      },
      {
        merge: true,
      }
    );

  };


  // ==========================================
  // EMAIL + PASSWORD REGISTRATION
  // ==========================================

  const handleRegister = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setError("");

    setSuccess("");

    setLoading(true);


    // Validate password

    if (password !== confirmPassword) {

      setError("Passwords do not match.");

      setLoading(false);

      return;

    }


    if (password.length < 6) {

      setError("Password must be at least 6 characters.");

      setLoading(false);

      return;

    }


    try {

      // Create Firebase Authentication account

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );


      const user = userCredential.user;


      // Set Firebase display name

      await updateProfile(user, {
        displayName: name.trim(),
      });


      // Save additional profile information

      await saveUserProfile(
        user.uid,
        {
          name: name.trim(),
          email: user.email || email.trim(),
          department,
          semester,
          role,
        }
      );


      console.log("Account created:", user.uid);


      setSuccess(
        "Account created successfully! Redirecting..."
      );


      // Redirect to dashboard

      router.push("/dashboard");


    } catch (error: any) {

      console.error("Registration error:", error);

      switch (error.code) {

        case "auth/email-already-in-use":

          setError(
            "This email is already registered."
          );

          break;


        case "auth/invalid-email":

          setError(
            "Please enter a valid email address."
          );

          break;


        case "auth/weak-password":

          setError(
            "Password must be at least 6 characters."
          );

          break;


        case "auth/network-request-failed":

          setError(
            "Network error. Check your internet connection."
          );

          break;


        default:

          setError(
            error.message || "Registration failed."
          );

      }

    } finally {

      setLoading(false);

    }

  };


  // ==========================================
  // GOOGLE REGISTRATION
  // ==========================================

  const handleGoogleRegister = async () => {

    setError("");

    setSuccess("");

    setGoogleLoading(true);


    try {

      // Open Google authentication popup

      const userCredential =
        await signInWithPopup(
          auth,
          googleProvider
        );


      const user = userCredential.user;


      // If name is entered, update display name

      if (name.trim()) {

        await updateProfile(user, {
          displayName: name.trim(),
        });

      }


      // Save Google user profile

      await saveUserProfile(
        user.uid,
        {
          name:
            name.trim() ||
            user.displayName ||
            "Google User",

          email:
            user.email || "",

          department,

          semester,

          role,
        }
      );


      console.log("Google account:", user.uid);


      setSuccess(
        "Google registration successful! Redirecting..."
      );


      router.push("/dashboard");


    } catch (error: any) {

      console.error(
        "Google registration error:",
        error
      );


      if (
        error.code ===
        "auth/popup-closed-by-user"
      ) {

        setError(
          "Google sign-in was cancelled."
        );

      } else if (
        error.code ===
        "auth/popup-blocked"
      ) {

        setError(
          "Popup was blocked. Please allow popups."
        );

      } else if (
        error.code ===
        "auth/unauthorized-domain"
      ) {

        setError(
          "This domain is not authorized in Firebase."
        );

      } else {

        setError(
          error.message ||
          "Google registration failed."
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

      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-xl shadow-sm border border-border">


        {/* HEADER */}

        <div className="text-center">

          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 text-[#315C4C]"
          >

            <BookOpen className="h-8 w-8" />

          </Link>


          <h2 className="mt-4 text-2xl font-bold text-[#1F2937]">

            Create an account

          </h2>


          <p className="mt-2 text-sm text-[#6B7280]">

            Join the Notes Distribution System

          </p>

        </div>



        {/* REGISTRATION FORM */}

        <form
          className="mt-6 space-y-4"
          onSubmit={handleRegister}
        >


          {/* NAME */}

          <div>

            <Label htmlFor="name">

              Full Name

            </Label>


            <Input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1"
              placeholder="John Doe"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

          </div>



          {/* EMAIL */}

          <div>

            <Label htmlFor="email">

              Email address

            </Label>


            <Input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1"
              placeholder="student@college.edu"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>



          {/* PASSWORDS */}

          <div className="grid grid-cols-2 gap-4">


            <div>

              <Label htmlFor="password">

                Password

              </Label>


              <Input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>


            <div>

              <Label htmlFor="confirmPassword">

                Confirm Password

              </Label>


              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="mt-1"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
              />

            </div>

          </div>



          {/* DEPARTMENT + SEMESTER */}

          <div className="grid grid-cols-2 gap-4">


            <div>

              <Label htmlFor="department">

                Department

              </Label>


              <select
                id="department"
                name="department"
                value={department}
                onChange={(e) =>
                  setDepartment(e.target.value)
                }
                className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#315C4C]"
              >

                <option value="Computer Science">

                  Computer Science

                </option>


                <option value="Information Technology">

                  Information Technology

                </option>


                <option value="Electronics">

                  Electronics

                </option>


                <option value="Commerce">

                  Commerce

                </option>


                <option value="Management">

                  Management

                </option>

              </select>

            </div>



            <div>

              <Label htmlFor="semester">

                Semester

              </Label>


              <select
                id="semester"
                name="semester"
                value={semester}
                onChange={(e) =>
                  setSemester(e.target.value)
                }
                className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#315C4C]"
              >

                <option value="1">

                  Semester 1

                </option>


                <option value="2">

                  Semester 2

                </option>


                <option value="3">

                  Semester 3

                </option>


                <option value="4">

                  Semester 4

                </option>


                <option value="5">

                  Semester 5

                </option>


                <option value="6">

                  Semester 6

                </option>

              </select>

            </div>

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
              className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#315C4C]"
            >

              <option value="student">

                Student

              </option>


              <option value="faculty">

                Faculty

              </option>

            </select>

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



          {/* EMAIL REGISTER */}

          <Button
            type="submit"
            disabled={loading || googleLoading}
            className="w-full bg-[#315C4C] hover:bg-[#264A3D] mt-6"
          >

            {loading ? (

              <>

                <Loader2 className="mr-2 h-4 w-4 animate-spin" />

                Creating Account...

              </>

            ) : (

              "Create Account"

            )}

          </Button>



          {/* GOOGLE REGISTER */}

          <Button
            type="button"
            variant="outline"
            disabled={loading || googleLoading}
            onClick={handleGoogleRegister}
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


        </form>



        {/* LOGIN LINK */}

        <p className="text-center text-sm text-[#6B7280]">

          Already have an account?{" "}

          <Link
            href="/login"
            className="font-medium text-[#315C4C] hover:text-[#264A3D]"
          >

            Sign in here

          </Link>

        </p>


      </div>

    </div>

  );

}