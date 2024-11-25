import UserButton from "@/src/components/UserButton";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
          Tinkerbook
        </Link>
        <UserButton />
      </div>
    </header>
  );
}

// // import SearchField from "@/src/components/SearchField";
// // import UserButton from "@/src/components/UserButton";
// import UserButton from "@/src/components/UserButton";
// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <header className="sticky top-0 z-10 bg-card shadow-sm">
//       <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
//         <Link href="/" className="text-2xl font-bold text-primary">
//           Tinkerbook
//         </Link>
//         {/* <SearchField /> */}
//         <UserButton className="sm:ms-auto" />
//       </div>
//     </header>
//   );
// }
