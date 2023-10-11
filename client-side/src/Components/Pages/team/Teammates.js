import React from "react";
import { Images } from "../../../assets/images/Images";

function Teammates() {
  // Teammates data
  const teammates = [
    {
      id: 1,
      img: Images.Zeynal,
      fullName: "Zeynal Alishov",
      position: "Middle Front-end Developer",
      linkedin: "https://www.linkedin.com/in/zeynal-alishov/",
      github: "https://github.com/AlishovZeynal",
    },
    {
      id: 2,
      img: Images.Nazilya,
      fullName: "Nazila Shikhkarimova",
      position: "Middle Front-end Developer",
      linkedin: "https://www.linkedin.com/in/nazilashikhkarimova/",
      github: "https://github.com/nazilya96",
    },
    {
      id: 3,
      img: Images.Farid,
      fullName: "Farid Zamanli",
      position: "Middle Front-end Developer",
      linkedin: "https://www.linkedin.com/in/farid-zamanl%C4%B1-35331b220/",
      github: "https://github.com/Farid885",
    },
    {
      id: 4,
      img: Images.Murad,
      fullName: "Murad Rehimov",
      position: "Middle Front-end Developer",
      linkedin: "https://www.linkedin.com/in/murad-rehimov-b7184a243/",
      github: "https://github.com/muradrhmv13",
    },
  ];

  return (
    <div>
      <section id="teamsection" className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 anim in-up">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-8xl tracking-wide font-logo text-secondaryText">
              Sakura <br /> Team
            </h2>
          </div>
          <div className="grid gap-8 mb-6 md:grid-cols-2">
            {teammates.map((data, index) => (
              <div
                key={data.id}
                className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-dark dark:border-gray-700 in-left"
              >
                <a href={data.linkedin}>
                  <img
                    className="w-full h-48 rounded-lg sm:rounded-none sm:rounded-l-lg object-cover cursor-pointer"
                    src={data.img}
                    alt="Teammate"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>{data.fullName}</p>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {data.position}
                  </span>
                  <ul className="flex space-x-4 sm:mt-4">
                    <li>
                      <a
                        href={data.instagram}
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 30 30"
                        >
                          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href={data.github}
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white cursor-pointer"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.620.069-.608.069-.608 1.003.070 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.100 2.651.640.700 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.180.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teammates;
