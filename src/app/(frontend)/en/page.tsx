import React from 'react'
import { fetchData } from '@/lib/data'
import { HeroProps, HomeHero } from '@/components/Hero'

type Props = {
  hero: HeroProps
}

function Stats() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row g-4 py-4 row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">9</div>
            <div className="h5">Partner Countries</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">20+</div>
            <div className="h5">Partner Institutions</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">80</div>
            <div className="h5">Exchange Students Accepted since 2021</div>
          </div>
          <div className="col text-center">
            <div className="display-6 fw-bold text-primary mb-2">15</div>
            <div className="h5">Outbound students (2023)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function HomePage() {
  const data = (await fetchData('homepage')) as Props

  return (
    <main>
      <HomeHero
        title={data?.hero?.title}
        description={data?.hero?.description}
        image={data?.hero?.image}
      />
      <Stats />
    </main>
  )
}
