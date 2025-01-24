/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input, Textarea } from "../ui/input";
import { cn } from "@/lib/utils";
import { CoverDemo } from "./cover";

export function SignupFormDemo() {


  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  })

  const [status,setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        setStatus('error')
        throw new Error('Failed to submit message!')
      }

      console.log("Message Sent!")
      setStatus('success')
    }
    catch (err: any) {
      setStatus('error')
      console.log('Error', err)
      alert('form cannot be submitted')
    }
  }

  return (
    <div className="max-w-4xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-inherit" id="contact">
      <CoverDemo word="Let's get in Touch"/>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Firstname" type="text" value={formData.firstname} onChange={handleChange}/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="lastname" type="text" value={formData.lastname} onChange={handleChange}/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={formData.email} onChange={handleChange}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Your Message</Label>
            {/* <Input id="firstname" placeholder="Firstname" type="text" className="py-20" /> */}
            <Textarea id="message" placeholder="your message"value={formData.message} onChange={handleChange}/>
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
        {status === "loading" && <p className="text-white">Sending your message...</p>}
        {status === "success" && <p className="text-white">Message sent successfully!</p>}
        {status === "error" && <p className="text-white">Oops! Something went wrong.</p>}
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
