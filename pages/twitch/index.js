import React from "react";
import Layout from "../../components/Layout";

const ProjectsPage = () => {
  return (
    <Layout title={"Serhat Gündoğdu | Projects"} description={"My Twitch"}>
      <main className="w-full h-full">
        <section className="h-full max-w-5xl pt-16 mx-auto md:pt-8">
          <div className="grid grid-cols-4">
            <div className="col-span-4">
              <iframe
                title="Twitch"
                className=""
                allowfullscreen=""
                frameborder="0"
                height="500"
                width="100%"
                src="https://player.twitch.tv/?channel=mrserhatg&parent=localhost&muted=false"
              ></iframe>
            </div>
            <div></div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectsPage;
