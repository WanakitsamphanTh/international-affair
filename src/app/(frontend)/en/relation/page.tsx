import { fetchData } from '@/app/lib/data'

import { HeroProps, Hero } from '@/components/Hero'
import { HighlightProps, Highlights } from './Highlights'
import { Partnership, UniversityTable } from './UniversityTable'
import WorldwideNetwork from './WorldwideNetwork'
import { ImageInfo } from '@/app/lib/dataType'

type Props = {
  hero: HeroProps
  highlight: HighlightProps[]
  image: ImageInfo
  Agreements: Partnership[]
}

export default async function RelationPage() {
  const data = await fetchData('school-list') as Props;

  return (
    <main>
      <Hero title={data?.hero?.title} description={data?.hero?.description} />
      <Highlights highlights={data?.highlight} />
      <WorldwideNetwork image={data?.image} />
      <UniversityTable partnerships={data?.Agreements} />
    </main>
  );
}
