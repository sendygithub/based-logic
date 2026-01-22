import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bubbles, CameraIcon, MonitorSmartphoneIcon, Move3dIcon, PencilLineIcon, SquaresIntersect, Twitter } from "lucide-react";


export default function Home() {
  return (
    <div className="flex justify-center items-center grid place-content-center">
      

      
      <Button className="mt-10 mb-10">
        <Link href="/product">Tambah Product baju celana</Link>
      </Button>


      <Button className="mt-10 mb-10"
        variant="outline"
      >
        <Link href="/artikel"><PencilLineIcon size={20} />artikel</Link>
      </Button>

      <Button className="mt-10 mb-10"
        variant="outline"
      >
        <Link href="/movies"><CameraIcon size={20} /> movie</Link>
      </Button>

      <Button className="mt-10 mb-10 bg-blue-500"
        variant="outline"
      >
        <Link href="/twitter"><Twitter size={20} /> twitter</Link>
      </Button>

      <Button className="mt-10 mb-10 bg-red-500"
        variant="outline"
      >
        <Link href="/kalkulator"><Twitter size={20} /> kalkulator</Link>
      </Button>

      <Button className="mt-10 mb-10 bg-red-500"
        variant="outline"
      >
        <Link href="/usestate"><SquaresIntersect size={20} /> usestate</Link>
      </Button>





    </div>
  );
}
