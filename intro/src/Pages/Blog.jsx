import React from "react";
import Navbar from "../Components/Navbar";
import Blogpost from "../Components/Blogpost";

const sampleContent = `
  <p>Welcome to our movie blog! In this post, we will explore some of the best movies of the year. From thrilling action to heartwarming dramas, this year has offered a wide range of films that cater to every taste.</p>
  <h2>1. Action-Packed Adventures</h2>
  <p>This year, action movies have truly outdone themselves. With breathtaking stunts and compelling storylines, these films are a must-watch.</p>
  <h2>2. Heartwarming Dramas</h2>
  <p>Dramas have also had a fantastic year, delivering emotional performances and unforgettable stories that touch the heart.</p>
  <h2>3. Mind-Bending Sci-Fi</h2>
  <p>Sci-fi movies continue to push the boundaries of imagination and technology, offering viewers an exciting glimpse into the future.</p>
  <p>Stay tuned for more reviews and insights into the world of movies!</p>
`;

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen p-8">
        <Blogpost
          title="Best Movies of the Year"
          author="John Doe"
          date="June 20, 2024"
          content={<div dangerouslySetInnerHTML={{ __html: sampleContent }} />}
        />
      </div>
    </>
  );
};

export default Blog;
