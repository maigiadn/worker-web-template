import { Link } from "@tanstack/react-router";
import { navigation } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-base font-semibold text-neutral-950">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {navigation.map((item) => (
            <Link key={item.href} to={item.href} className="text-neutral-700 hover:text-neutral-950">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
