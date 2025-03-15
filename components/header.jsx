import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'

const header = () => {
  return (
    <nav className="mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2">
      <Link href="/" className='flex items-center'>
      <Image src="/logo.png" alt="logo" width="150" height="60" className="h-16 w-auto" />
        <div className="flex items-center gap-4">
            <Link href='/evnts?create=true' >
            <Button className="flex items-center gap-4"> 
                <PenBox  size={18}/>Create event</Button>
            </Link>
            <Button variant="outline">Login</Button>
        <SignedOut>
          <SignInButton forceRedirectUrl="/dashboard">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserMenu />
        </SignedIn>
        </div>

      </Link>
    </nav>
  )
}

export default header