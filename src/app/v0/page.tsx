/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PWnpFQy9w3Q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <>
      <div className="bg-gray-50/90 py-6 w-full">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-4 grid-cols-1 lg:grid-cols-2">
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold tracking-wider uppercase text-gray-300">
                Register by
              </h3>
              <div className="flex items-center gap-2 text-gray-300 dark:text-gray-400">
                <CalendarIcon className="w-4 h-4" />
                <span className="font-medium">May 20, 2023</span>
                <span className="font-medium">11:59 PM PDT</span>
              </div>
            </div>
            <div className="flex justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-red-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <header className="w-full bg-red-400 py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                TechX
              </h1>
              <p className="text-base font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400">
                The Experience Conference
              </p>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <Button size="sm">Add to Calendar</Button>
              <Button size="sm" variant="outline">
                <HeartIcon className="w-4 h-4" />
                Favorite
              </Button>
            </div>
          </div>
        </div>
      </header>
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
        <div className="bg-gray-50/90 py-6 w-full col-span-3">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-4 grid-cols-1 lg:grid-cols-2">
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold tracking-wider uppercase text-gray-300">
                  Register by
                </h3>
                <div className="flex items-center gap-2 text-gray-300 dark:text-gray-400">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="font-medium">May 20, 2023</span>
                  <span className="font-medium">11:59 PM PDT</span>
                </div>
              </div>
              <div className="flex justify-end">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center bg-red-200 col-span-3 ">
          <div className="grid grid-cols-2 items-start gap-4">
            <div className="space-y-1.5 col-span-2">
              <h3 className="text-xl font-bold">Description</h3>
              <div className="prose max-w-none">
                <p>
                  TechX is the premier conference for those who want to
                  understand and deliver the best digital experiences. Join us
                  to learn from industry experts, connect with peers, and
                  discover the latest trends in web performance, UX design, and
                  digital innovation.
                </p>
                <ul>
                  <li>Insightful keynotes and panel discussions</li>
                  <li>Practical workshops and hands-on labs</li>
                  <li>Networking opportunities with industry leaders</li>
                </ul>
                <p>
                  Whether you're a developer, designer, product manager, or
                  business leader, TechX has something for you. Don't miss this
                  opportunity to gain the knowledge and inspiration you need to
                  create exceptional digital experiences.
                </p>
              </div>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-xl font-bold">Contact</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Have questions about the conference? Contact our team at
                <Link className="underline" href="#">
                  info@example.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Sponsors</h3>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="140"
                src="/placeholder.svg"
                width="280"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="140"
                src="/placeholder.svg"
                width="280"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Gallery</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="mx-auto aspect-video overflow-hidden rounded-lg">
              <img
                alt="Image"
                className="object-cover object-center"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/300",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="mx-auto aspect-video overflow-hidden rounded-lg">
              <img
                alt="Image"
                className="object-cover object-center"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/300",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Participant Types</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold">All-Access Pass</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Access to all sessions, workshops, and networking events
                </p>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-right">$299</h4>
                <Label>
                  <Input
                    className="peer h-4 w-4 border-gray-300 rounded-sm shadow-sm text-gray-900 dark:border-gray-800 peer:ring-gray-950 dark:ring-gray-300"
                    type="checkbox"
                  />
                  <span className="ml-2 text-sm peer">Select</span>
                </Label>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold">Workshop Only</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Access to pre-conference workshops
                </p>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-right">$99</h4>
                <Label>
                  <Input
                    className="peer h-4 w-4 border-gray-300 rounded-sm shadow-sm text-gray-900 dark:border-gray-800 peer:ring-gray-950 dark:ring-gray-300"
                    type="checkbox"
                  />
                  <span className="ml-2 text-sm peer">Select</span>
                </Label>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold">Networking Pass</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Access to networking events and the expo hall
                </p>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-right">$49</h4>
                <Label>
                  <Input
                    className="peer h-4 w-4 border-gray-300 rounded-sm shadow-sm text-gray-900 dark:border-gray-800 peer:ring-gray-950 dark:ring-gray-300"
                    type="checkbox"
                  />
                  <span className="ml-2 text-sm peer">Select</span>
                </Label>
              </div>
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold">VIP Experience</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Access to all sessions, VIP seating, and exclusive
                  after-parties
                </p>
              </div>
              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-right">$499</h4>
                <Label>
                  <Input
                    className="peer h-4 w-4 border-gray-300 rounded-sm shadow-sm text-gray-900 dark:border-gray-800 peer:ring-gray-950 dark:ring-gray-300"
                    type="checkbox"
                  />
                  <span className="ml-2 text-sm peer">Select</span>
                </Label>
              </div>
            </div>
            <Button type="submit">Buy Tickets</Button>
          </form>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Contact</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Enter the subject" />
            </div>
            <div className="grid grid-cols-2 items-start gap-4">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[150px] h-[auto]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
      <footer className="flex-shrink-0 w-full border-t py-6">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <nav className="flex items-center space-x-4 text-sm font-medium text-gray-500 dark:text-gray-400">
            <Link className="hover:underline" href="#">
              Terms & Conditions
            </Link>
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
          </nav>
          <div className="flex items-center space-x-4 text-sm font-medium text-gray-500 md:text-base lg:text-sm dark:text-gray-400">
            <span>© 2023 TechX. All rights reserved.</span>
            <div className="flex items-center space-x-2">
              <Link
                className="text-gray-500 hover:underline dark:hover:underline"
                href="#"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="w-4 h-4" />
              </Link>
              <Link
                className="text-gray-500 hover:underline dark:hover:underline"
                href="#"
              >
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="w-4 h-4" />
              </Link>
              <Link
                className="text-gray-500 hover:underline dark:hover:underline"
                href="#"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
