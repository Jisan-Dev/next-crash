'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SignUp() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    console.log(formData);

    const resp = await fetch('http://localhost:3000/api/auth/signup/new-user', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const res = await resp.json();
    console.log('[user registering result] ', res);
  };

  return (
    <div class="flex flex-wrap">
      <div class="flex w-full flex-col md:w-1/2">
        <div class="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
          <p class="text-left text-3xl font-bold">Welcome</p>
          <p class="mt-2 text-left text-gray-500">please enter your details to register</p>
          <button class="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition focus:ring-2 hover:border-indigo-500 hover:bg-black hover:text-indigo-500">
            <Image alt="" class="mr-2 h-5" width={20} height={20} src="https://static.cdnlogo.com/logos/g/35/google-icon.svg" /> Sign Up with Google
          </button>
          <div class="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div class="absolute left-1/2 h-6 w-14 -translate-x-1/2 bg-gray-100 text-center text-sm text-gray-500 rounded-md">or</div>
          </div>
          <form onSubmit={handleSubmit} class="flex flex-col pt-3 md:pt-8">
            <div class="flex flex-col pt-4">
              <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="text"
                  name="name"
                  id="login-email"
                  class="w-full flex-1 appearance-none border-gray-300 bg-transparent px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Name"
                />
              </div>
            </div>
            <div class="flex flex-col pt-4">
              <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="text"
                  name="image"
                  id="login-email"
                  class="w-full flex-1 appearance-none border-gray-300 bg-transparent px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Photo url"
                />
              </div>
            </div>
            <div class="flex flex-col pt-4">
              <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="email"
                  name="email"
                  id="login-email"
                  class="w-full flex-1 appearance-none border-gray-300 bg-transparent px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="mb-12 flex flex-col pt-4">
              <div class="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                <input
                  type="password"
                  name="password"
                  id="login-password"
                  class="w-full flex-1 appearance-none border-gray-300 bg-transparent px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password"
                />
              </div>
            </div>
            <button
              type="submit"
              class="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">
              Sign Up
            </button>
          </form>
          <div class="py-12 text-center">
            <p class="whitespace-nowrap text-gray-600">
              Already have an account?
              <Link href="/api/auth/signin" class="underline-offset-4 font-semibold text-gray-900 underline">
                Sign in here.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div class="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <div class="absolute bottom-10 z-10 px-8 text-white opacity-100">
          <p class="mb-8 text-3xl font-semibold leading-10">
            We work 10x faster than our compeititors and stay consistant. While they&apos;re bogged won with techincal debt, we&apos;re realeasing new features.
          </p>
          <p class="mb-4 text-3xl font-semibold">John Elmond</p>
          <p class="">Founder, Emogue</p>
          <p class="mb-7 text-sm opacity-70">Web Design Agency</p>
        </div>
        <Image
          class="-z-1 absolute -top-6 h-full w-full object-cover opacity-90"
          alt=""
          width={100}
          height={100}
          src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
    </div>
  );
}
