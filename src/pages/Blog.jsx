function Blog() {
  const posts = [
    {
      id: 1,
      title: "Miami Trip",
      date: "March 27-30, 2026",
      image: "/images/miami.jng.png",
      imageAlt: "Downtown Miami",
      content: [
        'Right after my last class from CSUSM, I went straight to the airport and caught my flight to Miami. The moment I stepped outside, the warm air hit me like a wave. I spent the first day exploring South Beach, soaking in the sun and vibrant atmosphere with my moms side of the family.',
        'On the second day, We visited the Miami Design District, known for its sleek modern architecture and high end shopping. I was in awe of the art installations and the overall vibe of the place. The trip was a much needed break and a chance to reconnect with family.'
      ]
    },
    {
      id: 2,
      title: "Pachanga Casino",
      date: "April 2, 2026",
      image: "/images/pachanga.jpg",
      imageAlt: "The Pachanga Casino in Temecula, California",
      content: [
        `I turned 21 last May and so when my mom told me her and her friends were going to the Pachanga Casino in Temecula California late this night, I decided ah what the hell! why not. I actively discourage gambling and probably won't do it after this day but I had fun and even won $70! Still, gambling is bad. (Didn't get a picture of the trip)`
      ]
    },
    {
      id: 3,
      title: "Project Hail Mary",
      date: "April 4, 2026",
      image: "/images/theaters.jpg",
      imageAlt: "DTLA movie theater",
      content: [
        `Because I was in Los Angeles and was a rare day where all of my friends from there were free, we had a day to hang out and all 5 of us chose to go watch the hyped up movie "Project Hail Mary."`,
        'The movie was pretty good, I enjoyed it. It had a lot of the same vibes as Interstellar and The Martian, which are two of my favorite movies. I would recommend it to anyone who likes sci-fi movies. Overall, it was an eventful spring break and definitely needed for me as Im close to graduating and feeling the pressure to close out my college career.'
      ]
    }
  ];

  return (
    <main>
      <div className="blog-hero">
        <h1>Spring Break 2026</h1>
        <p>Alot of fun experiences and memories!</p>
      </div>

      <div className="blog-container">
        {posts.map(post => (
          <article key={post.id} className="blog-post">
            <div className="blog-post-header">
              <h2>{post.title}</h2>
              <span className="blog-date">{post.date}</span>
            </div>
            <img
              src={post.image}
              alt={post.imageAlt}
              className="blog-image"
            />
            <div className="blog-body">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Blog;