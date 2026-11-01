export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">This page doesn&apos;t exist</h1>
      <p className="mt-4 text-muted-foreground">
        The link may be old or mistyped. Everything on this site is on one page.
      </p>
      <p className="mt-6">
        <a href="/">Go to the home page</a>
      </p>
    </main>
  )
}
