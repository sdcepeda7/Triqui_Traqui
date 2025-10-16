import Link from 'next/link'

export default function Page() {
  return (
    <div className="">
      <section>
        Navega a las páginas de Demo:
        <div className="flex gap-4 my-4">
          <Link href="/actividad_1" className="text-blue-500 bg-blue-300 rounded-xl px-4 py-2">actividad_1
          </Link>
          <Link href="/actividad_2" className="text-blue-500 bg-blue-300 rounded-xl px-4 py-2">actividad_2
          </Link>
        </div>
      </section>
    </div>
  )
}