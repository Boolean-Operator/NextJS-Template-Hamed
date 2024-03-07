'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
// import { CommandMenu } from '@/components/command-menu'
// import { Icons } from '@/components/icons'
// import { MobileNav } from '@/components/mobile-nav'
import { ThemeToggle } from '@/components/ui/theme-toggle'
// import { buttonVariants } from '@/registry/new-york/ui/button'

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <div className='mr-4 hidden md:flex'>
          <Link href='/' className='mr-6 flex items-center space-x-2'>
            <span className='hidden font-bold sm:inline-block'>
              ShadCN Starter
            </span>
          </Link>
          <nav className='flex items-center gap-6 text-sm'>
            <Link
              href='/dashboard'
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/dashboard'
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              Dashboard
            </Link>
            {/* <Link
              href='/docs/components'
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname?.startsWith('/docs/components')
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              Components
            </Link> */}
          </nav>
        </div>
        {/* <MobileNav /> */}
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          {/* <div className='w-full flex-1 md:w-auto md:flex-none'>
            <CommandMenu />
          </div> */}
          <nav className='flex items-center'>
            {/* <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost'
                  }),
                  'w-9 px-0'
                )}
              >
                <Icons.gitHub className='h-4 w-4' />
                <span className='sr-only'>GitHub</span>
              </div>
            </Link> */}
            {/* <Link
              href={siteConfig.links.twitter}
              target='_blank'
              rel='noreferrer'
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost'
                  }),
                  'w-9 px-0'
                )}
              >
                <Icons.twitter className='h-3 w-3 fill-current' />
                <span className='sr-only'>Twitter</span>
              </div>
            </Link> */}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
