import { Button } from '@/components/Button';
import React from 'react';

export default function Form() {
    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
          const response = await fetch('/api/contact', {
            method: 'post',
            body: new URLSearchParams(data),
          });
          if (!response.ok) {
            throw new Error(`Invalid response: ${response.status}`);
          }
          alert('Thanks for contacting us, we will get back to you soon!');
        } catch (err) {
          console.error(err);
          alert("We can't submit the form, try again later?");
        }
      }
    return (
        <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 container px-4 py-6 shadow-lg">
            <div className="mb-4">
                <label htmlFor="frm-email" className="text-white block font-medium mb-1">
                    Email
                </label>
                <input
                    id="frm-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="text-white bg-zinc-700 w-full p-2 rounded focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="frm-phone" className="text-white block font-medium mb-1">
                    Phone (Optional)
                </label>
                <input
                    id="frm-phone"
                    type="text"
                    name="phone"
                    autoComplete="tel"
                    className="text-white bg-zinc-700 w-full p-2 rounded focus:border-indigo-500"
                />
            </div>
            <div className="mb-4">
                <div className="flex">
                    <div className="w-1/2 mr-2">
                        <label htmlFor="frm-first" className="text-white block font-medium mb-1">
                            First Name
                        </label>
                        <input
                            id="frm-first"
                            type="text"
                            name="first"
                            autoComplete="given-name"
                            required
                            className="text-white bg-zinc-700 w-full p-2 rounded focus:border-indigo-500"
                        />
                    </div>
                    <div className="w-1/2 ml-2">
                        <label htmlFor="frm-last" className="text-white block font-medium mb-1">
                            Last Name
                        </label>
                        <input
                            id="frm-last"
                            type="text"
                            name="last"
                            autoComplete="family-name"
                            required
                            className="text-white bg-zinc-700 w-full p-2 rounded focus:border-indigo-500"
                        />
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="frm-message" className="text-white block font-medium mb-1">
                    Message
                </label>
                <textarea
                    id="frm-message"
                    rows="6"
                    name="message"
                    className="text-white bg-zinc-700 w-full p-2 rounded focus:border-indigo-500"
                ></textarea>
            </div>
            <div>
                <input className="text-white bg-zinc-700 hover:bg-zinc-500 w-full p-2 rounded focus:border-indigo-500" type="submit" name="submit" value="Submit" />
            </div>
        </form>
    );
}
