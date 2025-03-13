import { motion } from "framer-motion";
import { Calendar, Heart, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-24 pb-16 px-4"
      >
        <div className="container  text-center h-screen flex flex-col justify-center items-center">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Connecting People Across Faiths & Interests
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl "
          >
            Join our vibrant community where people of all faiths come together
            to share experiences, support each other, and create meaningful
            connections.
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate("/events")}
            className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold
                     hover:bg-blue-600 transition-colors shadow-lg "
          >
            Explore Events
          </motion.button>

          {/* Features Section */}
          <section className="py-16 px-4 mt-20">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Users className="h-12 w-12 text-blue-500" />,
                    title: "Community Building",
                    description:
                      "Connect with like-minded individuals and build lasting relationships.",
                  },
                  {
                    icon: <Calendar className="h-12 w-12 text-blue-500" />,
                    title: "Diverse Events",
                    description:
                      "Participate in a wide range of religious, social, and charitable events.",
                  },
                  {
                    icon: <Heart className="h-12 w-12 text-blue-500" />,
                    title: "Support Network",
                    description:
                      "Find support and understanding in our inclusive community.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                    className="text-center p-6 rounded-lg bg-white shadow-lg"
                  >
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
