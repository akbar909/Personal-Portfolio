import React from 'react';

function Resume() {
  return (
    <div className="bg-gray-900 text-white p-4 pl-6 lg:pl-28 lg:pr-28">
      <h1 className="text-3xl font-bold mb-6">My Resume</h1>

      <div className="flex  justify-between items-center gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Experiences</h2>
          <div className="flex items-center mb-4">
            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <p className="font-bold">2014 - Now</p>
              <p className="text-lg font-bold">Founder & Creative Director</p>
              <p className="text-gray-400">Kyros Studio</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                tempora perferendis vero officia enim impedit voluptatem
                dignissimos, veniam ratione est alias rerum aperiam, nam aliquam
                reprehenderit iste dolor.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <p className="font-bold">2010 - 2014</p>
              <p className="text-lg font-bold">Senior UI / UX Designer</p>
              <p className="text-gray-400">Google Inc</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                tempora perferendis vero officia enim impedit voluptatem
                dignissimos, veniam ratione est alias rerum aperiam, nam aliquam
                reprehenderit iste dolor.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <p className="font-bold">2008 - 2010</p>
              <p className="text-lg font-bold">Graphic Designer</p>
              <p className="text-gray-400">Kyros Studio</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                tempora perferendis vero officia enim impedit voluptatem
                dignissimos, veniam ratione est alias rerum aperiam, nam aliquam
                reprehenderit iste dolor.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="flex items-center mb-4">
            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-white font-bold">1</span>
            </div>
            <div>
              <p className="font-bold">2004 - 2008</p>
              <p className="text-lg font-bold">Master in Design</p>
              <p className="text-gray-400">New York University</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                tempora perferendis vero officia enim impedit voluptatem
                dignissimos, veniam ratione est alias rerum aperiam, nam aliquam
                reprehenderit iste dolor.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-white font-bold">2</span>
            </div>
            <div>
              <p className="font-bold">2004 - 2008</p>
              <p className="text-lg font-bold">Bachelor of Arts</p>
              <p className="text-gray-400">University of London</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                tempora perferendis vero officia enim impedit voluptatem
                dignissimos, veniam ratione est alias rerum aperiam, nam aliquam
                reprehenderit iste dolor.
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-white font-bold">3</span>
            </div>
            <div>
              <p className="font-bold">2006 - 2004</p>
              <p className="text-lg font-bold">Artist of College</p>
              <p className="text-gray-400">University of Sydney</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                tempora perferendis vero officia enim impedit voluptatem
                dignissimos, veniam ratione est alias rerum aperiam, nam aliquam
                reprehenderit iste dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
