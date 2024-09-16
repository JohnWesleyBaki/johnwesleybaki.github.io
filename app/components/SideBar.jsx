import React from "react";
import Link from "next/link";
import Image from "next/image";

function SideBar() {
  return (
    <div className="h-25 w-10 bottom-2 left-2 bg-transparent fixed z-50 text-white flex flex-col justify-between hidden sm:flex">
      <Link href="https://github.com/JohnWesleyBaki/" target="_blank">
        <button>
          <Image
            src="/svgs/github.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="mb-2"
          />
        </button>
      </Link>

      <Link
        href="https://www.linkedin.com/in/john-wesley-baki/"
        target="_blank"
      >
        <button>
          <Image
            src="/svgs/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className="mb-2"
          />
        </button>
      </Link>
    </div>
  );
}

export default SideBar;
