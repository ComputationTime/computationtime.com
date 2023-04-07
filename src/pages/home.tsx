import { useInView } from "react-intersection-observer";
import ReactLogo from "../assets/react.svg";
export function Home() {
  const { ref: titleRef, inView: titleIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: projectRef, inView: projectIsVisible } = useInView();
  return (
    <>
      <section className="text-center sm:text-7xl sm:py-48 text-5xl my-10">
        <h1
          className={
            titleIsVisible
              ? "inline transition-opacity ease-in duration-1000 delay-[400ms]"
              : "inline opacity-0"
          }
          ref={titleRef}
        >
          Mathematics
        </h1>
        <h1
          className={
            titleIsVisible
              ? "inline transition-opacity ease-in duration-1000 delay-[1300ms]"
              : "inline opacity-0"
          }
        >
          {" "}
          &
        </h1>
        <h1
          className={
            titleIsVisible
              ? "transition-opacity ease-in duration-1000 delay-[2200ms]"
              : "opacity-0"
          }
        >
          Programming
        </h1>
      </section>

      <section>
        <div className="flex">
          <div className="min-h-[100vh] flex flex-col flex-[2_2_0] justify-center">
            <h1 className="text-2xl text-center">
              <span
                className={
                  projectIsVisible
                    ? " transition-colors ease-in duration-500 delay-700"
                    : "bg-black"
                }
              >
                Project
              </span>
            </h1>
            <p
              className={projectIsVisible ? "mx-20 my-10" : "mx-20 my-10"}
              ref={projectRef}
            >
              <span
                className={
                  projectIsVisible
                    ? " transition-colors ease-in duration-500 delay-[1200ms]"
                    : "bg-black"
                }
              >
                Lorem ipsum upsum lorem upsom deez Lorem ipsum upsum lorem upsom
                deez Lorem ipsum upsum lorem upsom deez Lorem ipsum upsum lorem
                upsom deez
              </span>
            </p>
          </div>

          <div className="flex flex-col flex-[3_3_0] justify-center items-center">
            {/* <h1 className="">Something</h1> */}
            <img src={ReactLogo} className="scale-[10]"></img>
          </div>
        </div>
      </section>
    </>
  );
}
