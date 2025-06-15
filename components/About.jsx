export default function About({ className }) {
  return (
    <section id="about" className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <p className="text-base sm:text-lg text-gray-800 mb-4">
          I'm a beginner in web development, learning Next.js and Tailwind CSS.
          I enjoy building projects and improving my skills.
        </p>
        <p className="text-base sm:text-lg text-gray-800 mb-4">
          In my free time, I like to read and explore new technologies. I am
          passionate about creating user-friendly and visually appealing
          websites and applications.
        </p>
        <p className="text-base sm:text-lg text-gray-800 mb-4">
          My goal is to become a full-stack developer and contribute to
          open-source projects. I am currently working on several personal
          projects to enhance my skills and gain more experience in the field.
        </p>
        <p className="text-base sm:text-lg text-gray-800">
          I believe that continuous learning and practice are key to becoming a
          successful developer. I’m excited to grow, tackle challenges, and
          build things that make a difference!
        </p>
      </div>
    </section>
  );
}