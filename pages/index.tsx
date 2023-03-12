import { Layout, Text, Page } from '../components/examples-ui/dist'
import { Chat } from '../components/Chat'

function Home() {
  return (
    <Page className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <Text variant="h2">Modelo de texto con Inteligencia Artificial</Text>
        <Text className="text-gray-600">
          implementado usando Next.js, API
          Routes y OpenAI API.
        </Text>
      </section>

      <section className="flex flex-col gap-3">
        <div className="lg:w-2/3">
          <Chat />
        </div>
      </section>
    </Page>
  )
}

Home.Layout = Layout

export default Home
