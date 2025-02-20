import React from "react";
import { useState } from "react";

export default function SubmitForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+971",
    phoneNumber: "",
    socialUsername: "",
    businessType: [],
    monthlyIncome: "",
    goals: "",
    obstacles: "",
    willNotify: "",
  });

  const handleBusinessTypeChange = (value) => {
    setFormData((prev) => {
      if (prev.businessType.includes(value)) {
        return {
          ...prev,
          businessType: prev.businessType.filter((type) => type !== value),
        };
      }
      return {
        ...prev,
        businessType: [...prev.businessType, value],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#0a0a16] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl border-yellow-400">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[55px] leading-[62px]">
            To Book Your Call,
          </h1>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[55px] leading-[62px]">
            Please Answer A Few Questions.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-8  px-10 py-5 rounded-xl shadow-2xl"
        >
          {/* Name Fields */}
          <div className="space-y-2 ">
            <label className="block text-sm font-medium text-white">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  placeholder="First Name"
                  className="w-full rounded-md border border-gray-800 bg-transparent px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
                <p className="mt-1 text-xs text-gray-400">First Name</p>
              </div>
              <div>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  placeholder="Last Name"
                  className="w-full rounded-md border border-gray-800 bg-transparent px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
                <p className="mt-1 text-xs text-gray-400">Last Name</p>
              </div>
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="example@example.com"
              className="w-full rounded-md border border-gray-800 bg-transparent px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>

          {/* Phone Number Fields */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-[120px,1fr] gap-4">
              <input
                type="text"
                value={formData.countryCode}
                onChange={(e) =>
                  setFormData({ ...formData, countryCode: e.target.value })
                }
                className="w-full rounded-md border border-gray-800 bg-transparent px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
              <input
                type="tel"
                required
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                placeholder="508080808"
                className="w-full rounded-md border border-gray-800 bg-transparent px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
              />
            </div>
            <div className="grid grid-cols-[120px,1fr] gap-4">
              <p className="text-xs text-gray-400">Country Code</p>
              <p className="text-xs text-gray-400">Phone Number</p>
            </div>
          </div>

          {/* Social Username Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              What's your IG/TikTok username?
            </label>
            <input
              type="text"
              value={formData.socialUsername}
              onChange={(e) =>
                setFormData({ ...formData, socialUsername: e.target.value })
              }
              placeholder="instagram.com/abc"
              className="w-full rounded-md border border-gray-800 bg-transparent px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
            <p className="text-xs text-gray-400">
              Example: www.instagram.com/theclips.agency
            </p>
          </div>

          {/* Business Type Checkboxes */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              What is your business? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {[
                "Service Provider",
                "Entrepreneur",
                "Content Creator",
                "Consultant",
                "Online Coach",
                "Personal Trainer",
                "Other",
              ].map((type) => (
                <label key={type} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.businessType.includes(type)}
                    onChange={() => handleBusinessTypeChange(type)}
                    className="h-4 w-4 rounded border-gray-800 bg-transparent text-[#d1f14c] focus:ring-[#d1f14c]"
                  />
                  <span className="text-sm text-white">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Monthly Income Radio Buttons */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              Which range best represents your current monthly income?{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {[
                "Less than $5k /mo",
                "Between $5k & $10k /mo",
                "More than $10k /mo",
              ].map((range) => (
                <label key={range} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="monthlyIncome"
                    value={range}
                    checked={formData.monthlyIncome === range}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        monthlyIncome: e.target.value,
                      })
                    }
                    className="h-4 w-4 border-gray-800 bg-transparent text-[#d1f14c] focus:ring-[#d1f14c]"
                  />
                  <span className="text-sm text-white">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Goals Textarea */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              What do you want to achieve, & how may we help you get there?{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              value={formData.goals}
              onChange={(e) =>
                setFormData({ ...formData, goals: e.target.value })
              }
              rows={4}
              className="w-full rounded-md border border-gray-800 bg-transparent px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>

          {/* Obstacles Textarea */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              What's the biggest obstacle holding you back from achieving your
              goal right now?
            </label>
            <textarea
              value={formData.obstacles}
              onChange={(e) =>
                setFormData({ ...formData, obstacles: e.target.value })
              }
              rows={4}
              className="w-full rounded-md border border-gray-800 bg-transparent px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>

          {/* Notification Radio Buttons */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">
              will you let us know in case you can't show up to the call, or if
              you have to reschedule?
            </label>
            <div className="space-y-3">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="willNotify"
                    value={option}
                    checked={formData.willNotify === option}
                    onChange={(e) =>
                      setFormData({ ...formData, willNotify: e.target.value })
                    }
                    className="h-4 w-4 border-gray-800 bg-transparent text-[#d1f14c] focus:ring-[#d1f14c]"
                  />
                  <span className="text-sm text-white">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <hr className="mt-3 border-white" />
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-full bg-[#d1f14c] px-8 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#d1f14c]/90"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
