import React, { useEffect, useRef, useState } from "react";
import { HeaderUser } from "../../components/Header/HeaderUser";
import banner from "../../assets/img/banner.png";
import img1 from "../../assets/img/img1.png";
import img2 from "../../assets/img/img2.png";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
import img5 from "../../assets/img/img5.png";
import img6 from "../../assets/img/img6.png";
import { FaStar } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";
import { RiBook3Line } from "react-icons/ri";
import { LuClock } from "react-icons/lu";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useCategory } from "../../services/course/category_course";
import { useDataCourse } from "../../services/course/course";

export const Homepage = () => {
  const [slideStart, setSlideStart] = useState(true);
  const [slideEnd, setSlideEnd] = useState(false);
  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [categoryLimit, setCategoryLimit] = useState(6);
  const [courseLimit, setCourseLimit] = useState(3);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryPage, setCategoryPage] = useState(1);
  const [coursePage, setCoursePage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const divRef = useRef(null);

  const { data: fetchedCourses, isLoading: courseLoading, isError: courseError, refetch: refetchCourses } = useDataCourse({ search: searchQuery, category_ids: selectedCategoryId }, courseLimit, coursePage);
  console.log(fetchedCourses);

  const { data: fetchedCategories, isLoading: categoryLoading, isError: categoryError, refetch: refetchCategories } = useCategory({}, categoryLimit, categoryPage);

  const handleCategorySelect = (categoryId) => {
    // Check if the clicked category is the same as the currently selected category
    if (selectedCategoryId === categoryId) {
      // If it's the same, deactivate the filter by setting selectedCategoryId to null
      setSelectedCategoryId(null);
    } else {
      // If it's a different category, apply the new filter
      setSelectedCategoryId(categoryId);
    }
  };

  useEffect(() => {
    if (fetchedCourses) {
      setCourses(fetchedCourses.data.course);
    }
  }, [fetchedCourses]);

  useEffect(() => {
    if (fetchedCategories) {
      setCategories(fetchedCategories);
    }
  }, [fetchedCategories]);

  useEffect(() => {
    refetchCourses();
    refetchCategories();
  }, [setSearchQuery, categoryLimit, categoryPage, courseLimit, coursePage, refetchCourses, refetchCategories]);

  const handleViewAllCategories = () => {
    if (categoryLimit === 6) {
      setCategoryLimit(10);
      setCategoryPage(1);
    } else {
      setCategoryLimit(6);
    }
  };

  const handleViewAllCourse = () => {
    if (courseLimit === 3) {
      setCourseLimit(10);
      setCoursePage(1);
    } else {
      setCourseLimit(3);
    }
  };

  const slideLeft = () => {
    console.log(divRef);
  };

  const slideRight = () => {
    console.log(divRef);
  };

  return (
    <div>
      <HeaderUser setSearchQuery={setSearchQuery} />
      <div className="flex">
        <div className="relative w-[58%] h-[46dvh]">
          <img src={banner} alt="banner" className="h-[46dvh] object-cover" />
          <div className="absolute top-0 w-full h-[46dvh] bg-gradient-to-r from-transparent from-60% to-primary to-95%"></div>
        </div>
        <div className="bg-primary flex items-center justify-center w-[42%]">
          <div className="flex flex-col gap-6 -mt-12 mr-10">
            <div className="flex flex-col gap-2 font-bold text-4xl desktopfull:text-5xl text-white">
              <div>Belajar</div>
              <div>dari Praktisi Terbaik!</div>
            </div>
            <button className="text-primary bg-white rounded-2xl px-6 py-2 font-bold hover:shadow-xl hover:shadow-purple-800">IKUTI KELAS</button>
          </div>
        </div>
      </div>
      <div className="bg-[#EBF3FC] py-6 px-36">
        <div className="flex items-center justify-between px-4">
          <div className="font-bold text-xl">Kategori Belajar</div>
          <button className="font-bold text-primary" onClick={handleViewAllCategories}>
            Lihat Semua
          </button>
        </div>
        <div className="grid grid-cols-6 gap-6 mt-4 text-sm desktopfull:text-base">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <img src={category.url_img_preview || img1} alt={category.url_img_preview || "Default Alt Text"} className="rounded-3xl" />
              <div className="font-bold">{category.title}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 px-36">
        <div className="flex items-center justify-between px-4">
          <div className="font-bold text-xl">Kursus Populer</div>
          <button className="font-bold text-primary" onClick={handleViewAllCourse}>
            Lihat Semua
          </button>
        </div>
        {/* <div className="relative flex items-center mt-4">
          <div className={`absolute ${slideStart ? "hidden" : "block"} w-7 left-1 h-full flex items-center justify-center text-primary bg-white/95 rounded-full shadow-xl hover:bg-primary hover:text-white cursor-pointer`}>
            <RiArrowDropLeftLine onClick={slideLeft} className="w-5 h-5 stroke-1" />
          </div>
          <div className={`absolute ${slideEnd ? "hidden" : "block"} w-7 right-0 h-full flex items-center justify-center text-primary bg-white/95 rounded-full shadow-xl hover:bg-primary hover:text-white cursor-pointer`}>
            <RiArrowDropRightLine onClick={slideRight} className="w-5 h-5 stroke-1" />
          </div>
          <div ref={divRef} className="flex justify-between gap-1 px-1 text-black font-bold whitespace-nowrap overflow-x-hidden scroll-smooth rounded-full">
            <div className="bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white">Data Science</div>
            <div className="bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white">UI/UX Design</div>
            <div className="bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white">Android Development</div>
            <div className="bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white">iOS Development</div>
            <div className="bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white">Web Development</div>
            <div className="bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white">Business Intelligence</div>
            <div className="bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white">Business Intelligence</div>
            <div className="bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white">Business Intelligence</div>
            <div className="bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white">Business Intelligence</div>
            <div className="bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white">Business Intelligence</div>
          </div>
        </div> */}
        <div className="relative flex items-center mt-4">
          <div className={`absolute ${slideStart ? "hidden" : "block"} w-7 left-1 h-full flex items-center justify-center text-primary bg-white/95 rounded-full shadow-xl hover:bg-primary hover:text-white cursor-pointer`}>
            <RiArrowDropLeftLine onClick={slideLeft} className="w-5 h-5 stroke-1" />
          </div>
          <div className={`absolute ${slideEnd ? "hidden" : "block"} w-7 right-0 h-full flex items-center justify-center text-primary bg-white/95 rounded-full shadow-xl hover:bg-primary hover:text-white cursor-pointer`}>
            <RiArrowDropRightLine onClick={slideRight} className="w-5 h-5 stroke-1" />
          </div>
          <div ref={divRef} className="flex justify-between gap-1 px-1 text-black font-bold whitespace-nowrap overflow-x-hidden scroll-smooth rounded-full">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`bg-[#EBF3FC] text-center px-3.5 py-1 rounded-full w-fit cursor-pointer hover:bg-primary hover:text-white ${selectedCategoryId === category.kategori_id ? "text-white bg-primary" : "text-black"}`}
                onClick={() => handleCategorySelect(category.kategori_id)}
              >
                {category.title}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="grid grid-cols-3 gap-6 mt-4 text-sm desktopfull:text-base">
          <div className="rounded-3xl shadow-lg">
            <img src={img1} alt="img1" className="w-full h-[9rem] object-cover rounded-3xl" />
            <div className="px-3 pt-1.5 pb-3">
              <div className="flex justify-between font-bold">
                <div className="text-primary">UI/UX Design</div>
                <div className="flex items-center gap-1">
                  <FaStar className="fill-yellow-400" />
                  <span>4.7</span>
                </div>
              </div>
              <div className="font-bold whitespace-nowrap overflow-hidden">Belajar Web Designer dengan Figma asfkjask jlsfkjalsfkj laflakf lkasjflaksjf laksf lksjl</div>
              <div className="font-medium">by Angela Doe</div>
              <div className="flex items-center gap-3 desktopfull:gap-6 my-1 font-medium">
                <div className="flex items-center gap-1">
                  <RiShieldStarLine className="text-[#73CA5C]" />
                  <span>Intermediate</span>
                </div>
                <div className="flex items-center gap-1">
                  <RiBook3Line className="text-[#73CA5C]" />
                  <span>10 Modul</span>
                </div>
                <div className="flex items-center gap-1">
                  <LuClock className="stroke-[#73CA5C]" />
                  <span>120 Menit</span>
                </div>
              </div>
              <button className="bg-[#489CFF] rounded-full p-1 px-6 font-medium text-white">Rp 249.000</button>
            </div>
          </div>
          <div className="rounded-3xl shadow-lg">
            <img src={img1} alt="img1" className="w-full h-[9rem] object-cover rounded-3xl" />
            <div className="px-3 pt-1.5 pb-3">
              <div className="flex justify-between font-bold">
                <div className="text-primary">UI/UX Design</div>
                <div className="flex items-center gap-1">
                  <FaStar className="fill-yellow-400" />
                  <span>4.7</span>
                </div>
              </div>
              <div className="font-bold whitespace-nowrap overflow-hidden">Belajar Web Designer dengan Figma asfkjask jlsfkjalsfkj laflakf lkasjflaksjf laksf lksjl</div>
              <div className="font-medium">by Angela Doe</div>
              <div className="flex items-center gap-3 desktopfull:gap-6 my-1 font-medium">
                <div className="flex items-center gap-1">
                  <RiShieldStarLine className="text-[#73CA5C]" />
                  <span>Intermediate</span>
                </div>
                <div className="flex items-center gap-1">
                  <RiBook3Line className="text-[#73CA5C]" />
                  <span>10 Modul</span>
                </div>
                <div className="flex items-center gap-1">
                  <LuClock className="stroke-[#73CA5C]" />
                  <span>120 Menit</span>
                </div>
              </div>
              <button className="bg-[#489CFF] rounded-full p-1 px-6 font-medium text-white">Rp 249.000</button>
            </div>
          </div>
          <div className="rounded-3xl shadow-lg">
            <img src={img1} alt="img1" className="w-full h-[9rem] object-cover rounded-3xl" />
            <div className="px-3 pt-1.5 pb-3">
              <div className="flex justify-between font-bold">
                <div className="text-primary">UI/UX Design</div>
                <div className="flex items-center gap-1">
                  <FaStar className="fill-yellow-400" />
                  <span>4.7</span>
                </div>
              </div>
              <div className="font-bold whitespace-nowrap overflow-hidden">Belajar Web Designer dengan Figma asfkjask jlsfkjalsfkj laflakf lkasjflaksjf laksf lksjl</div>
              <div className="font-medium">by Angela Doe</div>
              <div className="flex items-center gap-3 desktopfull:gap-6 my-1 font-medium">
                <div className="flex items-center gap-1">
                  <RiShieldStarLine className="text-[#73CA5C]" />
                  <span>Intermediate</span>
                </div>
                <div className="flex items-center gap-1">
                  <RiBook3Line className="text-[#73CA5C]" />
                  <span>10 Modul</span>
                </div>
                <div className="flex items-center gap-1">
                  <LuClock className="stroke-[#73CA5C]" />
                  <span>120 Menit</span>
                </div>
              </div>
              <button className="bg-[#489CFF] rounded-full p-1 px-6 font-medium text-white">Rp 249.000</button>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-3 gap-6 mt-4 text-sm desktopfull:text-base">
          {courses.map((course, index) => (
            <div key={index} className="rounded-3xl shadow-lg">
              <img src={course.url_img_preview || img1} alt={course.title} className="w-full h-[9rem] object-cover rounded-3xl" />
              <div className="px-3 pt-1.5 pb-3">
                <div className="flex justify-between font-bold">
                  <div className="text-primary">{course.Kategori.title}</div>
                  <div className="flex items-center gap-1">
                    <FaStar className="fill-yellow-400" />
                    <span>{course.avgRating !== 0 ? course.avgRating : "-"}</span>
                  </div>
                </div>
                <div className="font-bold whitespace-nowrap overflow-hidden">{course.title}</div>
                <div className="font-medium">{course.Mentor.name}</div>
                <div className="flex items-center gap-3 desktopfull:gap-6 my-1 font-medium">
                  <div className="flex items-center gap-1">
                    <RiShieldStarLine className="text-[#73CA5C]" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <RiBook3Line className="text-[#73CA5C]" />
                    <span>10 Modul</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LuClock className="stroke-[#73CA5C]" />
                    <span>120 Menit</span>
                  </div>
                </div>
                <button className="bg-[#489CFF] rounded-full p-1 px-6 font-medium text-white">{course.harga !== 0 ? `Rp ${course.harga}` : "Gratis"}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
