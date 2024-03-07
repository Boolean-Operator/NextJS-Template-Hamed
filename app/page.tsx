import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Home() {
  return (
    <section className='py-2'>
      <div className='container relative'>
        {/* <header className='sticky top-0 z-50 w-full border-b'> */}
        {/* <div className='container flex h-14 max-w-screen-2xl items-center justify-between'> */}
        <h1 className='text-3xl font-bold'>Next TS Theme Starter</h1>
        {/* </div> */}
        {/* </header> */}

        <Card className='mt-12 w-[350px]'>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' placeholder='Name of your project' />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='framework'>Framework</Label>
                  <Select>
                    <SelectTrigger id='framework'>
                      <SelectValue placeholder='Select' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                      <SelectItem value='next'>Next.js</SelectItem>
                      <SelectItem value='sveltekit'>SvelteKit</SelectItem>
                      <SelectItem value='astro'>Astro</SelectItem>
                      <SelectItem value='nuxt'>Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='outline'>Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
