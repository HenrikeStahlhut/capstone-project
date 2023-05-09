import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

export default function BackButton() {
  return (
    <>
      <button>
        <Link href="/">
          <IoArrowBackOutline /> Back{" "}
        </Link>
      </button>
    </>
  );
}
