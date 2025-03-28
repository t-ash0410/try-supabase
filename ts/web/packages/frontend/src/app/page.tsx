import Hero from '@frontend/components/hero'
import ConnectSupabaseSteps from '@frontend/components/tutorial/connect-supabase-steps'
import SignUpUserSteps from '@frontend/components/tutorial/sign-up-user-steps'
import { hasEnvVars } from '@frontend/utils/supabase/check-env-vars'

export default async function Home() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
      </main>
    </>
  )
}
