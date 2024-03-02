import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="w-full max-w-md flex flex-col gap-y-6 text-center">
        <h2 className="text-5xl">🎃 Authzone</h2>
        <p className="text-sm text-slate-400">
          A simple authentication service
        </p>
        <LoginButton>
          <Button className="w-full" variant="default" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
