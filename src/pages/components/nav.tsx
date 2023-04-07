import { NavLink } from "react-router-dom";
export function Nav(props: { options: any }) {
  const options = props.options;
  return (
    <div className="flex justify-between md:px-20 py-10 max-w-[10000px] text-xl">
      <div></div>
      {options.map((option: { path: string; name: string }) => {
        return (
          <NavLink
            to={option.path}
            key={option.name}
            className={({ isActive, isPending }) =>
              "underline underline-offset-4 " +
              (isActive
                ? "decoration-black"
                : "decoration-transparent hover:decoration-black hover:transition-colors hover:duration-300 transition-colors duration-300")
            }
          >
            {option.name}
          </NavLink>
        );
      })}
      <div></div>
    </div>
  );
}
