/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input, Textarea } from "../ui/input";
import { cn } from "@/lib/utils";
import { CoverDemo } from "./cover";
import { Toast } from "./toast";

export function SignupFormDemo() {


  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  })

  const [status,setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [toastVisible, setToastVisible] = useState(false)

  useEffect(() => {
    if (status !== 'idle') {
      setToastVisible(true);
    }
  }, [status])

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [toastVisible, status])

  const getToastText = () => {
    switch (status) {
      case 'loading': return 'Sending your message...'
      case 'success': return 'Message Sent!'
      case 'error': return 'Oh-no something went wrong'
      default: return ''
    }
  }

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

      setFormData({ firstname: '', lastname: '', email: '', message: '' })
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

        {/* Replace the existing button code with this */}
        <button
          className="relative group inline-flex items-center justify-center px-8 py-3 w-full text-white transition-all duration-500 bg-transparent border-2 border-purple-500 rounded-full ease hover:bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 hover:border-transparent disabled:opacity-70 disabled:cursor-not-allowed"
          type="submit"
          disabled={status === 'loading'}
        >
          <span className="relative flex items-center gap-2">
            {status === 'loading' ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <svg
                  className="w-5 h-5 transition-transform duration-500 ease group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </>
            )}
          </span>
        </button>
        {toastVisible && (
          <Toast
            status={status}
            text={getToastText()}
            onClose={() => setToastVisible(false)}
          />
        )}
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
