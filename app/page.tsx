import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { SiteHeader } from '@/components/site-header'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col items-center justify-center p-24">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome to TryPy</CardTitle>
            <CardDescription>This is a holding page. More content coming soon!</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button>Get Started</Button>
          </CardContent>
        </Card>
      </main>
    </>
  )
}
