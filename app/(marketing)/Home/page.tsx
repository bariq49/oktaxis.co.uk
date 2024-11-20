"use client"

import { homePageData } from "@/constants/homePageData"

const HomePage = () => {
  const { heroSection } = homePageData;
  return (
    <main
      className=""
    >

      {/* Hero Section */}
      <section
        className="w-full"
        style={{
          backgroundImage: `url('${heroSection.backgroundImage}')`
        }}
      >
      
        
      </section>

    </main>
  )
}

export default HomePage;