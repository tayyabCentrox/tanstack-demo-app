import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// Zod validation schema
const registrationSchema = z
  .object({
    // Personal Information
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    fullName: z.string().min(4, "Full name is required"),

    // Contact Information
    email: z.string().email("Please enter a valid email address"),
    phoneNumber: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Please enter a valid phone number").min(10, "Phone number must be at least 10 digits"),

    // Address Information
    address: z.string().min(5, "Address is required"),
    state: z.string().min(2, "State is required"),
    region: z.string().min(2, "Region is required"),
    zipCode: z.string().regex(/^\d{5,6}$/, "Zip code must be 5-6 digits"),

    // Professional Information
    occupation: z.string().min(2, "Occupation is required"),
    licenseNumber: z.string().min(5, "License number is required"),
    specialty: z.string().optional(),
    organization: z.string().min(2, "Organization/Hospital name is required"),

    // Account Information
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),

    // Terms
    agreeToTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegistrationFormValues = z.infer<typeof registrationSchema>;

export const Route = createFileRoute("/signup/")({
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: RegistrationFormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Registration successful:", data);

      // Store user data in localStorage (dummy data)
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("userName", `${data.firstName} ${data.lastName}`);
      localStorage.setItem("fullName", data.fullName);
      localStorage.setItem("userOrganization", data.organization);
      localStorage.setItem("licenseNumber", data.licenseNumber);
      localStorage.setItem("occupation", data.occupation);

      setIsSubmitting(false);
      navigate({ to: "/" });
    }, 1500);
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-slate-50 to-background">
      <div className="max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            MedLicense SMS
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">Doctor License Registration</h1>
          <p className="text-muted-foreground mt-2">Complete your profile to start sending SMS notifications</p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-lg text-sm">1</span>
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  First Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  {...register("firstName")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.firstName && (
                  <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  {...register("lastName")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.lastName && (
                  <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>

              {/* Full Name */}
              <div className="md:col-span-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name (as per license) <span className="text-destructive">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Dr. John Michael Doe"
                  {...register("fullName")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.fullName && (
                  <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john.doe@hospital.com"
                  {...register("email")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-foreground mb-2">
                  Contact Number <span className="text-destructive">*</span>
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  {...register("phoneNumber")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phoneNumber ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.phoneNumber && (
                  <p className="text-destructive text-sm mt-1">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-lg text-sm">2</span>
              Address Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Address */}
              <div className="md:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-foreground mb-2">
                  Street Address <span className="text-destructive">*</span>
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="123 Medical Center Drive"
                  {...register("address")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.address ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.address && (
                  <p className="text-destructive text-sm mt-1">{errors.address.message}</p>
                )}
              </div>

              {/* State */}
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-foreground mb-2">
                  State <span className="text-destructive">*</span>
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="California"
                  {...register("state")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.state ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.state && (
                  <p className="text-destructive text-sm mt-1">{errors.state.message}</p>
                )}
              </div>

              {/* Region */}
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-foreground mb-2">
                  Region/County <span className="text-destructive">*</span>
                </label>
                <input
                  id="region"
                  type="text"
                  placeholder="Los Angeles County"
                  {...register("region")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.region ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.region && (
                  <p className="text-destructive text-sm mt-1">{errors.region.message}</p>
                )}
              </div>

              {/* Zip Code */}
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-foreground mb-2">
                  Zip/Postal Code <span className="text-destructive">*</span>
                </label>
                <input
                  id="zipCode"
                  type="text"
                  placeholder="90210"
                  {...register("zipCode")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.zipCode ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.zipCode && (
                  <p className="text-destructive text-sm mt-1">{errors.zipCode.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Professional Information Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-lg text-sm">3</span>
              Professional Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Occupation */}
              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-foreground mb-2">
                  Occupation <span className="text-destructive">*</span>
                </label>
                <input
                  id="occupation"
                  type="text"
                  placeholder="Medical Doctor"
                  {...register("occupation")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.occupation ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.occupation && (
                  <p className="text-destructive text-sm mt-1">{errors.occupation.message}</p>
                )}
              </div>

              {/* Specialty */}
              <div>
                <label htmlFor="specialty" className="block text-sm font-medium text-foreground mb-2">
                  Specialty (Optional)
                </label>
                <input
                  id="specialty"
                  type="text"
                  placeholder="Cardiology, Pediatrics, etc."
                  {...register("specialty")}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  disabled={isSubmitting}
                />
              </div>

              {/* License Number */}
              <div>
                <label htmlFor="licenseNumber" className="block text-sm font-medium text-foreground mb-2">
                  Medical License Number <span className="text-destructive">*</span>
                </label>
                <input
                  id="licenseNumber"
                  type="text"
                  placeholder="MD-123456"
                  {...register("licenseNumber")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.licenseNumber ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.licenseNumber && (
                  <p className="text-destructive text-sm mt-1">{errors.licenseNumber.message}</p>
                )}
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                  Hospital/Organization <span className="text-destructive">*</span>
                </label>
                <input
                  id="organization"
                  type="text"
                  placeholder="General Hospital"
                  {...register("organization")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.organization ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.organization && (
                  <p className="text-destructive text-sm mt-1">{errors.organization.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Account Information Section */}
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-lg text-sm">4</span>
              Account Security
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password <span className="text-destructive">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.password ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.password && (
                  <p className="text-destructive text-sm mt-1">{errors.password.message}</p>
                )}
                <p className="text-muted-foreground text-sm mt-1">Must be at least 8 characters</p>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">
                  Confirm Password <span className="text-destructive">*</span>
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  {...register("confirmPassword")}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.confirmPassword ? "border-destructive" : "border-input"} bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all`}
                  disabled={isSubmitting}
                />
                {errors.confirmPassword && (
                  <p className="text-destructive text-sm mt-1">{errors.confirmPassword.message}</p>
                )}
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="mt-6 flex items-start gap-3">
              <input
                id="agreeToTerms"
                type="checkbox"
                {...register("agreeToTerms")}
                className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-ring"
                disabled={isSubmitting}
              />
              <label htmlFor="agreeToTerms" className="text-sm text-muted-foreground">
                I agree to the{" "}
                <Link to="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                {" "}and certify that the information provided is accurate and true.
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-destructive text-sm">{errors.agreeToTerms.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Creating Account..." : "Complete Registration"}
            </button>
            <Link
              to="/login"
              className="px-8 py-4 bg-white text-foreground font-medium rounded-lg border border-border hover:bg-slate-50 transition-colors text-center"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
