export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project One</h3>
            <p className="text-gray-700">
              A brief description of your first project.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Project Two</h3>
            <p className="text-gray-700">
              A brief description of your second project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}